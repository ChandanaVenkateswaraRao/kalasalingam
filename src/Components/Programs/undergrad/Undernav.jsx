import React from 'react'
import "./Undernav.css"
import Btech from './BTech/Btech'

const Undernav = () => {
  return (
    <>
    <div className='unav'>
      <p>B.Tech</p>
      <p>B.Arch</p>
      <p>B.Sc.</p>
      <p>BSc. AHS</p>
      <p>BSc. Agri. & Horticulture</p>
      <p>LAW</p>
      <p>B.Com</p>
      <p>BBA</p>
      <p>BCA</p>
      <p>BA</p>
      <p>B.A.-L.L.B. (Hons)</p>
      <p>B.Com - L.L.B. (Hons)</p>
      <p>BPT</p>
      <p>B.Sc (AHS)</p>
    </div>
    <div>
      <Btech/>
    </div>
    </>

  )
}

export default Undernav
