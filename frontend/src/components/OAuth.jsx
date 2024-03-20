import { Button } from 'flowbite-react'
import { AiFillAccountBook, AiFillGoogleCircle } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {

    const handleGoogleClick = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <Button type='button' gradientDuoTone='greenToBlue' outline onClick={handleGoogleClick}>
        <FcGoogle className='w-6 h-6 mr-2' />
            Continue with Google
        </Button>
  )
}

export default OAuth