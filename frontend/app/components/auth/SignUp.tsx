'use client'

import { useState } from "react";
import { supabase } from "../../../lib/SupabaseClient"

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Sign-up successful! Check your email to confirm.");
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-fill" onClick={handleSignUp}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
}
