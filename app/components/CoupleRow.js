import React from "react";

export const CoupleRow = (props) => { 

 	return ( 
 			<div key={props.rowKey} id={props.data.lead} className='well'>Lead : {props.data.lead}   /  Follow: {props.data.follow} </div>           
        ) 
};

export default CoupleRow;