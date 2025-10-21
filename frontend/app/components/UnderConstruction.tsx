export default function UnderConstruction() {
    return(
        <div className="text-block">
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <svg width="120" height="100" viewBox="0 0 120 100" style={{ margin: '0 auto 1.5rem' }}>
                {/* Base blocks */}
                <rect x="20" y="60" width="25" height="20" fill="var(--color-primary)" opacity="0.7"/>
                <rect x="55" y="50" width="25" height="30" fill="var(--color-primary)" opacity="0.8"/>
                <rect x="90" y="40" width="25" height="40" fill="var(--color-primary)" opacity="0.9"/>
                
                {/* Construction lines */}
                <line x1="32" y1="40" x2="32" y2="60" stroke="var(--color-text)" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="67" y1="30" x2="67" y2="50" stroke="var(--color-text)" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="102" y1="20" x2="102" y2="40" stroke="var(--color-text)" strokeWidth="1" strokeDasharray="3 2"/>
                </svg>
                <h2>Coming Soon</h2>
                <p>We&#39;re constructing this feature for you</p>
            </div>
        </div>
    )
}