"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext"; // make sure path matches your folder structure

export default function ProfileButton() {
    const { user, loading, signOut } = useAuth();

    if (loading) return null; // optional: prevents flicker on first render
  
    return (
        <div>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button onClick={signOut}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            Login
          </Link>
        )}
      </div>
    )
}
  