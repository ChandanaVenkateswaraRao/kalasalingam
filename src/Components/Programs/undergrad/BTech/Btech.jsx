import React, { useState } from 'react'
import './Btech.css'

import CSE from './eachcomponent/CSE.jsx'



const Btech = () => {
    const [cse, setCse] = useState(false)

    const csefun = () =>{
       setCse(!cse);
    }

  return (
    <div className='btech-main'>

        <div className='overview'>
            <h3>Overview</h3>
            <p>Bachelor of Technology (B.Tech) is a four-year professional undergraduate engineering degree that combines both theoretical and practical knowledge. This program is ideal for individuals who are passionate about innovation and aspire to create or improve technology-driven solutions. If you enjoy problem-solving and want to contribute to advancements in the engineering world, B.Tech is the perfect course for you.</p>
        </div>  
        <h1>Why B.Tech at KALASALINGAM</h1>
        <div className='academics-main'>
          
            <div className='academics'>
                <img src="https://www.kalasalingam.ac.in/wp-content/uploads/2021/04/acadamyresearchicn.png" alt="" />
                <h3>Academic Opportunities</h3>
            </div>
            <p>Programs offers various specialisations in emerging areas, designed and developed in collaboration with professionals from industry/research organisations. Students can specialise by choosing the program elective courses in the focused area of study and can complete the specialisation within the program requirement.</p>
        </div>

        <div className='scholarship'>
            <div className='sholarship-sub'>
            <img src='https://www.kalasalingam.ac.in/wp-content/uploads/2021/04/scholershipicn.png' alt="" />
            <h3>Academic Opportunities</h3>
            </div>
            <p>The scholarship is offered up to 100% of Tuition Fees for the Meritorious Students.</p>
        </div>

        <div>
            <h1>B.Tech Programmes</h1>
        </div>

        <div className='btechprogram' onClick={csefun} style={{
      
        marginTop: "40px",
        cursor: "pointer", // optional: gives visual feedback
        // optional: expands clickable area
        background: "#f5f5f5", // optional: for visibility
      }}>
            <div className='program-sub' >
                <h3>B.Tech-Computer Science and Engineering </h3>
                 <p>{cse ? "-" : "+"}</p>

               
            </div>  
           {cse && <CSE/>}
         


        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Electronics and Communication Engineering </h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Electrical and Electronics Engineering </h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Civil Engineering</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Electrical and Electronics Engineering </h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Chemical Engineering</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Information Technology</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Mechanical Engineering</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Food Technology</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Biomedical Engineering</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Biotechnology</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Automobile Engineering</h3>
                <p>+</p>
            </div>  
        </div>
        <div className='btechprogram'>
            <div className='program-sub'>
                <h3>B.Tech-Aeronautical Engineering</h3>
                <p>+</p>
            </div>  
        </div>
    </div>
  )
}

export default Btech
