import React from 'react'
import './CSE.css'


const CSE = () => {
  return (
    <div>
      <div className='btech-program-details'>
                <div className='btech-program-details-title'>
                <h2> B.Tech. – Computer Science and Engineering </h2>
               
                </div>
                <div className='vision'>
                    <div className='vision-main'><p>VISION</p>
                    <br />
                    <p2>To be a Department of Excellence for Quality Education</p2>
                    <br />
                    <p2> and Research in various fields of Computer Science and Engineering. </p2>
                    </div>
                    <div className='vision-img'>
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    
                </div>
                 <hr
                    style={{
                    border: 'none',
                    height: '3px',
                    background: 'linear-gradient(to right, orange, blue)',
                    margin: '40px 0'
                    }}
                />
                <div className='vision'>

                    <div className='vision-img'>
                        <img style={{ background: "white" }} src="https://www.kalasalingam.ac.in/wp-content/uploads/2021/04/missionicn.png" alt="" />
                    </div>
                    <div className='vision-main'>
                        <p style={{paddingLeft:"350px"}}>MISSION</p>
                    <br />
                    <p2>Strive to build and maintain an academic atmosphere conducive to the highest levels of </p2>
                    <br />
                    <p2>research and instruction by promoting high-quality teaching and scholarly activity.</p2>
                    <br />
                    <p2>To equip students with knowledge and skills in both the fundamental and applied </p2>
                    <br />
                    <p2>aspects of computer science, which are necessary to solve real-world engineering </p2>
                    <br />
                    <p2>challenges to meet industry and societal needs.</p2>
                    <br />
                    <p2>To prepare students to attain creative endeavors and entrepreneurship skills with proper </p2>
                    <br />
                    <p2>ethical values and a desire to pursue life-long learning.</p2>
                    
                    </div>
                    
                    
                </div>

                  <hr
                    style={{
                    border: 'none',
                    height: '3px',
                    background: 'linear-gradient(to right, orange, blue)',
                    margin: '40px 0'
                    }}
                />

                <div className='overview-2'>
                    <p >Overview</p>
                    <div className='overview-2-text'>
                        <div>
                        <p2>Department of Computer Science and Engineering was established in the year 1984. In 1995 the Department became the first </p2>
                        <br />
                        <p2>self-finance engineering college department in south India to offer M.E (CSE). Based on the infrastructure and faculty strength </p2>
                        <br />
                        <p2>the department was recognized as research centre by Anna University in 2003 to offer M.S (by Research) and PhD programs in </p2>
                        <br />
                        <p2>the area of computer Science and Engineering. Recently B.Tech. Computer Science and Engineering programme is accredited</p2>
                        <br />
                        <p2>by NBA under Tier 1 category(Outcome Based Education) as per Washington Accord.</p2>   </div>
                        <br />
                     
                        <div>
                        <p2>The department has well equipped laboratory facilities including Web programming, Distributed Computing, Programming </p2>
                        <br />
                        <p2>Languages, Software development, Open source Technologies laboratories to provide the practical training to the students. </p2>
                        <br />
                        <p2>Also, the students are given the opportunity to work in the Network Technology and Network Security Laboratories attached </p2>
                        <br />
                        <p2>with the TIFAC-CORE in Network Engineering. Highly qualified and experienced faculty with specialization in Data Mining, Image </p2>
                        <br />
                        <p2>Processing, Software Engineering, Natural language processing, Web Technology, Embedded systems, Evolutionary computing, </p2>
                        <br />
                        <p2>Network Technology and Distributed Computing are working in the department.</p2></div>
                        <br />
                        <div>
                        <p2>The Students are given exposure to latest trends in technology including Embedded system design, Big Data Analytics, Image </p2>
                        <br />
                        <p2>Processing, Extreme Programming, Software Testing, Sensor Networks, Cloud Computing, Soft Computing etc. through </p2>
                        <br />
                        <p2>workshops, guest lectures and seminars. The department offers many value added educational programs and Certification </p2>
                        <br />
                        <p2>programs to the students including CCNA, Security+, Sun Java, RedHat Linux Certification, etc. The department in association </p2>
                        <br />
                        <p2>with the Computer Society of India and IEEE Student branch regularly organizes workshops, seminars and technical talks for </p2>
                        <br />
                        <p2>the benefit of students and the staff. The department has close interaction with leading industries and educational Institutions. </p2>
                        <br />
                        <p2>Many projects were carried out in association with leading software industries and research laboratories including Naturesoft, </p2>
                        <br />
                        <p2>Pentasoft, Hexaware, CTS, HCL, Sathyam, IGCAR, CECRI, CLRI, Ramco Systems, Wipro, TCS, Flextronics, etc.</p2>
                        </div>
                    </div>
                    <hr
                    style={{
                    border: 'none',
                    height: '3px',
                    background: 'linear-gradient(to right, orange, blue)',
                    margin: '40px 0'
                    }}/>

                   
                </div>
            </div>
    </div>
  )
}

export default CSE
