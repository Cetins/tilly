'use client'

import { useParams } from 'next/navigation'
import { Settings, Home, BarChart3, DollarSign } from 'lucide-react'
import ThemeToggle from '@/app/components/ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from '@/app/components/auth/Logout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const pathname = usePathname()
  const userId = params.userId as string

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return pathname === path
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
          <Link 
            href={`/dashboard/${userId}`} 
            className={`sidebar-nav-item ${isActive(`/dashboard/${userId}`) ? 'active' : ''}`}
          >
            <Home size={20} />
            <span>Overview</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/sales`} 
            className={`sidebar-nav-item ${isActive(`/dashboard/${userId}/sales`) ? 'active' : ''}`}
          >
            <DollarSign size={20} />
            <span>Submit Sales</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/analytics`} 
            className={`sidebar-nav-item ${isActive(`/dashboard/${userId}/analytics`) ? 'active' : ''}`}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/settings`} 
            className={`sidebar-nav-item ${isActive(`/dashboard/${userId}/settings`) ? 'active' : ''}`}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Sidebar Footer - Column Direction */}
        <div className="sidebar-footer-column">
          <ThemeToggle />
          
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  )
}