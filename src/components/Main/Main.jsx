import React from 'react'
import './Main.css'
 import examplePic from '../../assets/images/ALB_view 1.jpg'
 import examplePic1 from '../../assets/images/ALB_view 2.jpg'
 import examplePic2 from '../../assets/images/ALB_view 3.jpg'
 import examplePic3 from '../../assets/images/ALB_plans_171219_b&w.jpg'



 export default class Main extends React.PureComponent{

  
      render() {


      return(
        <div>
<div class="Grid">
  <div class="Grid-item"><img  src={examplePic}/></div>
  <div class="Grid-item"><img  src={examplePic2}/></div>
  <div class="Grid-item"><img  src={examplePic3}/></div>
  <div class="Grid-item"><img  src={examplePic1}/></div>
  <div class="Grid-item"><img  src={examplePic}/></div>
  <div class="Grid-item"><img  src={examplePic2}/></div>

</div>
        </div>
    )
      }
}
