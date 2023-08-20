import React from "react";
import './department.css';

const Department = ({depart}) =>{
    return(
    <div className="dept">
        <img src={depart.image} alt={`${depart.name} Department`} />
        <div className="content">
        <h2>{depart.name}</h2>
        <button>Readmore</button>
        </div>
    </div>
    );
}
export default Department;