import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import $ from 'jquery';



export default class Popup extends Component{
  constructor(props){
    super(props);
    
  }
  closeProfile() {
	
    document.getElementById("ca").style.display="none";
  }

  render(){
  return (
    
    <center> { this.props.pr.check == 1 ? <div id="ca" className="clearfix">
    <div className="row">
        <div className="col-md-4 animated fadeIn" >          
          <div id="ca" className="card">
          <button id="myBtn" onClick={this.closeProfile}>x</button>
            <div className="card-body">
              <div className="avatar">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/user.png"                
                  className="card-img-top"
                  alt=""
                />
              </div>
              <center><h5 className="card-title">
                {this.props.pr.author_detail.name}
              </h5></center>
              <center><p className="card-text">
                {this.props.pr.author_detail.type}
                <br /></p></center>
                <center><span className="phone">{this.props.pr.author_detail.birth_date}</span></center>
              
            </div>
          </div>
        </div>
    </div>
    </div> : " "}
    </center>
  );
  }
}




















// class Popup extends Component {
//   constructor(props){
//     super(props)
//     this.state = { 
//                   det: []              
//                  };
//     this.ajaxcall= this.ajaxcall.bind(this);
//     console.log(props.userData);
//     }
 
//     ajaxcall() { 
     
//         let u = 'https://openlibrary.org/search/authors.json?q=';
//         let URL = u + x;   
  
//         $.ajax({
//           url: URL,
//           contentType: "application/json"
//         })
//           .done(
//             function(data) {
//               this.setState({ Lib : data.docs });
//             }.bind(this)
//           )
//           .fail(
//             function(datas) {
              
//             }.bind(this)
//           );      
  
//     }

//     render() {
      
//       return (
//         <div >
//           <div id="Table" className="container">
//             <table className="table table-hover table-dark">          
//               <thead>
//                 <tr>
//                   <td>S.No</td>
//                   <td>Name</td>
//                   <td>Type</td>
//                   <td>DOB</td>
//                   <td>Work count</td>                
//                 </tr>
//             </thead>          
//             </table>
//           </div>
//              </div >
//       );
//     }
//   }
  
//   export default Popup;
  
  
  
  
  















