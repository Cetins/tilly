'use client'

import { useParams } from 'next/navigation'
import { Settings, Home, BarChart3, DollarSign, Menu, X } from 'lucide-react' // ADD X icon
import ThemeToggle from '@/app/components/ThemeToggle/ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from '@/app/components/auth/Logout'
import styles from './Dashboard.module.css'
import { useState, useEffect } from 'react' // UPDATE this import

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const pathname = usePathname()
  const userId = params.userId as string
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return pathname === path
  }

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <div className={styles.dashboard_container}>
      {/* Mobile Header */}
      <header className={styles.mobile_header}>
        <button 
          className={styles.menu_toggle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* <h1 className={styles.mobile_title}>Dashboard</h1> */}
        <div className={styles.mobile_actions}>
          <ThemeToggle />
        </div>
      </header>

      {/* Sidebar - NOW WITH MOBILE TOGGLE */}
      <aside className={`${styles.sidebar} ${isMobileOpen ? styles.sidebar_mobile_open : ''}`}>
        <div className={styles.sidebar_header}>
          <h2>Dashboard</h2>
        </div>
        
        {/* Sidebar Navigation */}
        <nav className={styles.sidebar_nav_column}>
          <Link 
            href={`/dashboard/${userId}`} 
            className={`${styles.sidebar_nav_item} ${isActive(`/dashboard/${userId}`) ? styles.active : ''}`}
          >
            <Home size={20} />
            <span>Overview</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/sales`} 
            className={`${styles.sidebar_nav_item} ${isActive(`/dashboard/${userId}/sales`) ? styles.active : ''}`}
          >
            <DollarSign size={20} />
            <span>Submit Sales</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/analytics`} 
            className={`${styles.sidebar_nav_item} ${isActive(`/dashboard/${userId}/analytics`) ? styles.active : ''}`}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Link>
          
          <Link 
            href={`/dashboard/${userId}/settings`} 
            className={`${styles.sidebar_nav_item} ${isActive(`/dashboard/${userId}/settings`) ? styles.active : ''}`}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        <div className={styles.sidebar_footer_column}>
          <ThemeToggle />
          <LogoutButton />
        </div>

        {/* Mobile Overlay - NEW */}
        {isMobileOpen && (
          <div 
            className={styles.mobile_overlay}
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </aside>

      {/* Main Content */}
      <main className={styles.dashboard_main}>
        {children}
      </main>
    </div>
  )
}