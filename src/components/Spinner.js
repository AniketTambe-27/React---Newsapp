import React from 'react'
import loading from './loading.gif'

//class based
//export class Spinner extends Component
//function based
const Spinner = () =>{
  //class based
 // render() {
    return (
      <div className="text-center">
        <img src = {loading} alt = "loading"/>
      </div>
    )
//  }
}

export default Spinner
