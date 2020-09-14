import { OrderedMap, List } from 'immutable';
import { INITIAL_POSTS, ADD_AD, DELETE_POST, LIKE_POST } from '../types/types';

export const initialState = new OrderedMap({
  posts: new List([]),
  title: '',
  content: '',
  likes: Number,
  id: Number,
  isLoading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_POSTS:
      return state.set('posts', new List(action.payload.initialPosts));
      // return {
      //   ...state,
      //   posts: action.payload.initialPosts,
      // };
    case ADD_AD:
      return state.set('posts', new List(action.payload.newAd));
      //   return {
      //     ...state,
      //     posts: [...state.posts, action.payload.newAd],
      // };
    case DELETE_POST:
      return state.update('posts', psts => psts.filter(p => p.get('id') !== action.payload.postId));
      // return {
      //   ...state,
      //   posts: state.posts.filter(post => post.id !== action.payload.postId),
      // };
    // case LIKE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter(post => post.id !== action.payload.postId),
    //   };
    default:
      return state;
  }
};

export default reducer;
