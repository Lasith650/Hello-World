import React from 'react';

const Greet =({name, heroName}) => {
    return (
    <div>
    <h1>Hello {name} your hero is {heroName}</h1>
    {/* {props.children} */}
    </div>
    )
}
export default Greet;