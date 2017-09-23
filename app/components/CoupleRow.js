import React from "react";

const CoupleRow = (props) => { 

 	return ( 
 			<div key={props.rowKey} data-leadId={props.data.lead} data-followId={props.data.follow} className='well'>Lead : {props.data.lead}   /  Follow: {props.data.follow} </div>           
        ) 
};

export default CoupleRow;