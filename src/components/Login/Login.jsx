import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.log('error', error.massage)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSingIn}>google login</button>
            {user && <div>
                <h2>user : {user.displayName}</h2>
                <p>Email:{user.email} </p>
                <img src={user.photoURL} alt="" />
        
            </div>}
        </div>
    );
};

export default Login;