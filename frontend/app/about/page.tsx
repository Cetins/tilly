import Image from "next/image";


export default function AboutPage() {
   return (
     <div className="container">
       <section className="hero">
         <div className="hero-text">
           <h1>About Tilly</h1>
           <p>Every small business has a story. And, if we’re honest, every small business also has a headache.</p>
           <p>Managing employees, tracking commissions, selling products — it’s a lot. Especially for businesses with a mix of wages, self-employed team members, or incentive-based pay. And when you want to add products to increase revenue, things get even more complicated. The pandemic made these challenges even harder, and many digital solutions available today are either too complex or too expensive for small businesses to adopt.</p>
         </div>
         <div className="hero-image">
           <Image
             src="/chaos_to_joy.png"
             width={500}
             height={500}
             alt="Sales tracking illustration"
           />
         </div>
       </section>


       <section className="hero">
         <div className="hero-text">
           <p>That’s where Tilly comes in. I started Tilly to make life easier for small businesses — to help them manage payments, commissions, and products all in one place. Our mission is simple: reduce the digital stress so that business owners can focus on what really matters — serving their customers and growing sustainably.</p>
           <p>Tilly is being built openly, step by step, and we share our journey here. We want small businesses to feel supported, empowered, and equipped with a tool that truly fits their needs. No unnecessary complexity, no expensive barriers — just smart, practical solutions designed for the people who keep our communities running.</p>
           <p>Follow along to see Tilly grow, and join us on our journey to make small business management simpler, smarter, and more enjoyable.</p>
         </div>
         <div className="hero-image">
           <Image
             src="/server-holding-tablet.png"
             width={500}
             height={500}
             alt="Sales tracking illustration"
           />
         </div>
       </section>


       <section className="hero">
         <div className="hero-text">
           <h2>How Tilly Helps</h2>
           <ul className="text-list">
             <li>Simplify payments: Easily manage wages, self-employed staff, and commission structures.</li>
             <li>Boost product sales: Offer products without adding extra work or stress.</li>
             <li>Empower your team: Track commissions and incentivize employees fairly and transparently.</li>
             <li>Affordable & practical: Designed for small businesses without expensive overheads or unnecessary features.</li>
             <li>Grow with confidence: Focus on your business growth, while Tilly handles the administrative side.</li>
             <li>Follow along to see Tilly grow, and join us on our journey to make small business management simpler, smarter, and more enjoyable.</li>
           </ul>
         </div>
         <div className="hero-image">
           <Image
             src="/sales-pitch.jpg"
             width={500}
             height={500}
             alt="Sales tracking illustration"
           />
         </div>
       </section>
     </div>
   );
 }





