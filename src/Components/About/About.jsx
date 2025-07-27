import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus cumque distinctio asperiores in incidunt eligendi
           numquam quod eaque? Omnis exercitationem tempora dignissimos 
           nostrum repellendus tempore illum totam rerum alias quasi?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quis et doloribus porro quasi fugit id provident ullam 
            nobis eveniet totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eligendi soluta aspernatur voluptatibus consequatur! Sequi 
           eos praesentium maxime consequuntur aut nesciunt laboriosam dicta,
           corrupti doloremque perferendis voluptatibus asperiores quam veniam sapiente?</p> */}
      <section class="about-kare">
      <p>
        Kalasalingam Academy of Research and Education (KARE) (Deemed to be University), formerly Arulmigu Kalasalingam College of Engineering, was established in 1984 by Kalvivallal Thiru T. Kalasalingam under the trust Kalasalingam and Anandam Ammal Charities. The founder chairman was a freedom fighter and philanthropist.
      </p>
      <p>
        Located at the pristine foothills of the scenic Western Ghats of southern Tamil Nadu, the institution attained Deemed to be University status in 2006. KARE has been serving society for over 37 years, catering to students from all walks of life.
      </p>
      <p>
        KARE offers undergraduate, postgraduate, and doctoral programmes across Engineering, Science, Technology, and Humanities. It was the first institution in India to launch a special B.Tech programme for differently-abled (speech and hearing impaired) students.
      </p>
      <p>
        The institution is re-accredited by NAAC with an ‘A++’ grade and has six UG programmes accredited by NBA under Tier-1. KARE continues to actively secure funded research projects and has received DST funding to establish the National Center for Advanced Research in Discrete Mathematics.
      </p>
      <p>
        With a state-of-the-art IRC and high-end instruments for advanced research in material and life sciences, KARE supports research excellence. It also offers multi-storied hostels with modern amenities, a world-class swimming pool, and an indoor sports auditorium.
      </p>
      <p>
        KARE emphasizes holistic student development by prioritizing intra-mural and extra-mural activities.
      </p>
    </section>

      </div>

    </div>
  )
}

export default About
