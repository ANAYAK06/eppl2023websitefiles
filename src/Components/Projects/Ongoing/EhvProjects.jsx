import React,{useState} from 'react'
import '../Card.css'
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { ongoehvProjects } from './ongoehv'


function EhvProjects() {


    const NextArrow = ({onClick})=> {
        return(
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
    
          </div>
        )
      }
      const PrevArrow = ({onClick})=> {
        return(
          <div className="arrow prev"onClick={onClick} >
            <FaArrowLeft />
    
          </div>
        )
      }
      const [imageIndex, setImageIndex]= useState(0)
      
    

    const settings = {

        dots:true,
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow />,
        beforeChange:(current, next)=>setImageIndex(next)
    
      }
      const [selectedImageIdx, setSelectedImageIdx] = useState(Array(ongoehvProjects.length).fill(0))

      const handleImageClick = (projectIdx, idx)=>{
        setSelectedImageIdx(prevState =>{
          const newState = [...prevState];
          newState[projectIdx] = idx
          return newState
        })

      }

     




  return (
    <>
    <Slider {...settings}>
        
            
        {
                ongoehvProjects.map((project,projectIdx)=>(
                    <article className={projectIdx === imageIndex? "slide activeSlide":"slide"} key={project.id}>
            
                    <div className="icon_image">
                        
                            
                                <img src={setSelectedImageIdx[projectIdx] !== null ? project.photoIcon[selectedImageIdx[projectIdx]]: null} alt="icon" />
                            
                        
                    </div>
                    <div className="project_details">
                        <h5>CLIENT: {project.client}</h5>
                        <h5>CUSTOMER: {project.customer}</h5>
                        <h5>LOCATION: {project.location}</h5>
                        <div className="btn_blue">
                        View Details
                        </div>
                        
                        
                    </div>
                    <div className='small_icon' >
                        {
                            project.photoIcon.map((photo, idx)=>(
                                <img key={idx} src={photo}  onClick={()=> handleImageClick(projectIdx, idx)} className={
                                  selectedImageIdx[projectIdx]===idx ? 'selected':''
                                }   alt="s-icon" />
                            ))
                                
                            
                        }
                        
                        
                    </div>
                    
                    
            
                </article>
                ))
            }
    
            
    
        </Slider>



    </>
  )
}

export default EhvProjects