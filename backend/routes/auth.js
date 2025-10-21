import express from "express";
import supabase from "../db/supabaseClient.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { email, password, full_name } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name },
    },
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user, session: data.session });
});

router.get("/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or invalid token." });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    // 1️⃣ Authenticate user via Supabase
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return res.status(401).json({ error: error?.message || "Invalid token." });
    }

    const user = data.user;

    // 2️⃣ Fetch related profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("id, full_name, avatar_url, bio")
      .eq("id", user.id)
      .single();

    // 3️⃣ Fetch the shop (if user owns one)
    const { data: shop } = await supabase
      .from("shops")
      .select("id, name, location")
      .eq("owner_id", user.id)
      .single();

    // 4️⃣ Fetch staff (if applicable)
    const { data: staff } = await supabase
      .from("staff")
      .select("id, name, role")
      .eq("shop_id", shop?.id || null);

    // 5️⃣ Fetch recent sales
    const { data: sales } = await supabase
      .from("sales")
      .select("id, amount, date")
      .eq("shop_id", shop?.id || null)
      .order("date", { ascending: false })
      .limit(10);

    // 6️⃣ Return unified structure
    return res.status(200).json({
      user,
      profile,
      shop,
      staff,
      sales,
    });
  } catch (err) {
    console.error("Error in /auth/me:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;