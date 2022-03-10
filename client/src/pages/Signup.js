import React from 'react';
import '../assets/page-css/auth.css'

function Signup () {
    return (
        <main>
            {/* <h4>Sign Up</h4> */}
            <form>
                <input
                    placeholder="Your username"
                    name="username"
                    type="username"
                />
                <input
                    placeholder="******"
                    name="password"
                    type="password"                    
                />
                <button class='submit' type="submit">
                    Register
                </button>
            </form>
        </main>
    )
};

export default Signup;