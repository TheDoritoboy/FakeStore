
import React from 'react'
import { FaBeer } from 'react-icons/fa';

function header() {
  return (
    <div>
      <h3> Lets go for a <FaBeer />? </h3>
    </div>
    
    
  )
}
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
  header() {
    return (
      <div>header</div>
      
    )
  }
}
export default header; 