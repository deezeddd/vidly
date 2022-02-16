import React, { Component } from 'react';


//input liked: boolean
//output:Onclick

//why we changed to sfc?
//because it doesnt have any state itself!! toh simplyfy krne k liye bdhiya h
const Like = (props) => {
            let classes ="fa fa-heart";
            if(!props.liked) classes +='-o'
            return (<i  onClick={props.onClick} className={classes} style={{cursor:'pointer'}} aria-hidden="true"></i>);
        }
    

 

 
export default Like;