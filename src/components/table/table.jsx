import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Table = ({ data,title }) => {
  const headers = ["Name", "Email", "Age","Details"];
  return (
    <table>
     <h4>{title}: </h4>
      <tr>
        
        {headers.map((item) => (
          <th>{item}</th>
        ))}
      </tr>

      {data.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.age}</td>
          <td><Link to={`/student/${item.id}`}>Details</Link></td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
