import React from 'react';
import Select from 'react-select';
import './style.css';

export function Input(props) {
  return (
    <div className='form-group'>
      <input className='form-control' {...props} />
    </div>
  );
};

export function TextArea(props) {
  return (
    <div className='form-group'>
      <textarea className='form-control' rows='2' {...props}>
      </textarea>
    </div>
  );
};

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: 'right', marginBottom: 10 }} className='btn btn-success mt-3'>
      {props.children}
    </button>
  );
};

export function SelectCondition(props) {
  return (
    <div className='form-group'>
      <select className='custom-select'
        name={props.name}
        value={props.value}
        onChange={props.handleChange}>
        <option defaultValue>Choose...</option>
        <option value='New'>New</option>
        <option value='Good'>Good</option>
        <option value='Fair'>Fair</option>
        <option value='Poor'>Poor</option>
      </select>
    </div>
  )
};

export function FormInput(props) {
  return (
    <div>
      <input className='form-control'  {...props}
      />
    </div>

  )
};

export function FormSelect(props) {
  return (
    <div>
      <Select
        className='form-control'
        {...props} />
    </div>
  )
}

export function AddMaintCommentBtn(props) {
  return (
    <div>
      <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-info mr-2">
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
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
        Change Status to Available
      </button>
    </div>
  );
}
