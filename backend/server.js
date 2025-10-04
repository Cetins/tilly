import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const PORT = 4000;

// Load Supabase credentials from environment variables
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Tilly backend is running 🚀");
});

// Example route: get all employees
app.get("/employees", async (req, res) => {
  const { data, error } = await supabase.from("employees").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
