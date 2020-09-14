import { OrderedMap, List } from 'immutable';
import { INITIAL_POSTS, ADD_AD, DELETE_POST } from '../types/types';

export const initialState = OrderedMap({
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
    case ADD_AD:
      return state.set('posts', state.get('posts').push(action.payload.newAd));
    case DELETE_POST:
      return state.update('posts', psts => psts.filter(p => p.id !== action.payload.postId));
    default:
      return state;
  }
};

export default reducer;
