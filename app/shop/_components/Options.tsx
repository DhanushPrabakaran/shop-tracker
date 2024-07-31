import React from 'react'

const Options = (props:{j:String}) => {
  return (
    <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
        {props.j}
      </button>)
}

export default Options
