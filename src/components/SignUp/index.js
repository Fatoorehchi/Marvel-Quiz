import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../Firebase'

const SignUp = () => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = (event) => {
        setLoginData({...loginData, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = loginData;
        firebase.signUpUser(email, password)
        .then(user => {
            setLoginData({...data})
        })
        .catch(error => {
            setError(error)
            setLoginData({...data})
        })
    }

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === ''|| password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button> 


    //gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                            {btn}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
