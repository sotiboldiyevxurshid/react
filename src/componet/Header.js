import React from 'react'


export default function Header(props) {
    console.log(props);
  return (
    <div>

        <h1>My names {props.name}</h1>
        <h1>My phone {props.phone}</h1>

       

    </div>
    
  )
}
