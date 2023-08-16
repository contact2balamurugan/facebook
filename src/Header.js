import React from 'react';
const Header=(props)=>{
    return (
        <div>hi {props.title}</div>
    )
}
Header.defaultProps = {
    title: 'Hello'
}
export default Header


/*Props
The elements of 1 component is trasferred to another component is called as props and props drilling 
function component

prev code
import React from 'react';
const Header=()=>{
    return (
        <div>Header</div>
    )
}
export default Header
*/