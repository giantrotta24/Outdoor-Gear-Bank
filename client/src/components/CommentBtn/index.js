import React from "react";
import './style.css';

// Add Comment button for Comment and Maintenance Comments

export function CommentBtn(props) {
  return (
    <div>
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger btn-sm">
        Add Comment
      {props.children}
      </button>
      </div>

      /* <button {...props} style={{ float: "right", marginBottom: 10 }} 
              className="btn btn-danger btn-sm" data-toggle="modal"
              data-target="#maintModal">
        Add Comment
      {props.children}
      </button>
    

      <div className="modal fade" id="maintModal" tabindex="-1" role="dialog"
        aria-labelledyb="maintModalLabel1" aria-hidden="true">
        <div clasName="modal-dialog">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
            <h4 className="modal-title" id="maintModalLabel">Update Comment</h4>
          </div>
          <div className="modal-body">
            .....
            </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div> */
  );
}