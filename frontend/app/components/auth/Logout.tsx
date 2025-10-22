'use client'

import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/SupabaseClient";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 1. Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;

      // 2. Optional: Clear any app-specific storage
      localStorage.removeItem('user-preferences');
      sessionStorage.clear();

      // 3. Redirect to home
      router.push('/');
      
      // 4. Refresh all server components
      router.refresh();
      
    } catch (error) {
      console.error('Logout failed:', error);
      // Show error toast to user
    }
  };

  return (
    <button onClick={handleLogout} className="sidebar-footer-button logout-button">
        <LogOut size={20} />
        <span>Log Out</span>
    </button>
  );
}