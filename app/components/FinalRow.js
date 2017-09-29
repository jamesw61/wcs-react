import React from "react";

const FinalRow = (props) => { 
	console.log(props);
 	return ( 

 	<tr key={props.rowKey}><td><h2>{props.rowKey + 1 }.  {props.data[0]} / {props.data[1]}</h2></td></tr>
        ) 
};

export default FinalRow;