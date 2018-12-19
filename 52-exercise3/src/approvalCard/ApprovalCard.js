import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div>
      {/* what is being passed as children */}
      {props.children} 
        <button type="button" className="btn-success">Accept</button>
        <button type="button" className="btn-danger">Reject</button>
    </div>
  )
}

export default ApprovalCard;