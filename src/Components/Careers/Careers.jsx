import React, { useState } from "react";
import "./Careers.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { careerData } from "./careersdata";
import Careerimg from "../../Assets/career.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Careers() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const onClickItem = (itemId) => {
    setSelectedItemId(itemId);
  };

  const [educationDetails, setEducationDetails] = useState([]);

  const addEducationalDetails = () => {
    setEducationDetails([...educationDetails, { institution: "", degree: "" }]);
  };
  const removeEducationDetails = (index) => {
    const updateEducationDetials = [...educationDetails];
    updateEducationDetials.splice(index, 1);
    setEducationDetails(updateEducationDetials);
  };

  const handleEducationDetailsChange = (index, key, value) => {
    const updateEducationDetails = [...educationDetails];
    updateEducationDetails[index][key] = value;
    setEducationDetails(updateEducationDetails);

  }
  const [experienceDetails, setExperienceDetails] = useState([]);

  const addExperienceDetails = () => {
    setExperienceDetails([...experienceDetails, { orgainization: "", position: "" }]);
  };
  const removeExperienceDetails = (index) => {
    const updateExperienceDetails = [...experienceDetails];
    updateExperienceDetails.splice(index, 1);
    setExperienceDetails(updateExperienceDetails);
  };

  const handleExperienceDetailsChange = (index, key, value) => {
    const updateExperienceDetails = [...experienceDetails];
    updateExperienceDetails[index][key] = value;
    setExperienceDetails(updateExperienceDetails);

  }
  const [skill, setSkills] = useState([])

  const addSkills = ()=>{
    const newSkill = (
      <div key={skill.length}  className="skillsets">
      <div className="close_icon" onClick={()=>removeSkills(skill.length)}>
        <AiOutlineCloseCircle />
      </div>
      <textarea name="" id="" cols="103" rows="10" placeholder="Separate your Skills with coma"></textarea>
    </div>

    )
    setSkills([...skill, newSkill])

  }
  const removeSkills =(index)=>{
    const newSkill = [...skill];
    newSkill.splice(index,1)
    setSkills(newSkill)
  }

  
  

  return (
    <section id="career" className="careers">
      <div className="career_banner">
        <img src={Careerimg} alt="" />
      </div>
      <div className="career_text">
        <h3 className="h3text">​​​​​​​Find the job categories that fit you</h3>
        <p>
          Every job is different. What are your skills and interests? <br />{" "}
          Where do you want to grow and develop? <br /> Check below and browse
          our job categories
        </p>
      </div>
      <div className="categories">
        <h3>
          <u>Categories</u>
        </h3>
        <div className="category">
          {careerData.map((cd) => (
            <article
              key={cd.id}
              onClick={() => onClickItem(cd.id)}
              className={
                selectedItemId === cd.id
                  ? "clicked_category c_selection"
                  : "c_selection"
              }
            >
              <p>{cd.title}</p>
              <div className="right-arrow">
                <AiOutlineArrowRight />
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedItemId && (
        <div className="input_area">
          <div className="input_name">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="District " required />
            <input type="number" placeholder="Pin Code" required />
            <input type="number" placeholder="Contact Number" required />
          </div>
          <div className="education">
            {educationDetails.map((education, index) => (
              <div className="details" key={index}>
                <div
                  className="close_icon"
                  onClick={() => removeEducationDetails(index)}
                >
                  <AiOutlineCloseCircle />
                </div>
                <div className="form_details">
                  
                <input
                  type="text" name="college"
                  placeholder="Enter School/College/University Name"
                  value={education.institution}
                  onChange={(e) =>
                    handleEducationDetailsChange(
                      index,
                      "institution",
                      e.target.value
                    )
                  }
                />
                <input
                  type=" text"
                  placeholder=" Enter Degree Type"
                  value={education.degree}
                  onChange={(e) =>
                    handleEducationDetailsChange(
                      index,
                      "degree",
                      e.target.value
                    )
                  }
                />
                <input type="text" placeholder="Enter Field of Study" />
                <input type="date" placeholder="Start Date" />
                <input type="date" placeholder="End Date" />
                </div>
              </div>
            ))}

            <div className="btn_blue addinput" onClick={addEducationalDetails}>
              Add Education
            </div>
          </div>
          <div className="experience">
          {experienceDetails.map((experience, index) => (
              <div className="details" key={index}>
                <div
                  className="close_icon"
                  onClick={() => removeExperienceDetails(index)}
                >
                  <AiOutlineCloseCircle />
                </div>
                <div className="form_details">
                  
                <input
                  type="text" name="college"
                  placeholder="Organization name"
                  value={experience.orgainization}
                  onChange={(e) =>
                    handleExperienceDetailsChange(
                      index,
                      "organization",
                      e.target.value
                    )
                  }
                />
                <input
                  type=" text"
                  placeholder=" Position "
                  value={experience.position}
                  onChange={(e) =>
                    handleExperienceDetailsChange(
                      index,
                      "position",
                      e.target.value
                    )
                  }
                />
                <input type="text" placeholder="Department" />
                <input type="date" placeholder="Start Date" />
                <input type="date" placeholder="End Date" />
                </div>
              </div>
            ))}
            <div className="btn_blue" onClick={addExperienceDetails}>Add Experience</div>
          </div>
          <div className="skills">
            {
              skill.map((skill)=>skill)
            }
            
            
          <div className="btn_blue" onClick={addSkills}>Add Your Skills</div>

          </div>
          
          
          <div className="btn_blue contact_submit ">Submit</div>
        </div>
      )}
    </section>
  );
}

export default Careers;
