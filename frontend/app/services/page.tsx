import styles from './Services.module.css'

export default function ServicesPage () {
    return (
        <div className={styles.page_container}>
            {/* Hero Section */}
            <section>
                <div className={styles.text_block}>
                <h1>Small Business Management, Made Simple</h1>
                <p>
                    Tilly helps you manage payments, commissions, and product sales in one intuitive platform. 
                    Built for small businesses that deserve big solutions without the complexity.
                </p>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <div className={styles.text_block}>
                    <h2>Everything Your Small Business Needs</h2>
                    <p>Designed specifically for businesses with mixed payment structures and growth ambitions</p>
                    
                    <h3>Smart Payment Management</h3>
                    <p>
                        Seamlessly handle wages, self-employed contractors, and commission-based staff 
                        in one unified system.
                    </p>
                    <ul className={styles.text_list}>
                        <li>Automated commission calculations</li>
                        <li>Flexible payment scheduling</li>
                        <li>Real-time earnings tracking</li>
                    </ul>

                    <h3>Integrated Product Sales</h3>
                    <p>
                        Add product offerings to your service business without the operational headache.
                    </p>
                    <ul className={styles.text_list}>
                        <li>Easy product catalog setup</li>
                        <li>Inventory tracking</li>
                        <li>Seamless checkout experience</li>
                    </ul>

                    <h3>Transparent Team Performance</h3>
                    <p>
                        Empower your team with clear visibility into their earnings and performance.
                    </p>
                    <ul className={styles.text_list}>
                        <li>Real-time commission dashboards</li>
                        <li>Performance analytics</li>
                        <li>Automated payout reports</li>
                    </ul>
                </div>
            </section>

            {/* Value Proposition */}
            <section>
                <div className={styles.text_block}>
                    <h2>Why Small Businesses Choose Tilly</h2>
                    
                    <h3>Built for Real Business Challenges</h3>
                    <p>
                        We understand that modern small businesses often have hybrid teams. 
                        Tilly handles this complexity so you don't have to.
                    </p>

                    <h3>Affordable Growth</h3>
                    <p>
                        Unlike enterprise solutions, Tilly focuses on what actually matters for small business growth.
                    </p>

                    <h3>Revenue Expansion Made Easy</h3>
                    <p>
                        Create new revenue streams without operational overhead or technical barriers.
                    </p>

                    <h3>Transparent by Design</h3>
                    <p>
                        Follow our open development journey and see exactly how we're building the tools you need.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section>
                <div className={styles.text_block}>
                    <h2>Ready to Simplify Your Business Operations?</h2>
                    <p>
                        Join small business owners who are taking back their time and growing their revenue with Tilly.
                    </p>
                    <p>
                        No credit card required • Setup in minutes • Cancel anytime
                    </p>
                    <p>
                        Have questions? <a href="/contact">Contact us</a> to learn more.
                    </p>
                </div>
            </section>
        </div>
    )
}