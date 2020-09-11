import { ADD_AD, INITIAL_POSTS, DELETE_POST, LIKE_POST } from '../types/types';

export const initialPosts = posts => ({
  type: INITIAL_POSTS,
  payload: {
    initialPosts: posts,
  },
});

export const addAdAction = newAd => ({
  type: ADD_AD,
  payload: {
    newAd,
  },
});

export const deletePost = postId => ({
  type: DELETE_POST,
  payload: {
    postId,
  },
});

export const likePost = ({
  type: LIKE_POST,
});
