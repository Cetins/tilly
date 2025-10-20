'use client'

import { useParams } from 'next/navigation'
import { LogOut, Settings, Home, BarChart3 } from 'lucide-react'
import ThemeToggle from '@/app/components/ThemeToggle'
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const userId = params.userId as string

  const handleLogout = async () => {
    // Add your logout logic here
    // await supabase.auth.signOut()
    // router.push('/')
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        
        {/* Sidebar Navigation - Column Direction */}
        <nav className="sidebar-nav-column">
          <a href={`/dashboard/${userId}`} className="sidebar-nav-item">
            <Home size={20} />
            <span>Overview</span>
          </a>
          
          <a href={`/dashboard/${userId}/analytics`} className="sidebar-nav-item">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </a>
          
          <a href={`/dashboard/${userId}/settings`} className="sidebar-nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>

        {/* Sidebar Footer - Column Direction */}
        <div className="sidebar-footer-column">
          {/* Use your updated ThemeToggle component with Moon/Sun icons */}
          <ThemeToggle />
          
          <button 
            onClick={handleLogout}
            className="sidebar-footer-button logout-button"
          >
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  )
}