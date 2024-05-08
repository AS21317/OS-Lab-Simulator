import { Link } from "react-router-dom";
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { dark } from '@clerk/themes'
import { SpringButton } from ".";
import '../styles/Nav.css'
import logo1 from "../assets/image.png";

const Nav = () => {
  return (

    <header className="section-navbar" >
  <div className=" main-container ">

  <div class="navbar-brand">
                <Link to="#">
                    <img src={logo1} alt="Ashish Singh" width="80%" height="600px"></img>
                </Link>
            </div>
       
       <nav className="navbar">
        <ul className='flex gap-6 links'>
          <li> <Link  to={'/'}> Home</Link> </li>
          <li> <Link to={'/docs'}>Docs</Link> </li>
          <li> <Link to={'/simulator'}>Simulator</Link> </li>
          <li> <Link to={'/about'}>About</Link> </li>

          <SignedIn>
            <UserButton  afterSignOutUrl='/' appearance={{ baseTheme: dark }} userProfileProps={{ appearance: { baseTheme: dark }}} />
          </SignedIn>

          <SignedOut>
            <Link className="after:hidden" to={'/sign-in'}> 
              <SpringButton> Sign In </SpringButton> 
            </Link>
          </SignedOut>
        </ul>
       </nav>
    </div>
    </header>
  
  )
}

export default Nav