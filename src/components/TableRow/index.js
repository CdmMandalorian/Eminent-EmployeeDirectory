/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function TableRow(props){
    return (
      <tr className="p-2 flex-fill bd-highlight">
        <td className='id'>{props.id}</td>
        <td className='pic'><img src={props.picture}></img></td>
        <td className='lN'>{props.lastName}</td>
        <td className='fN'>{props.firstName}</td>
        <td className='contact'>{props.contactNumber}</td>
        <td className='email'>{props.email}</td>
        <td className='dob'>{props.dob}</td>
      </tr>
    )
}

export default TableRow;