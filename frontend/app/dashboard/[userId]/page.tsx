export default function OverviewPage() {
  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here&apos;s your personalized dashboard</p>
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Quick Stats</h3>
          <p>View your recent performance</p>
        </div>

        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <p>Check your latest actions</p>
        </div>

        <div className="dashboard-card">
          <h3>Notifications</h3>
          <p>See what&apos;s new</p>
        </div>
      </div>
    </div>
  )
}