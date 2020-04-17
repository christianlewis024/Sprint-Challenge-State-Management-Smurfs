import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";

export const SMURF_SUBMIT = "SMURF_SUBMIT";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });

  fetch("http://localhost:3333/smurfs")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
    });
};

// export const submitSmurf = (smurf) => {
//   axios
//     .post("http://localhost:3333/smurfs", smurf)
//     .catch((err) => console.log(err));
// };
export const submitSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_SMURFS_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log("Post", res);
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_SMURFS_FAILURE, payload: err });
    });
};
