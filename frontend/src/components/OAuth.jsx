import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const auth = getAuth(app)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    // provider.setCustomParameters({  promt: 'select_account'})
    try {
        const resultsFromGoogle = await signInWithPopup(auth, provider)
        const res = await fetch('api/auth/google', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: resultsFromGoogle.user.displayName,
            email: resultsFromGoogle.user.email,
            googlePhotoUrl: resultsFromGoogle.user.photoURL
          })
        })
        const data = await res.json()
        if(res.ok){
          dispatch(signInSuccess(data))
          navigate('/')
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="greenToBlue"
      outline
      onClick={handleGoogleClick}
    >
      <FcGoogle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
