import {
  NEWSLIST,
  STORIES,
  TOPSTORIES
} from '@/store/type';
import axios from 'axios';

export default {
   state: {
     stories: [],
     top_stories : []
  },
  mutations: {
    [STORIES](state,{stories}) {
      state.stories = stories
    },

    [TOPSTORIES](state,{top_stories}) {
      state.stories = top_stories
    }
  },
  actions: {
    [NEWSLIST]({dispatch,commit}) {
      return axios.get('/api/news/latest').then(res => {
        if (res.data) {
          console.log('&&&&&&&&&&&&&&');
          commit(TOPSTORIES, res.data);
          commit(STORIES, res.data);
        }
        return res;
      });
    }
  }
}