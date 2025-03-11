import './LoginSign.css';

function LoginSign(){
    return(
        <div className="login_signup">
            <div className="login_main">
                <h1>Sign Up</h1>
                <div className="login_signup_form">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                    <input type="password" placeholder="Your password" />
                </div>
                <button>Continue</button>
                <p>Already have an account? <span>Login here</span></p>
            </div>
        </div>
    )
}

export default LoginSign;