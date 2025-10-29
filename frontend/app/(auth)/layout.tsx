import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      {/* Simple layout for auth pages - you can add a special auth header later */}
      <main>{children}</main>
    </div>
  );
}