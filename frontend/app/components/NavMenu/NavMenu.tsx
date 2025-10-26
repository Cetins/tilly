// NavMenu.tsx - FIXED VERSION
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/SupabaseClient'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { User, LogIn, Menu, X } from 'lucide-react'
import Link from 'next/link'
import styles from './NavMenu.module.css'

export default function Navigation() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // ← ADD THIS
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true) // ← SET TO TRUE WHEN COMPONENT MOUNTS ON CLIENT
    
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getCurrentUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleProfileClick = () => {
    if (user) {
      router.push(`/dashboard/${user.id}`)
      closeMobileMenu()
    } else {
      router.push('/login')
      closeMobileMenu()
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Don't render anything until mounted on client
  if (!isMounted) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.nav_left}>
          <h1 className={styles.logo}>Tilly</h1>
        </div>
        {/* Render minimal content during SSR */}
        <div className={styles.nav_mobile_toggle}>
          <button className={styles.nav_button} disabled>
            <Menu size={20} />
          </button>
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.navbar}>
      {/* Left side - Logo/Brand */}
      <div className={styles.nav_left}>
        <h1 className={styles.logo}>Tilly</h1>
      </div>

      {/* Center - Navigation Items (Desktop) */}
      <div className={styles.nav_center}>
        <Link href="/" className={styles.nav_link}>Home</Link>
        <Link href="/about" className={styles.nav_link}>About</Link>
        <Link href="/services" className={styles.nav_link}>Services</Link>
        <Link href="/contact" className={styles.nav_link}>Contact</Link>
      </div>

      {/* Right side - Login/Profile Button (Desktop) */}
      <div className={styles.nav_right}>
        {loading ? (
          <button className={styles.nav_button} disabled>
            <User size={20} />
          </button>
        ) : (
          <button 
            className={styles.nav_button}
            onClick={handleProfileClick}
            title={user ? 'Profile' : 'Login'}
          >
            {user ? <User size={20} /> : <span className={styles.nav_button_items}><LogIn size={20} />Login</span>}
          </button>
        )}
      </div>

      {/* Mobile Hamburger Button */}
      <div className={styles.nav_mobile_toggle}>
        <button 
          className={styles.nav_button}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobile_menu_overlay}
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobile_menu} ${isMobileMenuOpen ? styles.mobile_menu_open : ''}`}>
        {/* Mobile Navigation Links */}
        <div className={styles.mobile_nav_section}>
          <Link href="/" className={styles.nav_link} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.nav_link} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/services" className={styles.nav_link} onClick={closeMobileMenu}>
            Services
          </Link>
          <Link href="/contact" className={styles.nav_link} onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>

        {/* Mobile Auth Button */}
        <div className={styles.mobile_auth_section}>
          {loading ? (
            <button className={styles.nav_button} disabled>
              <User size={20} />
            </button>
          ) : (
            <button 
              className={styles.nav_button}
              onClick={handleProfileClick}
            >
              {user ? (
                <span className={styles.nav_button_items}>
                  <User size={20} />
                  Profile
                </span>
              ) : (
                <span className={styles.nav_button_items}>
                  <LogIn size={20} />
                  Login
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}