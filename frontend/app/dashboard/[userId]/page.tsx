'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/SupabaseClient'
import { User, Mail, Calendar } from 'lucide-react'
import { User as SupabaseUser } from '@supabase/supabase-js' // Import the User type

export default function DashboardPage() {
  const params = useParams()
  const userId = params.userId as string
  const [user, setUser] = useState<SupabaseUser | null>(null) // Changed from 'any' to 'SupabaseUser'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      
      if (currentUser && currentUser.id === userId) {
        setUser(currentUser)
      }
      setLoading(false)
    }

    fetchUserData()
  }, [userId])

  if (loading) return <div className="loading">Loading...</div>
  if (!user) return <div>Unauthorized access</div>

  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here&apos;s your personalized dashboard</p> {/* Fixed the apostrophe */}
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <User className="card-icon" />
          <h3>Profile</h3>
          <p>Manage your account settings</p>
        </div>

        <div className="dashboard-card">
          <Mail className="card-icon" />
          <h3>Messages</h3>
          <p>Check your notifications</p>
        </div>

        <div className="dashboard-card">
          <Calendar className="card-icon" />
          <h3>Activity</h3>
          <p>View your recent activity</p>
        </div>
      </div>
    </div>
  )
}