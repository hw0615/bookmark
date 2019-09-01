import api from '@/api'
import { 
  FETCH_ALL_BOOKMARK,
  FETCH_BOOKMARK,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
} from './types'

export default {
  fetchAllBookmarkList ({ commit }) {
    return api.get()
      .then(res => {
        console.log('res :', res);
        commit(FETCH_ALL_BOOKMARK, res.data)
      })
  },
  fetchBookmarkList ({ commit }, payload) {
    console.log('payload :', payload);
    return api.get(`?_page=${payload.page}&_limit=${payload.limit}`)
      .then(res => {
        console.log('res :', res);
        commit(FETCH_BOOKMARK, res.data)
      })
  },
  createBookmark ({ commit, state }, bookmark) {
    console.log('ACTIONS bookmark', bookmark)
    return api.post('', {title: bookmark.title, url: bookmark.url, thumbnail: bookmark.thumbnail_url})
    .then(res => {
      commit(ADD_BOOKMARK, res.data)
    })
  },
  deleteBookmark ({ commit, state }, bookmark) {
    console.log('ACTIONS DELETE bookmark', bookmark)
    return api.delete(`/${bookmark}`)
    .then(res => {
      console.log('DELETE res :', res);
      commit(DELETE_BOOKMARK, bookmark)
    })
  },
}