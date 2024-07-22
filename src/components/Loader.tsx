import React from 'react'

function Loader({style = ""}:{style:string}) {
  return <div className={`${style} loader`}></div>
}

export default Loader