import { INITIAL_POSTS, ADD_AD, DELETE_POST } from '../types/types';

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
      // return {
      //   ...state,
      //   posts: [...state.posts, action.payload.newAd],
      // };
      return { ...state, title: '', content: '' };
    case DELETE_POST:
      return {
        ...state,
        // posts: [...state.posts.filter((post) => post.id !== action.payload.id)],
        posts: [...state.posts.filter(post => post.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default reducer;
