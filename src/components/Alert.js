import React from "react";

function Alert(props) {
  return (
    props.alert && (<div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> {props.alert.message}
      </div>
    </div>))
  
}

export default Alert;
