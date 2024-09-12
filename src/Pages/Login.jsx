import Hero from "../Components/Hero";
import { useNavigate } from "react-router-dom";

const Login = ( {userName, setUserName, userPassword, setUserPassword, setShowHome} ) => {
    const loginName = (e) => {
        setUserName(e.target.value)
    }

    const loginPassword = (e) => {
        setUserPassword(e.target.value)
    }

    const navigate = useNavigate();
    const loginsuccess = () => {
        if ((userName === 'avi') && (userPassword === 'avi')) {
            navigate("/home");
            setShowHome(true);
            setUserName('')
            setUserPassword('')
        }
    }
    
    return(
        <>
            <Hero pagetitle="Login Your Credentials" />
            <div className="login-container">
            {/* style={{textAlign: "left", margin: "auto"}} */}
                <form>
                LoginName : Your Name is {userName}
                    <input
                    className="form-control me-3 my-3"
                    type="text"
                    placeholder="Enter UserName/LoginName"
                    aria-label="Login"
                    value={userName}
                    onChange={loginName}
                    />
                Password :
                    <input
                    className="form-control me-3 my-3"
                    type="password"
                    placeholder="Enter Password"
                    aria-label="Login"
                    value={userPassword}
                    onChange={loginPassword}
                    />
                    <div className="my-3">
                        <button className="btn btn-outline-success" type="button" onClick={loginsuccess}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;