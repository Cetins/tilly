import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config(); // load .env

const app = express();
const PORT = process.env.PORT || 4000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tilly backend is running 🚀");
});

app.get("/employees", async (req, res) => {
  const { data, error } = await supabase.from("employees").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
