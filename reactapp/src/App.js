import React, {Component} from 'react';
import './App.css';
import logo from './tweeticon.png'
// import Person from './Person/Person';
// import person from './Person/Person';
import Sidebar from './components/Sidebar';
import Rightsidebar from './components/Rightsidebar';
import Content from './components/Content';
// import imangename from './images/home.svg';
// import imgname from './public/home.svg';

// import logo from './logo.svg';

// import testimage from '/home/kalgudi/reactapp/src/images/home.svg';
// function Input(){
//   return (
//     <div>
//       <lable>First Name</lable>
//     <input type="text" placeholder="name"/>
//     <br/>
//     <input type="text" placeholder="address"/>
//     <br/>
//     <br/>
//     </div>
//     ); 
// }
// function Button(){
//   return(
//     <div>
//       <button type="submit">Submit</button>
//     </div>
//   )
 
// }
// function Header(){
//   return(
//   <div className="first">
//     <h1>Sample Website</h1>
//     <p>practice one</p>
//   </div>
//   );
  
// }
// function Footer(){
//   return(
//     <div className="head">
//     <h1>Sample Website</h1>
//     <p>practice one</p>
//   </div>
//   );
// }
// function Navibar()
// {
//   return(
//   <div className="navbar" >
//     <a href="#">Twitter</a>
//     <a href="#" className="right">Log out</a>
// </div>
//     <div className="header" id="myHeader">
//       <i class="fa fa-twitter" style={{fontSize:"36px", color:"#3399ff"}}></i>
//       <h2 style={{textAlign:"center", color:"#3399ff", marginTop:"-38px"}}>Twitter</h2>
//     </div>
//   );
// }
// const app = () => {

// }

// app () {                                                                        
//   this.name=
// }
class App extends Component {

  // constructor (props) {
  //   super(props);
  //   this.state = {}

  // }
   
  state = {
    navitabs: [
      {id: "1",image:"/images/home.svg",name:"Home"},
      {id: "2", image:"/images/explore.jpg",name:"Explore"},
      {id: "3", image:"/images/notification.png",name:"Notifications"},
      {id: "4", image:"/images/bookmark.svg",name:"Bookmarks"},
      {id: "5", image:"/images/list.svg",name:"Lists"},
        {id: "6", image:"/images/profile.svg",name:"Porifle"},
        ],       
    likecontent:[
      {id: "1",image:"/images/onecha.png",name:"CGTN",tweetid:"@ONEchampionship"},
      {id: "1",image:"/images/nitin.jpg",name:"Nitin Gadkari",tweetid:"@nitin_gadkari"},
      {id: "1",image:"/images/Smritizirani.jpeg",name:"Smriti Z irani",tweetid:"@smritiirani"},
    ],
    tweets:[
      {id: "1",content:"Development and the environment are not mutually exclusive.India will progress economically and take the lead in protecting the environment. #International TigerDay",
      name:"Narendra Modi",tweetid:"@narendramodi",image:"/images/narendramodiimage.jpg"},
      {id: "1",content:"Releasing the results of All India Tiger Estimation. #International TigerDay",
      name:"Narendra Modi",tweetid:"@narendramodi",image:"/images/narendramodiimage.jpg"},
      {id: "1",content:"Better bonding through reading!Impressed by the diverse range of books being talked about by people on the NaMo App. On popular request, this will be a lasting feature on the App. I need your help to find a name for this section. ",
      name:"Narendra Modi",tweetid:"@narendramodi",image:"/images/narendramodiimage.jpg"},   
    ],
    galleryimages:[
      {id: "1",image:"https://source.unsplash.com/random/120x100",name:"Home"},
      {id: "2", image:"https://source.unsplash.com/random/120x100",name:"Explore"},
      {id: "3", image:"https://source.unsplash.com/random/120x100",name:"Notifications"},
      {id: "4", image:"https://source.unsplash.com/random/120x100",name:"Bookmarks"},
      {id: "5", image:"https://source.unsplash.com/random/120x100",name:"Lists"},
        {id: "6", image:"https://source.unsplash.com/random/120x100",name:"Porifle"},      
    ],
    trendsdata:[
      {id: "1",countryname:"india",name:"Shankar",count:"3,564"},
      {id: "2", countryname:"india",name:"ThalaAJITHatRifleChampionship",count:"16.5k"},
      {id: "3", countryname:"india",name:"Cafecoffeeday",count:"12.3k"},
      {id: "4", countryname:"india",name:"prabhas",count:"12,234"},
      {id: "5", countryname:"india.svg",name:"VGSiddhartha",count:"35,353"},
    ],

  }
  
  render(){ 

    //  console.log(this.state.likecontent);

    return (
      <div>
        {/* <Input />
        <Button /> */}
        {/* <Header />*/}
        {/* <Navibar /> */}
        <Sidebar data={this.state.navitabs}/>
        <Content tweetdata={this.state.tweets}/>
        <Rightsidebar likecontent = {this.state.likecontent} 
                      galleryimages={this.state.galleryimages}
                      trendsdata={this.state.trendsdata} />        
        {/* <button style={style} onClick ={()=> this.tagglePerson("test")}>Taggle Name</button> */}
         {/* {persons} 
         {navitabs}
               */}
  
      </div>
    );
  }
  
}
export default App;




