import React, { useState } from 'react'

function Movies() {
const [StartWatching , setStartWatching] = useState(false)




  return (
    <>
    
    <button onClick={() =>setStartWatching(!StartWatching)}>
      {StartWatching? "logout" : "Start Watching"}
    </button>
    
    
    
    
    </>
  )
}

export default Movies