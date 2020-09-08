import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { initialPosts, deletePost, addAdAction } from '../../redux/actions/action';
import SimpleModal from '../../components/Modal';
import { BASE_URL } from '../../routes/Endpoints';
// import addAdAction from "../../redux/actions/action";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: 1071,
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 325,
    height: 300,
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridList: {
    width: 950,
    height: 550,
  },
  gridListTile: {
    maxWidth: 310,
    minHeight: 240,
  },
  content: {
    height: 210,
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
  },
  body: {},
  image: {
    width: 268,
  },
  icon: {
    color: 'white',
  },
}));

const Callboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);
  const { posts } = useSelector(state => state.reducer);

  // Get posts
  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(data => {
        dispatch(initialPosts(data.data));
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('Error!', err);
      });
  }, [dispatch]);

  // here

  // Delete post
  const handleDelete = (id, event) => {
    event.preventDefault();
    axios.delete(`${BASE_URL}/${id}`).then(() => {
      dispatch(deletePost(id));
      posts.filter(post => post.id !== id);
    });
  };

  const addAd = newAd => {
    dispatch(addAdAction(newAd));
  };

  // const handleLike = (id, event) => {
  //   console.log("id", id);
  // };

  if (!posts.length) {
    return (
      <div className={classes.container}>
        <Typography variant="h5" component="h5">
          На даний момент пости відсутні.
        </Typography>
        <SimpleModal onCreate={addAd} />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <SimpleModal />
      <div className={classes.root}>
        {posts.map(post => (
          <Card key={post.id} className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h5">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() => console.log('post.likes', post.likes)}
                aria-label="like"
              >
                <FavoriteIcon />
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.likes}
                </Typography>
              </IconButton>
              <IconButton
                onClick={() => handleDelete(post.id, event)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Callboard;
