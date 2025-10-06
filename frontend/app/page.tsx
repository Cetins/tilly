export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Tilly 👋</h1>
      <p>Your sales and commission tracker starts here.</p>
      <a href="/about" className="btn">Learn more</a>
      <button className="btn-outline" style={{ marginLeft: '1rem' }}>
        Contact us
      </button>
    </div>
  );
}
