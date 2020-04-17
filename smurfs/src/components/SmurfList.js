import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const SmurfList = () => {
  const smurfs = useSelector((state) => state.smurfs);
  const isFetching = useSelector((state) => state.isFetching);

  return (
    <>
      {!smurfs && !isFetching && <p>Fetch The Smurfs</p>}
      {isFetching && <p>L O A D I N G . .</p>}
      {smurfs &&
        smurfs.map((smurf) => (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
          </div>
        ))}
    </>
  );
};

export default SmurfList;
