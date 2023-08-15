import React from 'react'
import '../CSS/Carsection.css'
import Image from 'next/image';
const Carsection = () => {
  return (
<>






<div className='container'>
  <div className='image'>

  <Image
      src="/asset/first.png"  // The path is relative to the public directory
        alt="Next Image"
        width={300}
        height={200}
      /> 

  
  </div>
</div>



</>
  )
}

export default Carsection