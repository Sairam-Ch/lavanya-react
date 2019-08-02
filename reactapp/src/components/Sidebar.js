import React from 'react';

const sidebar = ({data}) =>{
  
  return (
    <div  className="column side">
      {
        data.map(item => (
          <div >
              <a href="#">
                <span style={{marginRight:"20px"}}><img style={{width:"30px"}} src = {item.image} alt=""/></span>
                <span style={{fontSize:"20px", color:"black"}}>{item.name}</span>
              </a><br/><br/>
          </div>
          ))
      }

      <div>
        <button type="button" className="btn btn-info" style={{backgroundColor:"#3399FF", width:'180px',borderRadius:"25px", padding:"12px"}}>Tweet</button>
      </div>
    </div>
    )
}

export default sidebar;

// const sidebar = (props) => {

//   return(
//         <div>
//         <a href="#">
//           <span style={{marginRight:"20px"}}><img style={{width:"20px"}} src = {props.image} alt=""/></span>
//           <span>{props.name}</span>
//                   </a><br/>
//         <br/>
//       </div>
//     );
// }
