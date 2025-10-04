export const metadata = {
    title: 'Tilly',
    description: 'Sales and commission tracker for small businesses',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header style={{ padding: '1rem', background: '#f0f0f0' }}>
            <h1>Tilly</h1>
          </header>
          <main style={{ padding: '1rem' }}>
            {children}
          </main>
        </body>
      </html>
    )
  }
  