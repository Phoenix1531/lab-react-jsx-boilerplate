import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import React from "react";

export default class AppClass extends React.Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  render(){
    let data=this.imageData();
    console.log(data)
    // code here
    return(
        <>
        <h1 className='heading'>kalvium gallary</h1>
      <div className='parent'>
        {
          data.map((e)=>{
            return(
              <img className='image' src={e.img}/>
            )
          })
        }
  
        
  
      </div>
  
      </> 
    )
  }
}
