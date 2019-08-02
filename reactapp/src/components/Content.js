import React from 'react';

const content = ({tweetdata}) =>{
  const styleImage = {
    width:"42px",
    height: "42px",
    borderRadius:"20px"
}

  
  return (
    <div  className="column middle" >
        <img src="/images/proimg.jpeg" width="896" height="270"/>
        <div>
          <button type="button" className="btn btn-info" style={{float: "right",backgroundColor:"#3399FF", width:'130px',borderRadius:"25px", padding:"12px"}}>Following</button>
        </div>
        <span style={{fontSize:"20px"}}><b>Narendra Modi</b> <br/></span>
        <span >@narendramodi</span><br/>
        <span>Prime Minister of India</span>
        {/* <div>
          <span> india narendramodi.in born September 17 <i class="fa fa-calendar" aria-hidden="true"></i>
          joined January 2009</span>
        </div> */}
      
              <div style={{padding:"10px",fontSize:"16px"}}>
                <i className="glyphicon glyphicon-map-marker">india</i>
                <i className="glyphicon glyphicon-screenshot">narendramodi.in</i>
                <i className="glyphicon glyphicon-dashboard">born September 17</i>
                <i class="fa fa-calendar">joined January 2009</i>
              </div>
            
        <div>
          <span>2,224 Following</span>&emsp;
          <span>48.9 Followers</span>
        </div>
        <hr />
        <div style={{fontSize:"20px"}}>
          <b>Tweets Tweets & replies Media Likes</b>
        </div>
      {
        tweetdata.map(item => (
          <div style={{border:"1px solid #ccc"}}>
            <div><img src={item.image} style={styleImage}/><b> {item.name} </b>   {item.tweetid}</div>
            <br/>
            <div style={{padding:"0 0 0 45px"}}>{item.content}</div> 
            <div>
              <div style={{padding:"10px"}}>
                <i className="glyphicon glyphicon-comment"></i> 7.6K
                <i className="glyphicon glyphicon-heart-empty"></i>14k
                <i className="glyphicon glyphicon-retweet"></i>8K
                <i class="glyphicon glyphicon-download-alt"></i>
              </div>
            </div>  
            <hr />         
          </div>
          ))
      }

     
    </div>
    )
}

export default content