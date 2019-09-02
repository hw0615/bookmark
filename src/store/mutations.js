import { 
  FETCH_ALL_BOOKMARK,
  FETCH_BOOKMARK,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
} from './types'

export default {
  [FETCH_ALL_BOOKMARK] (state, bookmarks) {
    state.bookmarksLength = bookmarks.length
  },
  [FETCH_BOOKMARK] (state, bookmarks) {
    state.bookmarks = [...state.bookmarks, ...bookmarks]
  },
  [ADD_BOOKMARK] (state, bookmark) {
    state.bookmarks.push(bookmark)
  },
  [DELETE_BOOKMARK] (state, id) {
    const index = state.bookmarks.findIndex(bookmark => bookmark.id === id)
    state.bookmarks.splice(index, 1)
  }
}