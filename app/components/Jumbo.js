import React from "react";

const Jumbo = (props) => { 
 	return ( 
 		<div className="jumbotron">
		        <h1 className="text-center">{props.round} Results</h1>
		        <h2 className="text-center">{props.division} / {props.role}</h2>
     	</div> 	
        ) 
};

export default Jumbo;