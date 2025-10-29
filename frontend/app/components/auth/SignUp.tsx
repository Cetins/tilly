'use client'

import { useState } from "react";
import { supabase } from "../../../lib/SupabaseClient";
import styles from './Auth.module.css';
import ButtonFill from "../ButtonFill/ButtonFill";
import Input from "../Input/Input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Sign-up successful! Check your email to confirm.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <Input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className={styles.password_container}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.password_input}
      />
        <button
          type="button"
          className={styles.password_toggle}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>
      <ButtonFill onClick={handleSignUp}>Sign Up</ButtonFill>
      {message && <p>{message}</p>}
    </div>
  );
}