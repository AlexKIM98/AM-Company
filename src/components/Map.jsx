import React from 'react'
import './Map.css';

const Map = () => {
  return (
    <div className='map'>
       <iframe className='map-gg' width="320" height="190" id="gmap_canvas" src="https://maps.google.com/maps?q=Emilio%20Lamarca%20640&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Map