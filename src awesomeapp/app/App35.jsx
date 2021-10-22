import React, { useState } from 'react'

export default function App35() {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const [userOrg, setUserOrg] = useState();
    const [passOrg, setPassOrg] = useState();

    let handleIdOnChange = (e) => {
        setUser(e.target.value);
    }
    let handlePassOnChange = (e) => {
        setPass(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setUserOrg(user);
        setPassOrg(pass);

        setUser('');
        setPass('');
    }

    return (
        <>
            <div className="container">
                <h3>Your username is : {userOrg} your password is : {passOrg}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" onChange={handleIdOnChange} value={user} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handlePassOnChange} value={pass} />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

//form with submit
//onSubmit is in top
//2 input 2 states
//another 2 state for reflect
//onSubmit(e),onChange(e) passes agr 'e'