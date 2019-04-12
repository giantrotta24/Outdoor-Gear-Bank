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
      <textarea className="form-control" rows="3" {...props}>
      </textarea>
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

export function FormInput(props) {
  return ( 
    // <div className="container">
    <div>
          <input className="form-control"  {...props}
          />
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

export function AddMaintCommentBtn(props) {
  return (
    <div>
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success mt-3 mr-2">
        {props.children}
        Add Comment
      </button>
    </div>
  );
}

export function MaintCommentInput(props) {
  return (
    <div>
          <input className="form-control" {...props}
          />
    </div>

  )
}

export function MaintStatusBtn(props) {
  return (
    <div>
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success mt-3 mr-2">
        {props.children}
        Change Status to Available
      </button>
    </div>
  );
}