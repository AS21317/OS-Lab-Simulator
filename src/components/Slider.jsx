 import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import '../styles/Slider.css'

import image1 from '../assets/slideImage/GanntChart01.png';
import image2 from '../assets/slideImage/save02.jpg';
import image3 from '../assets/slideImage/pieChart.png';
import image4 from '../assets/slideImage/Processes.png';
import image5 from '../assets/slideImage/study.jpg';
// import image5 from '../assets/slideImage/save01.jpg';
// import image5 from '../assets/slideImage/save02.jpg';


let  data =
[
    {
      id: 1,
      image: image1,
      
      title: 'Get the Gannt Chart',
      quote:
        'Understanding of Gannt Chart play vital role to get the idea of Order of process execution.Here you will find live formation Of Gnaat Chart exactly when the process run',
    },
    {
      id: 2,
      image: image2,      
      title: 'Save your results ',
      quote:
        'You can save your questions results in your account after login for future uses and comparisions .You can edit your saved  question or run it on another algorithms ',
    },
    {
      id: 3,
      image: image3,     
      
       title: 'Get detailed Pie Chart',
      quote:
        'To make your understanding better we are also providing you PI-CHART after completion of processs, where you can see Waiting time and turn around time of each process ',
    },
    {
      id: 4,
      image: image4,      name: 'susan andersen',
      title: 'Explanation Of each Process',
      quote:
        'Explanation regarding each running process will appear above the table in the Box. you can control each step execution with the arrow keys. ',
    },
    {
        id: 4,
        image: image5,     
        
        title: 'Study importent topic Docs',
        quote:
          'To read Docs  you can refer our Docs page or control section of Home page. Go and select your subject along with topic to read sort summary of that topic .   ',
      },
     
  ];

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearTimeout(slider);
  }, [index]);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <section className="card-container-home">
      
        <div className="section">
      
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div className={`${position} cardhead`} key={id}>
                <div className=' main-card'>
              <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img className='person-img' src={image}/>
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>{title}</h3>
    <p>
      {quote}
  </p>
</div>
</div>
</div>
             
            </div>
          );
        })}
        
      </div>
      </div>
    </section>
  );
}

export default Slider;
