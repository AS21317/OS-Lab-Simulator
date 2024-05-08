import { Nav, Home_intro, Home_content, Home_blogs, Home_fly } from '../components'
import Footer from '../components/Footer'
import '../styles/Home.css'
 
const Home = () => {
  return (
   <>
      
        <Nav  />
      
      
          <Home_intro  />

      <Home_content/>
     <Home_blogs/>
     <Home_fly/>
      <Footer/> 
      
   </>
  )
}

export default Home