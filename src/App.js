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
                work_count : []  ,
                order : "Asc",
                searchInput : "" ,
                FilteredTable : []              
               };

  this.ajaxcall= this.ajaxcall.bind(this);  
  this.ajaxcall_1= this.ajaxcall_1.bind(this); 
  this.searchByName= this.searchByName.bind(this); 
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
      })                                                                                      //Ajax Call for main table
        .done(
          function(data) {
            this.setState({ Lib : data.docs , FilteredTable : []  });
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
            function(data) {                                                                //Ajax call for profile card
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
    
    const detail = (Val === undefined) ? "--" : Val;                                        //findvalid() for data valid or not
    return detail;
  } 
 
  sorting_table(event, sortKey){
    const data = this.state.Lib;
if(sortKey == "name"){
    if (this.state.order == "Asc"){    
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({Lib : data, order : "Dec"})
      }
    if (this.state.order == "Dec"){     
      data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      this.setState({Lib : data , order : "Asc"});                                          //Sortong_table for sorting
                    
     }
     
   }  
  else if(sortKey == "work_count"){

    if (this.state.order == "Asc"){    
    data.sort((a,b) => a[sortKey] - b[sortKey])
    this.setState({Lib : data, order : "Dec"})
      }
    if (this.state.order == "Dec"){      
      data.sort((a,b) => b[sortKey] - a[sortKey])
      this.setState({Lib : data , order : "Asc"});
     }
     
   }
  }
 
searchByName (val) {
  this.setState(() => ({searchInput : val.target.value}));
  let a = this.state.Lib.filter(value => value.name.toLowerCase().includes(val.target.value.toLowerCase()));   
  console.log(a,'aaa')
  this.setState(() => ({FilteredTable : a}))
  }

  render() {      
    return (
    <>
      <div >
        <br/><center>
        <div className="col-sm-4">
          <div className="search">
            <input type="text" id="cc" className="form-control" placeholder="Search.." />
            <button onClick={this.ajaxcall} className="btn btn-primary">Search</button>
            
          </div>
         
        </div>
        {this.state.Lib.length > 0 ? <div style={{top:"50px",left :"200px"}} className="input-group mb-3"><br/>    
   <input type="text" id="xy" placeholder="Searh By Names"  onChange={(e) => this.searchByName(e) }/>
  </div> 
  : ""}
        </center>
        
       
        <br/><br/>
      </div>
      {this.state.load == true ? <div id="loading">
        <div className="centerdiv">
            <img src="https://acegif.com/wp-content/uploads/loading-25.gif" style={{width:'50px',height:'50px'}} />
        </div> 
    </div>: " "}
    
      <div id="Table" className="container">
    {  
   this.state.Lib.length > 0   ? <table className="table table-hover table-light">          
      <thead>
        <tr>
          <td>S.No </td>
          <td >Name <i onClick={e => this.sorting_table(e, "name")} className="fa fa-fw fa-sort"></i></td>
          <td>Type </td>
          <td>DOB </td>
          <td >Work count <i onClick={e => this.sorting_table(e, "work_count")} className="fa fa-fw fa-sort"></i></td>                
        </tr>
    </thead>
    <tbody>{this.state.searchInput.length > 0 ? this.state.FilteredTable.map((author,index) => 
    <tr key={index}>
    <td>{index+1}</td>
    <td onClick={this.ajaxcall_1}>{author.name}</td>
    <td>{author.type}</td>
    <td>{this.findvalid(author.birth_date)}</td>
    <td >{author.work_count}</td>              
    </tr>
          ): this.state.Lib ? this.state.Lib.map((author,index) => 
          <tr key={index}>
          <td>{index+1}</td>
          <td onClick={this.ajaxcall_1}>{author.name}</td>
          <td>{author.type}</td>
          <td>{this.findvalid(author.birth_date)}</td>
          <td >{author.work_count}</td>              
          </tr>
                ) : " "}
  </tbody>
  </table> : " "}

  </div>
      
      <div>
        <Popup pr={this.state}/>
      </div>
    </>  
    );
  }
}

export default App;