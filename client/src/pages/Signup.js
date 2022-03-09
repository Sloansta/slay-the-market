import React from 'react';


function Signup () {
    return (
        <main>
            <h4>Sign Up</h4>
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
                <button type="submit">
                    Register
                </button>
            </form>
        </main>
    )
};

export default Signup;