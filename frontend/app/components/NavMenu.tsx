'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/SupabaseClient'
import { User, LogIn } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getCurrentUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleProfileClick = () => {
    if (user) {
      router.push(`/dashboard/${user.id}`)
    } else {
      router.push('/login')
    }
  }

  return (
    <nav className="navbar">
      {/* Left side - Logo/Brand */}
      <div className="nav-left">
        <h1 className="logo">Your Logo</h1>
      </div>

      {/* Center - Navigation Items (row direction) */}
      <div className="nav-center">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>

      {/* Right side - Login/Profile Button */}
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
            {user ? <User size={20} /> : <LogIn size={20} />}
          </button>
        )}
      </div>
    </nav>
  )
}