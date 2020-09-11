import { INITIAL_POSTS, ADD_AD, DELETE_POST, LIKE_POST } from '../types/types';

export const initialState = {
  posts: [],
  title: '',
  content: '',
  likes: Number,
  id: Number,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_POSTS:
      return {
        ...state,
        posts: action.payload.initialPosts,
      };

    case ADD_AD:
      return {
        ...state,
        posts: [...state.posts, action.payload.newAd],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.postId),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.postId),
      };
    default:
      return state;
  }
};

export default reducer;
