import React from 'react'
import './Campus.css'
import img1 from '../../assets/tc.jpeg'
import im2 from '../../assets/im2.jpeg'
import im3 from '../../assets/im3.jpeg'
import im4 from '../../assets/im4.jpeg'
import im5 from '../../assets/im5.jpg'
import im6 from '../../assets/im6.jpg'
import im7 from '../../assets/im7.jpg'
import im8 from '../../assets/im8.jpg'
import white_arrow from '../../assets/white-arrow.png'

const images = [img1, im2, im3, im4, im5, im6, im7, im8]

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        {
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index}`}
            />
          ))
        }
      </div>
      <button className='btn dark-btn'>
        See more here <img src={white_arrow} alt="arrow" />
      </button>
    </div>
  )
}

export default Campus
