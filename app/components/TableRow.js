import React from "react";

const TableRow = (props) => { 

 	return ( 
 	<tr key={props.rowKey}>
            <td>{props.data.bib_number}</td>
            <td>{props.data.name}</td>
            <td>{props.data.judge1}</td>
            <td>{props.data.judge2}</td>
            <td>{props.data.judge3}</td>
            <td>{props.data.total}</td>
            </tr>
        ) 
};

export default TableRow;