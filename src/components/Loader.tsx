import React, { HTMLProps } from 'react'

function Loader({style = ""}:{style:HTMLProps<HTMLElement>["className"]}) {
  return <div className={`${style} loader`}></div>
}

export default Loader