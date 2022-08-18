import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import $ from 'jquery';
import Popup from './Popup';


class App extends Component {
  
constructor(props){
  super(props)
 
  this.state = { 
                Lib: [],
                empty : '--',               
                author_detail : [],          
                check : 0   ,
                load : false  ,  
                work_count : []  
                
               };
  this.ajaxcall= this.ajaxcall.bind(this);  
  this.ajaxcall_1= this.ajaxcall_1.bind(this); 
  }

  ajaxcall() {     
    this.setState({load : true});
    let x = document.getElementById("cc").value;
    if (x === "") { alert("Plase give some name for search"); }
    else {
      let u = 'https://openlibrary.org/search/authors.json?q=';
      let URL = u + x;   

      $.ajax({
        url: URL,
        contentType: "application/json"
      })
        .done(
          function(data) {
            this.setState({ Lib : data.docs });
            $("#loading").hide();
          }.bind(this)
        )
        .fail(
          function(datas) {
            $("#loading").hide();
          }.bind(this)
        );
     }
     
    }

     ajaxcall_1(val) {   
        
        let A_N = val.target.innerText;  
        let u2 = 'https://openlibrary.org/search/authors.json?q=';
        let URL2 = u2 + A_N;     
        $.ajax({
          url: URL2,
          contentType: "application/json"
        })
          .done(
            function(data) {
              this.setState({ author_detail : data.docs[0],
                              check : 1});
              document.getElementById("ca").style.display="block";
            }.bind(this)
          )
          .fail(
            function(datas) {
              
            }.bind(this)
          );                
      }

  
  findvalid(Val){
    
    const detail = (Val === undefined) ? "--" : Val;
    return detail;
  } 
  sort(){
    var arr =  this.state.Lib.sort((a, b) =>a.work_count > b.work_count ? 1 : -1);
    this.setState({Lib : arr });
  }

  render() {      
    
    return (
      <>
      <div >
        <br/><center>
        <div className="col-sm-4">
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" id="cc" className="form-control" placeholder="Search.." />
            <button onClick={this.ajaxcall} className="btn btn-primary">Search</button>
          </div>
        </div></center>
        <br/><br/>
      </div>
      {this.state.load == true ? <div id="loading">
        <div className="centerdiv">
            <img src="https://acegif.com/wp-content/uploads/loading-25.gif" style={{width:'50px',height:'50px'}} />
        </div> 
    </div>: " "}
      <div >
      <div id="Table" className="container">
    { this.state.Lib.length > 0  ? <table className="table table-hover table-light">          
      <thead>
        <tr>
          <td>S.No <i className="fas fa-sort"></i></td>
          <td>Name</td>
          <td>Type</td>
          <td>DOB</td>
          <td onClick={this.sort(this.state.Lib)}>Work count</td>                
        </tr>
    </thead>
    <tbody>{this.state.Lib ? this.state.Lib.sort((a, b) =>
        a.work_count > b.work_count ? 1 : -1).map((author,index) => 
    <tr key={index}>
    <td>{index+1}</td>
    <td onClick={this.ajaxcall_1}>{author.name}</td>
    <td>{author.type}</td>
    <td>{this.findvalid(author.birth_date)}</td>
    <td>{author.work_count}</td>              
    </tr>
          ): "" }
  </tbody>
  </table> : " "}
  </div>
      </div>
      <div>
        <Popup pr={this.state}/>
      </div>
      </>
    );
  }
}

export default App;
























// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './App.css';
// import $ from 'jquery';
// import Popup from './Popup';

// className App extends Component {
// constructor(){
//   super()
//   this.state = { 
//                 Lib: [],
//                 empty : '--'
//                };
//   this.ajaxcall= this.ajaxcall.bind(this);
//   }

//   ajaxcall() { 
//     let x = document.getElementById("cc").value;
//     if (x === "") { alert("Plase give some name for search"); }
//     else {
//       let u = 'https://openlibrary.org/search/authors.json?q=';
//       let URL = u + x;   

//       $.ajax({
//         url: URL,
//         contentType: "application/json"
//       })
//         .done(
//           function(data) {
//             this.setState({ Lib : data.docs });
//           }.bind(this)
//         )
//         .fail(
//           function(datas) {
            
//           }.bind(this)
//         );


//      }

//   }
//   findvalid(Val){
//     const detail = (Val === undefined) ? this.state.empty : Val;
//     return detail;
//   }
//   getdata(val)
//   {
//       const Aut_Name = val.target.innerText;
//       Popup(Aut_Name);
//   }
//   render() {
//     const UserData = this.state.Lib.map((author,index) => 
//     <tr key={index}>
//       <td>{index+1}</td>
//       <td onClick={this.getdata}>{author.name}</td>
//       <td>{author.type}</td>
//       <td>{this.findvalid(author.birth_date)}</td>
//       <td>{author.work_count}</td>              
//     </tr>
//   )

//     return (
//       <div ><center>
//         <div classNameName="col-sm-4">
//           <div classNameName="search">
//             <i classNameName="fa fa-search"></i>
//             <input type="text" id="cc" classNameName="form-control" placeholder="Search.." />
//             <button onClick={this.ajaxcall} classNameName="btn btn-primary">Search</button>
//           </div>
//         </div></center>
//         <br />
//         <div id="Table" classNameName="container">
//           <table classNameName="table table-hover table-dark">          
//             <thead>
//               <tr>
//                 <td>S.No</td>
//                 <td>Name</td>
//                 <td>Type</td>
//                 <td>DOB</td>
//                 <td>Work count</td>                
//               </tr>
//           </thead>
//           <tbody>{UserData}</tbody>
//           </table>
//         </div>
        

//       </div >
//     );
//   }
// }

// export default App;


//---------------------------------------------------------------------------------------------------------------------------------------

// className App extends Component {
//   this.state = { Array : [] }

//---------------------------------------------------------------------------------------------------------------------------------------

   // axios.get(URL)
      //   .then(res => {
      //     const persons = res.data;
      //     console.log(persons)
      //     for (const [key, value] of Object.entries(persons)) {
      //             if (key == "numFound" && value == 0) { document.getElementById("msg").innerHTML = "No Author's are available in this name "; }
      //             else {
      //               if (key == "docs") {
      //                 console.log(value);
      //                 this.setState({ person : value });
      //                 console.log("SET_STATE Passed..");
      
      //               }
      //             }
      //           }
      //   })

//---------------------------------------------------------------------------------------------------------------------------------------
    //   $.ajax({

    //     url: URL,
    //     type: "GET",
    //     success: function (data) {
    //       console.log("data1",data);
    //         this.setState({ Lib : data });
    //         console.log("data",data);
    //         console.log("Passd",this.state.Lib);

    //       // for (const [key, value] of Object.entries(data)) {
    //       //   if (key == "numFound" && value == 0) { document.getElementById("msg").innerHTML = "No Author's are available in this name "; }
    //       //   else {
    //       //     if (key == "docs") {
    //       //       console.log(value);
    //       //       this.setState({ Array : value });
    //       //       console.log("hiiiiiii");

    //       //     }
    //       //   }
    //       // }
    //     },

    //     error: function (error) {
    //       console.log(`Error ${error}`);
    //       $("#loading").hide();
    //     }
    //   });
  //---------------------------------------------------------------------------------------------------------------------------------------