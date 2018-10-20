import React, { Component } from 'react';
let InstaContent;
export default InstaContent = (props) => {
    console.log(props.content) 
    let images = props.content.map(item => {
        return <img key={item.key} src={item.images.standard_resolution.url} alt="" />
    });
    return (
      <div>
          {images}
      </div>
    )};