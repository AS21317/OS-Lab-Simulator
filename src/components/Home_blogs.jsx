import '../styles/Home_blogs.css'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

const Home_blogs = () => {
  return (
  <section className="section-blog">
      <div className=' main-container '>
      <div className='heading-content'>
      <h1>Operating Systems Blogs </h1>
      <p>Reading blogs are efficient way to learn </p>
      </div>
     
      <div className=" grid grid-three--cols">
  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog6}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">Microcontroller vs Microprocessor</h2>
            <p>Microcontrollers and microprocessors are different ways of organizing and optimizing a...</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>


  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog4}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">Difference in RAM and ROM</h2>
            <p>RAM is volatile memory that temporarily stores the files you are working on. ROM is non-volatile...</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>



  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog2}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">What is Semaphore ?</h2>
            <p>A semaphore is a variable or abstract data type used to control access to a common resource by...</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>

  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog5}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">What is Deadlock ?</h2>
            <p>A deadlock is a condition that may happen in a system composed of multiple processes that can access..</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>


  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog3}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">What is Storage ?</h2>
            <p>Storage is a process through which digital data is saved within a data storage device by means of...</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>

  <article>
  <div class="about-div">
               <div class="icon">
                <img src={blog1}  alt="Research"/> 
            </div> 
           

            <div className="content-card">
            <h2 class="section-common--title">What is Storage ?</h2>
            <p>Storage is a process through which digital data is saved within a data storage device by means of...</p>
        </div>
  <button className="button-81" role="button"><a href="https://www.fusion-reactor.com/blog/multithreading-and-multiprocessing/#:~:text=A%20multiprocessing%20system%20has%20more,runs%20parallel%20to%20each%20other." target='_blank' >Read More</a></button>
            </div>
  
  
  </article>

  
</div>

    </div>
  </section>
  )
}

export default Home_blogs