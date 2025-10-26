'use client'

import { useParams } from 'next/navigation'
import { Settings, Home, BarChart3, DollarSign } from 'lucide-react'
import ThemeToggle from '@/app/components/ThemeToggle/ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from '@/app/components/auth/Logout'
import styles from './Dashboard.module.css'

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
    <div className={styles.dashboard_container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_header}>
          <h2>Dashboard</h2>
        </div>
        
        {/* Sidebar Navigation - Column Direction */}
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

        {/* Sidebar Footer - Column Direction */}
        <div className={styles.sidebar_footer_column}>
          <ThemeToggle />
          
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.dashboard_main}>
        {children}
      </main>
    </div>
  )
}