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

    <main className='main-comtainer' >
<div className="home_intro">
<div className="main-container">
<div className=' main-container grid grid-two--cols'>
    
      <div className='home_intro'>
      <h1> Welcome   </h1>
   
        <h3 className='h3'>This Virtual lab  will help you to understand all kind of CPU Scheduling Algorithms  in a  better way.</h3> <br/>
        <p>
       
       

       <p className='p4'> Start simulation now.</p>
      </p>

     <div className='btn-85'> <button onClick={handleChange} className="button-85" role="button">Get Started</button> </div>     
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