// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import Navigate

import Navbar from './Components/Navbar/Navabar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonial/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Video from './Components/Videoplayer/Video';
import Undernav from './Components/Programs/undergrad/Undernav';

const App = () => {
  const [playState, setPlayState] = useState(false);
  const location = useLocation();

  // ... your useEffect hooks ...
    useEffect(() => {

    const handleContextMenu = (e) => e.preventDefault();

    document.addEventListener('contextmenu', handleContextMenu);

    return () => document.removeEventListener('contextmenu', handleContextMenu);

  }, []);


  // ✅ Scroll to anchor with offset on route change

      useEffect(() => {

        const hash = window.location.hash;

        if (hash) {

          const scrollToAnchor = () => {

            const element = document.querySelector(hash);

            if (element) {

              const yOffset = -80;

              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

              window.scrollTo({ top: y, behavior: 'smooth' });

            }

          };


          let attempts = 0;

          const interval = setInterval(() => {

            if (document.querySelector(hash) || attempts > 10) {

              scrollToAnchor();

              clearInterval(interval);

            }

            attempts++;

          }, 100);

        }

      }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        {/* ADD THIS LINE to redirect from "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/home"
          element={
            <div>
              {/* ... rest of your home page content ... */}
              <div id="hero"><Hero /></div>
              <div className="container">
                <Title subtitle="Our Program" title="What we Offer" id="program" />
                <div id="program"><Programs /></div>
                <div id="about"><About setPlayState={setPlayState} /></div>
                <Title subtitle="Gallery" title="Campus Photos" />
                <div id="campus"><Campus /></div>
                <Title subtitle="TESTIMONIALS" title="What a Student Says" />
                <div id="testimonials"><Testimonials /></div>
                <Title subtitle="Contact Us" title="Get In Touch" />
                <div id="contact"><Contact /></div>
                <Footer />
                <Video playState={playState} setPlayState={setPlayState} />
              </div>
            </div>
          }
        />
        <Route path="/programs/undergraduation" element={<Undernav />} />
      </Routes>
    </>
  );
};

export default App;