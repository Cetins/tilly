import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-text">
          <h1>Turn Chaos into Clarity</h1>
          <p>Running a small business can be overwhelming, but managing your sales, stock, and commissions doesn’t have to be. Tilly brings everything together in one intuitive platform, giving you a clear view of your business at a glance. Track sales, monitor inventory, calculate commissions, and make informed decisions faster — all while saving time and reducing errors. Focus on growing your business and serving your customers, while Tilly takes care of the details.</p>
        </div>
        <div className="hero-image">
          <Image
            src="/tilly-illustration.png"
            width={500}
            height={500}
            alt="Sales tracking illustration"
          />
        </div>
      </section>
    </div>
  );
}
