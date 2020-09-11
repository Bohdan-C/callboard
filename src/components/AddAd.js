import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const IDS = {
  TITLE: 'title',
  BODY: 'body',
};

function AddAd({ onCreate }) {
  const [state, setState] = useState({
    [IDS.TITLE]: '',
    [IDS.BODY]: '',
  });

  const onChange = event => {
    const { id, value } = event.target;
    setState(currentState => ({
      ...currentState,
      [id]: value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    onCreate({
      ...state,
      id: uuidv4(),
    });
    setState({
      [IDS.TITLE]: '',
      [IDS.BODY]: '',
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        size="small"
        id={IDS.TITLE}
        value={state[IDS.TITLE]}
        onChange={onChange}
        label="Заголовок"
        variant="outlined"
      />
      <TextField
        size="small"
        id={IDS.BODY}
        value={state[IDS.BODY]}
        onChange={onChange}
        label="Опис"
        variant="outlined"
      />
      <Button type="submit" variant="outlined" color="primary">
        Додати оголошеня
      </Button>
    </form>
  );
}

export default AddAd;
