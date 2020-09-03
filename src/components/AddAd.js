import React, { useState } from "react";

function AddAd({ onCreate }) {
  const IDS = {
    TITLE: "title",
    BODY: "body",
  };

  const [state, setState] = useState({
    [IDS.TITLE]: "",
    [IDS.BODY]: "",
  });

  const onChange = (event) => {
    const { id, value } = event.target;

    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    onCreate(state);
  }

  return (
    <form onSubmit={submitHandler}>
      <input id={IDS.TITLE} value={state[IDS.TITLE]} onChange={onChange} />
      <input id={IDS.BODY} value={state[IDS.BODY]} onChange={onChange} />
      <button type="submit">Додати оголошеня</button>
    </form>
  );
}

export default AddAd;
