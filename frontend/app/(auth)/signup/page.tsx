import SignUp from "@/app/components/auth/SignUp"

export default function SignupPage() {
    return (
        <section className="container">
            <div className="column column-left">
                <div className="box">
                    <h1>Join Us</h1>
                    <p>Sign up for free and start using Tilly today.</p>
                </div>
            </div>
            <div className="column column-right">
                <div className="box">
                    <SignUp/>
                </div>
            </div>
        </section>
    )
}