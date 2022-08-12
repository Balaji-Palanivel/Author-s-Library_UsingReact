import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import App from './App';


export default function Popup(a) {
   
	console.log("a2", a);
    //     let u = 'https://openlibrary.org/search/authors.json?q=';
    //     let URL = u + a;

    //   $.ajax({
    //     url: URL,
    //     contentType: "application/json"
    //   })
    //     .done(
    //       function(data) {
    //         this.setState({ Lib : data.docs });
    //       }.bind(this)
    //     )
    //     .fail(
    //       function(datas) {
            
    //       }.bind(this)
    //     );

    //  }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <div><div id="loading">
        <div className="centerdiv">
            <img src="https://acegif.com/wp-content/uploads/loading-25.gif" style={{width:'50px',height:'50px'}} />
        </div>
    </div></div>);

    }


