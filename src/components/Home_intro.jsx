import { useNavigate } from 'react-router-dom'
import '../styles/Home_intro.css'
import  heroImage from'../assets/introImage1.png'
import { FaArrowDown } from "react-icons/fa6";
import Slider from './slider'



const Home_intro = () => {

  const navigate = useNavigate()

  const handleChange = ()=>{
      navigate('/docs')
  }
  return (

    <main  >
<div className="home_intro">
<div className="main-container">
<div className="title">
        <h1 className='main-heading'>
        Welcome To OS Lab
        </h1>
        <h3 className='h3'>This Virtual lab  will help you to understand all kind of CPU Scheduling Algorithms  in a  better way.</h3> 
      </div>

<div className=' main-container grid grid-two--cols'>
    
    
     <div className='home_intro home-right'>
      
   <div className="home-right-content">

    <div className="right-side-content">
      <p>
        <h2 className='h2'>Start</h2>
      <span class="sign">
     <span class="flicker">Simulation</span>
    
      <h2  className='h2'>Now</h2>
    </span>
      </p>
 
    <div className='btn-85'> <button onClick={handleChange} className="button-85" role="button">Get Started</button> </div>  
   
    </div>
      
    </div>
    </div>
    <div class="section-hero--image">
                    <Slider/>
                </div>

    </div>
      </div>
</div>

<div class="scroll-down">
<div class="arrow-container  ">

<FaArrowDown className='arrow-2'/>  


  <div class="arrow-1  hinge infinite zoomIn"></div>
</div>
</div>
    </main>

  )
}

export default Home_intro