import { Link, useNavigate } from 'react-router-dom'
import background from '../assets/background.jpg'
import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const { loginWithGoogle, githublogin,createUser, updateUserProfile, setUser } =
    useContext(AuthContext)

  const handleSignUp = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const photo = form.photo.value
    const pass = form.password.value
    console.log({ email, pass, name, photo })

    if (pass.length < 6) {
    return toast.error("Password must be at least 6 characters long.")
   }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;  
    if (!passwordRegex.test(pass)) {
      return toast.error( "Password must one uppercase letter, one lowercase letter.")
    }

    try {
      //2. User Registration
      const result = await createUser(email, pass)
      console.log(result)
      await updateUserProfile(name, photo)
      setUser({ ...result.user, photoURL: photo, displayName: name })
      toast.success('Registration Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      
    }
    
  }
 


  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()

      toast.success('Signin Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  // Github Registation
  const handleGithubRegister = async () => {
    try {
      await githublogin()
      toast.success('Github Registation Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <div className='flex justify-end items-center  my-5'>
          <div className='flex h-[630px] w-10/12 md:w-8/12 mx-auto overflow-hidden bg-white rounded-lg shadow-lg  '>
          
    
            <div className='w-full h-full'
             style={{
               backgroundImage: `url(${background})`,
               backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
              
              <div className=' mt-6 border backdrop-blur-3xl md:w-6/12 w-9/12 mx-auto  rounded-lg shadow-2xl'>
                <p className='mt-2 mb-10 text-5xl font-extrabold text-center text-white '>
               Register
              </p>
    
              <div
                onClick={handleGoogleSignIn}
                className=' text-white w-10/12 mx-auto flex cursor-pointer items-center justify-center mt-4  transition-colors duration-300 transform border rounded-2xl   hover:bg-slate-300 '
              >
                <div className='py-2 '>
                  <svg className='w-6 h-6' viewBox='0 0 40 40'>
                    <path
                      d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                      fill='#FFC107'
                    />
                    <path
                      d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                      fill='#FF3D00'
                    />
                    <path
                      d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                      fill='#4CAF50'
                    />
                    <path
                      d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                      fill='#1976D2'
                    />
                  </svg>
                </div>
                <span className='  px-4 py-3 font-bold text-center'>
                  Registration with Google
              </span>
              </div>
              <div className='flex  justify-center'><button onClick={handleGithubRegister} className='text-white font-bold border mt-1 p-1 rounded-lg'>Github</button></div>
              <div className='flex items-center justify-between mt-4'>
                <span className='w-1/5 border-b  lg:w-1/4'></span>
    
                <div className='text-xs text-center text-white uppercase  hover:underline'>
                  or Registration with Email
                </div>
    
                <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
              </div>
            <form onSubmit={handleSignUp}>
              <div className='mt-4 w-10/12 mx-auto '>
              <input
                id='name'
               placeholder='name'
                name='name'
                className=' bg-transparent w-full px-4 py-2 text-gray-700 bg-white border border-white shadow-xl rounded-2xl '
                type='text'
              />
              </div>
              <div className='mt-4 w-10/12 mx-auto '>
              <input
                placeholder='Photo URL'
                name='photo'
                className=' bg-transparent w-full px-4 py-2 text-gray-700 bg-white border border-white shadow-xl rounded-2xl'
                type='text'
              />
            </div>
                <div className='mt-4 w-10/12 mx-auto '>
                  <input
                    placeholder='Email Address'
                    name='email'
                    className=' bg-transparent w-full px-4 py-2 text-gray-700 bg-white border border-white shadow-xl rounded-2xl  '
                    type='email'
                  />
                </div>
    
                <div className='relative mt-4 w-10/12 mx-auto'>  
                <input type={showPassword ? "text" : 'password'}
                    name='password'
                    placeholder='Password'
                    className=' w-full px-4 py-2 bg-transparent border rounded-3xl text-white border-white shadow-xl'
                 
                />
                <label className="label">
              <button onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[16px] right-5 text-gray-500">
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> :  <FaEye></FaEye>
               }
              </button>
          </label>
                </div>
               
                <div className='mt-4 w-10/12 mx-auto '>
                  <button
                    type='submit'
                    className='w-full px-6 py-3 text-sm font-bold tracking-wide text-black capitalize transition-colors duration-300 transform bg-white hover:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-300 rounded-2xl'
                  >
                    Resister
                  </button>
                </div>
              </form>
    
              <div className='flex items-center justify-center mt-4 '>
               
    
                <Link
                  to='/login'
                  className='text-sm mb-8 text-white   '
                >
                  <p>Don't have an account? <span className='font-bold hover:underline'>Login</span></p>
                </Link>
    
                
              </div>
            </div>
    
              
            </div>
          </div>
        </div>
  )
}

export default Register