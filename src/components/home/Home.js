import React from "react"
import "./Home.css"
import { useTypewriter } from "react-simple-typewriter"

//React reveal
//import Fade from 'react-reveal/Fade';

// TODO: Add dark mode

const Home = () => {
  
  // typewriter bug fix using typewriter hook : typed only one word
  const {text} = useTypewriter({
    words: [' Full-stack Engineer.', ' Software Developer.', ' Competitive Programmer.'],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          
          {/* left area */}
          <div className='left top'>
            <h1>
              Hey👋, I’m <span>Ankit Rawat👨🏻‍💻</span>
            </h1>
            <h2>
              a 
              <span>{text}</span>
            </h2>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                  <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ank-rwt-799b7a23a'>
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/ankit24rawat'>
                    <button className='btn_shadow'>
                      <i class="fab fa-github"></i>
                    </button>
                  </a>
                {/* </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4> */}

               </div>
              </div>
            </div>
          </div>

          {/* Right area */}
          {/* <Fade right>
            <div className='right'>
                <img className='img-shadow' src={hero} alt='' />
            </div>
          </Fade> */}
        </div>
      </section>
    </>
  )
}

export default Home
