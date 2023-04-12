
const getFormInputs = () => {
  return async dispatch => {
    try {
      const response = await fetch("https://react-course-http-3769e-default-rtdb.firebaseio.com/form.json");
      const data = await response.json();
      dispatch({ type: "GET_DATA", payload: data })

    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

const deleteFormInput = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://react-course-http-3769e-default-rtdb.firebaseio.com/form/${id}.json`, {
        method: 'DELETE',
      });
      const data = await response.json();
      dispatch({ type: "DELETE_DATA", payload: data })
      await dispatch(getFormInputs())

    } catch (error) {
      console.error('Error deleting form input:', error);
    }
  }
};

const addFormInputs = (inputInformation) => {
  return async function (dispatch) {
    try {
      const response = await fetch("https://react-course-http-3769e-default-rtdb.firebaseio.com/form.json", {
        method: "POST",
        body: JSON.stringify(inputInformation),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "POST_DATA", payload: data })
      await dispatch(getFormInputs())

    } catch (error) {
      console.log(error)
    }
  };
}
const EditFormUser = (user, param) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://react-course-http-3769e-default-rtdb.firebaseio.com/form/${param}.json`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "PUT_DATA", payload: data })
      await dispatch(getFormInputs())

    } catch (error) {
      console.log(error)
    }
  };
}
const GetSingleUser = (param) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://react-course-http-3769e-default-rtdb.firebaseio.com/form/${param}.json`);
      const data = await response.json();
      dispatch({ type: "GET_SİNGLE_USER", payload: data })
      await dispatch(getFormInputs())

    } catch (error) {
      console.log(error)
    }
  };
}

export { addFormInputs, getFormInputs, deleteFormInput, EditFormUser,GetSingleUser };