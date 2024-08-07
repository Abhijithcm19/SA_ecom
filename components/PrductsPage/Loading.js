import React from "react";

const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center gap-3 mt-5">
        <div className="spinner-border text-primary" role="status">  
          <span className="visually-hidden fs-6 fw-medium">Loading...</span>
        </div>
        <span className="fs-5 fw-medium ">Please Wait Loading....</span>
        
      </div>
    </>
  );
};

export default Loading;
