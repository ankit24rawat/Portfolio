import React, { useState } from "react"
import Zoom from 'react-reveal/Zoom';

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  function getday(){

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }
    
    const created_at = new Date(props.time);
    let day = created_at.toLocaleDateString("en-US", options);

    return day;
  }

  return (

    <>
      <Zoom bottom>
        <div className='Prj-card btn_shadow '>
          <div className='card-title'>
            {/* <h2 onClick={toggleModal}>{props.title}</h2> */}
            <a target="_blank" rel="noopener noreferrer" href={props.hostedUrl}><h2>{props.title}</h2></a>
            <a target="_blank" rel="noopener noreferrer" href='#popup' className='arrow' onClick={toggleModal}>
              <i class='fas fa-arrow-right'></i>
            </a>
          </div>
          <div className="desc">
              <p>{props.details}</p>
              {props.hostedUrl === '' || props.hostedUrl === null ?
                ('') :
                (<p className="desc-sml"><span>Hosted:</span> <a target="_blank" rel="noopener noreferrer" href={props.hostedUrl}>{props.hostedUrl}</a></p>)
              }
          </div>

          <hr />
  
          {/* <div className='d_flex'>
            <i className='far fa-star'>{props.stars}</i>
            <i className='fas fa-code-branch'>{props.fork}</i>
          </div> */}
  
          <div className="card-btn">
            <a className='btn_shadow' target="_blank" rel="noopener noreferrer"  href={props.link}>
              <i class="fab fa-github"></i> Repo
            </a>
            <button className='btn_shadow dtl-btn' onClick={toggleModal}>
              <i class='fas fa-arrow-right'></i> Detail
            </button>
          </div>
        </div>
      </Zoom>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-text right'>
              <p>Project-Card</p>
              <h1>{props.title}</h1>
              <p>{props.details}</p>

              {props.hostedUrl === '' || props.hostedUrl === null ?
                ('') :
                (<p><span>Hosted Link :</span> <a target="_blank" rel="noopener noreferrer"  href={props.hostedUrl}>{props.hostedUrl}</a></p>)
              }
              {/* <p>The project hosted link is available at the GitHub repository Readme, please head over there to view project.</p> */}
              <p><span>Pushed on :</span> {getday()}</p>
              <p><span>Language :</span> {props.lang}</p>
              <p> <span>Stars</span> : {props.stars} &emsp;  &emsp; <span>Forks</span> : {props.fork}</p>
              <div className='button f_flex mtop card-btn'>
                {props.hostedUrl === '' || props.hostedUrl === null ?
                  ('') :
                  (<a target="_blank" rel="noopener noreferrer" href={props.hostedUrl} className='btn_shadow dtl-btn'>
                    <i class='fas fa-chevron-right'></i> View Project
                  </a>)
                }
                <a target="_blank" rel="noopener noreferrer" href={props.link} className='btn_shadow dtl-btn'>
                   <i class="fab fa-github"></i> Repository
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
