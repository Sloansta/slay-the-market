import React from 'react';

import '../assets/page-css/auth.css'

function Login () {
    return (
    <main>
        <div>
            <div>
                {/* <h4>Login</h4> */}
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
                        <button class='submit' type="submit">
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