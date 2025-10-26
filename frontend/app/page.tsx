import Image from "next/image";
import Link from "next/link";
import styles from './Hero.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero_text}>
          <h1>Turn Chaos into Clarity</h1>
          <p>Running a small business can be overwhelming, but managing your sales, stock, and commissions doesn't have to be. Tilly brings everything together in one intuitive platform, giving you a clear view of your business at a glance. Track sales, monitor inventory, calculate commissions, and make informed decisions faster — all while saving time and reducing errors. Focus on growing your business and serving your customers, while Tilly takes care of the details.</p>
          <div>
            <Link href="/signup" className={styles.btn_fill}>Join Us</Link>
          </div>
        </div>
        <div className={styles.hero_image}>
          <Image
            src="/barber-holding-tablet.png"
            width={500}
            height={500}
            alt="Sales tracking illustration"
          />
        </div>
      </section>
    </div>
  );
}
