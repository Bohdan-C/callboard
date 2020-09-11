import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  IconButton,
  TextareaAutosize,
  Modal,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import { addAdAction } from '../redux/actions/action';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 550,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    borderRadius: 15,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnAdd: {
    position: 'fixed',
    left: '90%',
    top: '10%',
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[5],
  },
  inputTitle: {
    width: 550,
    marginTop: 15,
    marginBottom: 20,
  },
  textAria: {
    minWidth: 528,
    maxWidth: 528,
    minHeight: 140,
    maxHeight: 140,
    marginBottom: 20,
    padding: 10,
    display: 'flex',
    fontSize: 18,
    outlineColor: '#3f51b5',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'rgb(195, 195, 195)',
  },
}));

const IDS = {
  TITLE: 'title',
  CONTENT: 'content',
  LIKES: 'likes',
  ID: 'id',
};

function SimpleModal() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = useState({
    [IDS.TITLE]: '',
    [IDS.CONTENT]: '',
    [IDS.LIKES]: 0,
    [IDS.ID]: uuidv4(),
  });

  const onChange = event => {
    const { id, value } = event.target;
    setState(currentState => ({
      ...currentState,
      [id]: value,
      [IDS.ID]: uuidv4(),
    }));
  };

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Add post
  const addPost = () => {
    event.preventDefault();
    axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(state),
      url: 'http://localhost:4200/posts',
    });
    dispatch(addAdAction(state));
    setState({
      [IDS.TITLE]: '',
      [IDS.BODY]: '',
      [IDS.LIKES]: 0,
    });
    handleClose();
  };

  // const handleLike = () => {
  //   setState({
  //     [IDS.LIKES]: +1,
  //   });
  // };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={addPost}>
        <TextField
          size="small"
          id={IDS.TITLE}
          value={state[IDS.TITLE]}
          onChange={onChange}
          label="Заголовок"
          variant="outlined"
          className={classes.inputTitle}
        />
        <TextareaAutosize
          className={classes.textAria}
          aria-label="Опис"
          placeholder="Опис"
          id={IDS.CONTENT}
          value={state[IDS.CONTENT]}
          onChange={onChange}
        />
        <Button type="submit" variant="outlined" color="primary">
          Додати оголошеня
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <IconButton
        className={classes.btnAdd}
        color="primary"
        aria-label="delete"
        onClick={handleOpen}
      >
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;
