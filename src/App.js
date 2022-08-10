import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import $ from 'jquery';

class App extends Component {
constructor(props){
  super(props)
  this.state = { Value: ''};
  this.Ajaxcall= this.Ajaxcall.bind(this);
}

// class App extends Component {
//     state = { Value: [] }
   
  Ajaxcall() {
    let x = document.getElementById("cc").value;
    if (x === "") { alert("Plase give some name for search"); }
    else {
      let u = 'https://openlibrary.org/search/authors.json?q=';
      let URL = u + x;
      $.ajax({

        url: URL,
        type: "GET",
        success: function (data) {
               
          for (const [key, value] of Object.entries(data)) {
            if (key == "numFound" && value == 0) { document.getElementById("msg").innerHTML = "No Author's are available in this name "; }

            else {
              if (key == "docs") {
                console.log(value);
                this.setState( { value });
                console.log("hiiiiiii");

              }
            }
          }
        },

        error: function (error) {
          console.log(`Error ${error}`);
          $("#loading").hide();
        }
      });
    }

  }

  render() {

    return (
      <div ><center>
        <div className="col-sm-4">
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" id="cc" className="form-control" placeholder="Search.." />
            <button onClick={this.Ajaxcall} className="btn btn-primary">Search</button>
          </div>
        </div></center>
        <br />

        <div id="Table" className="container">
          <table className="table table-hover table-dark">
            <tbody>
              <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Type</td>
                <td>{this.state.Value}</td>
              </tr>



            </tbody>
          </table>
        </div>

      </div >
    );
  }
}

export default App;
