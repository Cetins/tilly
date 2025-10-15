import Login from "../components/auth/Login";

export default function LoginPage() {
    return (
        <section className="container">
            <div className="column">
                <div className="box">
                    <h1>Welcome Back!</h1>
                    <p>Enter your details to continue.</p>
                </div>
            </div>
            <div className="column">
                <div className="box">
                    <Login/>
                </div>
            </div>
        </section>
    )
}