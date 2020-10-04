import React from 'react';
import { Button } from 'react-bootstrap';

const TableRow = (props) => {
    const id=props.user._id;
    return (
        <>
             <tr>
                 <td>{props.user.names}</td>
                 <td>{props.user.email}</td> 
                 <td>{props.user.date}</td>
                 <td>{props.user.category} </td> 
                 <td><Button onClick={()=>props.deleteEvent(id)} >Delete</Button></td></tr> 
        </>
    );
};

export default TableRow;