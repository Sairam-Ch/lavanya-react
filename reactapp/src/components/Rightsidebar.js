    import React, {Component} from 'react';

const rightsidebar = ({likecontent,galleryimages,trendsdata}) =>{
  const flexRow = {
    display:"flex",
    flexDirection: "row"  
  };
  const gridCol = {
    display:"grid",
    gridTemplateColumns: "1fr 1fr 1fr"  
  };
  const styleImage = {
    width:"42px",
    height: "42px",
    borderRadius:"20px"
}

  return(
    <div class="rightcolumn">
      <div className="form-group has-search">
          <form>
          {/* <div className="inner-addon right-addon">
          <i className="glyphicon glyphicon-user"></i>      
          <input type="text" className="form-control" placeholder="Search Twitter" />
          </div> */}
          {/* <i class="fa fa-search" aria-hidden="true"></i> */}
            <input className="form-control"  placeholder="Search Twitter" />
          </form>


    {/* <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search"/>
      </div>
    </div> */}


      </div>
        
      <div  className="card" style={gridCol}>
          {
            galleryimages.map(item => (
              <div style={{margin:"5px"}}>
                  <span ><img src = {item.image} alt=""/></span>
              </div>
              ))
          }    
      </div>
      <div  className="likecard">
        <div style={{backgroundColor:"#f2f1f3",textAlign:"center"}}>You might like</div>
          {
            likecontent.map(item => (
              <div>
                    <div className="fakeimg">
                        <img src={item.image} style={styleImage}/>{item.name}<br/>
                        <span style={{padding:"40px"}}>{item.tweetid}</span>
                      <button type="button" className="btn btn-info" style={{backgroundColor:"white", fontSize:"large", color: "#39f",width:'130px',borderRadius:"25px", padding:"12px"}}>Follow</button>   
                    </div>      
              </div>
              ))
          }    
      </div>
      <div  className="card">
          {
            trendsdata.map(item => (
              <div >
                    <div class="fakeimg">
                      <span>Trending in {item.countryname}<br/>    #{item.name}<br/>{item.count}</span></div>      
              </div>
              ))
          }    
      </div>

    </div>
  );
}
export default rightsidebar;

