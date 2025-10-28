import styles from './Dashboard.module.css'

export default function OverviewPage() {
  return (
    <div className={styles.dashboard_content}>
      <header className={styles.dashboard_header}>
        <h1>Welcome back!</h1>
        <p>Here&apos;s your personalized dashboard</p>
      </header>

      <div className={styles.dashboard_grid}>
        <div className={styles.dashboard_card}>
          <h3>Quick Stats</h3>
          <p>View your recent performance</p>
        </div>

        <div className={styles.dashboard_card}>
          <h3>Recent Activity</h3>
          <p>Check your latest actions</p>
        </div>

        <div className={styles.dashboard_card}>
          <h3>Notifications</h3>
          <p>See what&apos;s new</p>
        </div>
      </div>
    </div>
  )
}