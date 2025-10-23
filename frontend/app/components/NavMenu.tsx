// NavMenu.tsx - FIXED VERSION
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/SupabaseClient'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { User, LogIn, Menu, X } from 'lucide-react'
import Link from 'next/link'

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
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo">Tilly</h1>
        </div>
        {/* Render minimal content during SSR */}
        <div className="nav-mobile-toggle">
          <button className="nav-button" disabled>
            <Menu size={20} />
          </button>
        </div>
      </nav>
    )
  }

  return (
    <nav className="navbar">
      {/* Left side - Logo/Brand */}
      <div className="nav-left">
        <h1 className="logo">Tilly</h1>
      </div>

      {/* Center - Navigation Items (Desktop) */}
      <div className="nav-center">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>

      {/* Right side - Login/Profile Button (Desktop) */}
      <div className="nav-right">
        {loading ? (
          <button className="nav-button" disabled>
            <User size={20} />
          </button>
        ) : (
          <button 
            className="nav-button"
            onClick={handleProfileClick}
            title={user ? 'Profile' : 'Login'}
          >
            {user ? <User size={20} /> : <span className='nav-button-items'><LogIn size={20} />Login</span>}
          </button>
        )}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="nav-mobile-toggle">
        <button 
          className="nav-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Mobile Navigation Links */}
        <div className="mobile-nav-section">
          <Link href="/" className="nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className="nav-link" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/services" className="nav-link" onClick={closeMobileMenu}>
            Services
          </Link>
          <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>

        {/* Mobile Auth Button */}
        <div className="mobile-auth-section">
          {loading ? (
            <button className="nav-button" disabled>
              <User size={20} />
            </button>
          ) : (
            <button 
              className="nav-button"
              onClick={handleProfileClick}
            >
              {user ? (
                <span className="nav-button-items">
                  <User size={20} />
                  Profile
                </span>
              ) : (
                <span className="nav-button-items">
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