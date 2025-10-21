'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/SupabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Login successful!");
    
    // Small delay to show success message
    setTimeout(() => {
      if (data.user?.id) {
        router.push(`/dashboard/${data.user.id}`);
      } else {
        router.push('/dashboard');
      }
    }, 1000);
    
  } catch (error) {
    setMessage("An unexpected error occurred");
    console.error('Login error:', error);
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="card">
      <h2>Log In</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-container">
        <input
          className="input-field password-input"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>
      <button className="btn-fill" onClick={handleLogin}>Log In</button>
      {message && <p>{message}</p>}
    </div>
  );
}
