import React from "react";

const CoupleRow = (props) => { 

 	return ( 
 			<div key={props.rowKey} data-leadId={props.data.lead} data-followId={props.data.follow} className='well'><h2>Lead : {props.data.lead}   /  Follow: {props.data.follow} </h2></div>           
        ) 
};

export default CoupleRow;