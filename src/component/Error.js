import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
  return (
    <>
      <div>Oops!!</div>
      <div>Something Went Wrong</div>
      <h4>{err.status}: {err.statusText}</h4>
    </>
  );
}

export default Error;
