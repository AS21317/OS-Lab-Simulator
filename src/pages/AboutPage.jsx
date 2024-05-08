import { Nav, TeamCard } from '../components'
import '../styles/About.css'

import ashishImg from '../assets/teamImage/ashishImg.png'
import kavyaImg from '../assets/teamImage/kavyaImg.png'
import socialImg from '../assets/teamImage/Social.png'
import InstructorCard from '../components/InstructorCard'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div className='about-us-page'>
      
        <Nav />
       <div className="title">Our Team</div>

       

    
    
       <div className="main-container">
       <div className=" card-box-both   ">
          <TeamCard className="child1" name="Ashish Singh" id='1' image = {ashishImg} social={socialImg} />
          <TeamCard className="child1" name="Kavya Gupta" id='2' image={kavyaImg}  social={socialImg} />
         
         
         
        </div>
    
       </div>
         

      {/* <div className="out-instructor-container">
        <InstructorCard/>
      </div> */}
     
    
    </div>
  )
}

export default About