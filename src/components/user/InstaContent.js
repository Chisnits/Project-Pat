import React, { Component } from 'react';
import './User.css';
let InstaContent;
export default InstaContent = (props) => {
    console.log(props.content)
    let images = props.content.map((item, i) => {
        return (
        <div key={i} className="instagram__image-container">
                <img src={item.images.standard_resolution.url} alt="" />
                <h5>{item.caption.text}</h5>
        </div>
        )
    });
    return (
        <div className="instagram__content-container">
            <h1>{props.content.length > 0 ? props.content[0].user.full_name : ""}</h1>
            <h3>@{props.content.length > 0 ? props.content[0].user.username : ""}</h3>
            <img src={props.content.length > 0 ? props.content[0].user.profile_picture : ""} alt="Profile Picture" className="instagram__profile-picture"/>
            <div className="instagram__image-wrapper">
                {images}
            </div>
        </div>
    )};