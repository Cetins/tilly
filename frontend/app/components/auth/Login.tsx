'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/SupabaseClient";
import styles from './Auth.module.css';
import Input from "../Input/Input";
import ButtonFill from "../ButtonFill/ButtonFill";

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
    <div className={styles.card}>
      <h2>Log In</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className={styles.password_container}>
        <Input
          className={styles.password_input}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className={styles.password_toggle}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>
      <ButtonFill onClick={handleLogin}>Log In</ButtonFill>
      {message && <p>{message}</p>}
    </div>
  );
}