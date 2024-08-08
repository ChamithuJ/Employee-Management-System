import './style.css';

const Login = () => {
    return (
        <div className='loginpage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" name="username" placeholder="Username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary login-button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;