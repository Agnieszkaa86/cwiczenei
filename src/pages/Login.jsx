import { useNavigate, Navigate } from "react-router-dom";

function Login() {
    const isAuthenticated = false;
    const navigate = useNavigate();

    const showReports = () => {
        if (isAuthenticated) {
            console.log("ok-Show reports");
            navigate("/reports");
        } else {
            console.log("Nope -login first")
        }
    };

        if (!isAuthenticated) {
            return <Navigate to="/login-first" />;
        }
    
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={showReports}>Show reports</button>
        </>
    );
}

export default Login;