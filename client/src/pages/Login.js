import React from 'react';



function Login () {
    return (
    <main>
        <div>
            <div>
                <h4>Login</h4>
                <div>
                    <form>
                        <input
                            placeholder="Your Username"
                            name="username"
                            type="text"
                        />
                        <input
                            placeholder="*****"
                            name="password"
                            type="password"
                        />
                        <button type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Login;