import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import $ from 'jquery';
import Popup from './Popup';

class App extends Component {
constructor(){
  super()
  this.state = { 
                Lib: [],
                empty : '--'
               };
  this.ajaxcall= this.ajaxcall.bind(this);
  }

  ajaxcall() {
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
          }.bind(this)
        )
        .fail(
          function(datas) {
            
          }.bind(this)
        );


     }

  }
  findvalid(Val){
    const detail = (Val === undefined) ? this.state.empty : Val;
    return detail;
  }

  render() {
    const UserData = this.state.Lib.map((author,index) => 
    <tr key={index}>
      <td>{index+1}</td>
      <td onClick={Popup(this.innerText)}>{author.name}</td>
      <td id="btnSelect">{author.type}</td>
      <td>{this.findvalid(author.birth_date)}</td>
      <td>{author.work_count}</td>              
    </tr>
  )

    return (
      <div ><center>
        <div className="col-sm-4">
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" id="cc" className="form-control" placeholder="Search.." />
            <button onClick={this.ajaxcall} className="btn btn-primary">Search</button>
          </div>
        </div></center>
        <br />
        <div id="Table" className="container">
          <table className="table table-hover table-dark">          
            <thead>
              <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Type</td>
                <td>DOB</td>
                <td>Work count</td>                
              </tr>
          </thead>
          <tbody>{UserData}</tbody>
          </table>
        </div>
        

      </div >
    );
  }
}

export default App;












//---------------------------------------------------------------------------------------------------------------------------------------

// class App extends Component {
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