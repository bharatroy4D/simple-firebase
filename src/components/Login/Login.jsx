import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log('error',error.massage)
        })
    }
    return (
       <div>
        <button onClick={handleGoogleSingIn}>google login</button>
       </div>
    );
};

export default Login;