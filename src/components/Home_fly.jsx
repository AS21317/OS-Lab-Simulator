import {
  OSAlgorithms,
  graphAlgo,
  dpAlgo,
  btAlgo,
  searchingAlgo,
  sortingALgo,
 
} from "./data";
import { useEffect, useState } from "react";
import "../styles/Home_fly.css";

const Home_fly = () => {
  const [curAlgos, setCurAlgos] = useState(OSAlgorithms);
  const [ptext, setPtext] = useState("Operating System Algorithms");

  const handleCaptureText = (id) => {
    const paragraph = document.getElementById(id);
    if (paragraph) {
      const text = paragraph.innerText;
      setPtext(text);
    }
  };

  // const handleAlgoName=(algoname)=>{
  //   setCurAlgos(algoname)
  // }

  return (
    <section className="control-section">
<div className=" main-container home-fly-main">
<div className="main-container1">
      <h1>Welcome To Control Section</h1>
      <p>Read Subject and  Article of your choice directly </p>

      </div>
      <div className=" horizontal-container">
          <div className=" main-container">
            <p
              className="side-side-text"
              id="graphAlgo"
              onClick={() => {
                handleCaptureText(`graphAlgo`);
                setCurAlgos(graphAlgo);
              }}
            >
              Graph Algorithms
            </p>

            <p
              className="side-side-text"
              id="sortAlgo"
              onClick={() => {
                handleCaptureText("sortAlgo");
                setCurAlgos(sortingALgo);
              }}
            >
              Sorting Algorithms
            </p>

            <p
              className="side-side-text"
              id="searchAlgo"
              onClick={() => {
                handleCaptureText("searchAlgo");
                setCurAlgos(searchingAlgo);
              }}
            >
              Searching Algorithms
            </p>

            <p
              className="side-side-text"
              id="btAlgo"
              onClick={() => {
                handleCaptureText("btAlgo");
                setCurAlgos(btAlgo);
              }}
            >
              Backtracking Algorithms
            </p>

            <p
              className="side-side-text"
              id="osAlgo"
              onClick={() => {
                handleCaptureText("osAlgo");
                setCurAlgos(OSAlgorithms);
              }}
            >
              Operating System Algorithms
            </p>
            <p
              className="side-side-text"
              id="AIalgo"
              onClick={() => {
                handleCaptureText("AIalgo");
                setCurAlgos(aiAlgo);
              }}
            >
              Artificial Inteligence Algorithms
            </p>

            <p
              className="side-side-text"
              id="dpAlgo"
              onClick={() => {
                handleCaptureText("dpAlgo");
                setCurAlgos(dpAlgo);
              }}
            >
              Dynamic Programming Algorithms
            </p>
          </div>
        </div>

      <div className="total-circle">
      <div className="void" id="void">
        <div className="crop">
          <ul
            className="saste-nashe"
            id="card-list"
            style={{ "--count": curAlgos.length }}
          >
            {curAlgos.map(({ name, description }, index) => {
              return (
                <li
                  key={index}
                  className="saste-nashe-li"
                  style={{
                    animationDelay: `calc((var(--rotate-speed)/var(--count)) * ${-index}s)`,
                  }}
                >
                  <div
                    className="saste-nashe-card"
                    style={{
                      animationDelay: `calc((var(--rotate-speed)/var(--count)) * ${-index}s)`,
                    }}
                  >
                    <div className="saste-desc">
                      <h3 className="model-name"> {name} </h3>
                      <p className="description-control-card"> {description} </p>
                     
                      <button>Read Full Docs</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask">
        <div className="sidebar">
        <h1 className="side-upper-heading">Select  Categary</h1>
        <div className="side-nav-container">
          <div className="side-nav">
            <p
              className="side-side-text"
              id="graphAlgo"
              onClick={() => {
                handleCaptureText(`graphAlgo`);
                setCurAlgos(graphAlgo);
              }}
            >
              Graph Algorithms
            </p>

            <p
              className="side-side-text"
              id="sortAlgo"
              onClick={() => {
                handleCaptureText("sortAlgo");
                setCurAlgos(sortingALgo);
              }}
            >
              Sorting Algorithms
            </p>

            <p
              className="side-side-text"
              id="searchAlgo"
              onClick={() => {
                handleCaptureText("searchAlgo");
                setCurAlgos(searchingAlgo);
              }}
            >
              Searching Algorithms
            </p>

            <p
              className="side-side-text"
              id="btAlgo"
              onClick={() => {
                handleCaptureText("btAlgo");
                setCurAlgos(btAlgo);
              }}
            >
              Backtracking Algorithms
            </p>

            <p
              className="side-side-text"
              id="osAlgo"
              onClick={() => {
                handleCaptureText("osAlgo");
                setCurAlgos(OSAlgorithms);
              }}
            >
              Operating System Algorithms
            </p>
           

            <p
              className="side-side-text"
              id="dpAlgo"
              onClick={() => {
                handleCaptureText("dpAlgo");
                setCurAlgos(dpAlgo);
              }}
            >
              Dynamic Programming Algorithms
            </p>
          </div>
        </div>

        <script src="https://use.fontawesome.com/c9d2b81f44.js"></script>
      </div>
        </div>
        <div className="center-circle">
          <h3 className="center-circle-text">{ptext}</h3>
        </div>
      
      </div>
      </div>
   

     
    </div>
    </section>
    
  );
};

export default Home_fly;
