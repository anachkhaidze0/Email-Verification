import headerLogo from './images/logo.svg'
import arrow from './images/icon-arrow.svg'
import errorIcon from './images/icon-error.svg'
import {useState} from 'react'

const App = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  let regex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

  const validEmail = input => regex.test(input)

  const handleChange = e => {
    if(e.target.value === ''){
      setError(null)
    }else if (!validEmail(e.target.value)){
      setError(<img id="error-icon" src={errorIcon} alt="error" />)
    }else if(validEmail(e.target.value)){
      setError(null)
    }

    setEmail(e.target.value)
  }


 
  return (
      <main className='md:space-y-8 lg:space-y-0'>
        <div className='pt-2 md:pt-4 lg:hidden'>
          <img className="w-1/4 h-1/4 m-6 md:w-1/5" src={headerLogo} alt="logo" />
        </div>
        <div className='image-wrapper w-full h-1/3 lg:h-full lg:absolute lg:full lg:w-1/2 lg:top-0 lg:right-0'>
          <div className="image h-full bg-no-repeat bg-cover lg:full"></div>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff] to-[#fff5f5] min-h-screen md:space-y-8 lg:flow-root lg:float-left lg:w-1/2 lg:px-12 xl:px-32'>
          <div className='hidden lg:block lg:pl-6'>
            <img className="w-1/4 h-1/4 m-6" src={headerLogo} alt="logo" />
          </div>
          <div className='flex text-center pt-9 flex-col md:space-y-8 lg:text-start lg:px-12 lg:space-y-6'>
            <h1 className='text-[2rem] leading-tight font-bold tracking-[.25em] w-full text-[#413a3a] lg:text-[3.2rem] lg:mt-12'><span className='font-thin text-[#ce9797]'>WE'RE</span> <br/> COMING <br/> SOON</h1>
            <p className='text-xs text-[#ce9797] mt-4 mx-7 md:mx-32 lg:text-base lg:mx-0'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          </div>
          <form className='flex flex-row mt-6 border-solid border border-[#ce9797] rounded-full mx-8 md:mx-32 lg:mx-12 invalid:border-red-500 invalid:border-2'>
            <input id="email" type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' name="email" value={email} onChange={handleChange} placeholder='Email Address' className='grow border-none pl-3 bg-transparent text-sm text-[#ce9797] translate-y-0.5 placeholder:text-[#ce9797] focus:outline-none' />
            <div className='self-center mr-2'>{error}</div>
            <button className='bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] rounded-full shadow-xl py-2 px-5 lg:py-3 lg:px-8 hover:px-10 hover:translate-x-3 hover:from-[#f8bfbf] hover:to-[#ce9797]'><img src={arrow} alt="arrow" className='' /></button>
          </form>
        </div>
      </main>
  );
}

export default App;
