import React from "react";
import Select from 'react-select';
import './style.css';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  // console.log("props in FormBtn= ",props);
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success mt-3">
      {props.children}
    </button>
  );
}

// export function SelectItemStatus(props) {
//   return (
//     <div className="form-group">
//       <select className="custom-select"
//         name={props.name}
//         value={props.value}
//         onChange={props.handleChange}>
//         <option defaultValue>Choose...</option>
//         <option value="Available">Available</option>
//         <option value="Out for Rend">Out for Rent</option>
//         <option value="In Maintenance">In Maintenance</option>
//       </select>
//     </div>
//   )
// }

// export function SelectCondition(props) {
//   return (
//     <div className="form-group">
//       <select className="custom-select"
//         name={props.name}
//         value={props.value}
//         onChange={props.handleChange}>
//         <option defaultValue>Choose...</option>
//         <option value="New">New</option>
//         <option value="Good">Good</option>
//         <option value="Fair">Fair</option>
//         <option value="Poor">Poor</option>
//       </select>
//     </div>
//   )
// }

export function FormInput(props) {
  return ( 
    // <div className="container">
    <div>
          <input className="form-control"  {...props}
          />
          {/* // value={props.itemName}
          // name={props.name}
          // onChange={props.handleInputChange}
          // options={props.options}
          // placeholder={props.placeholder} />
          /> */}
          
    </div>    
    
  )
}

export function FormSelect(props) {
  return ( 
    // <div className="container">
    <div>
          <Select 
            className="form-control"
            {...props}/>
    </div>
  )
}