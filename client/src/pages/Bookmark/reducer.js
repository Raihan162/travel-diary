import { produce } from "immer";
import { GET_BOOKMARK, SET_BOOKMARK, ADD_BOOKMARK, SET_ADD_BOOKMARK } from "./constants";

export const initialState = {
    bookmark: [],
    createBookmark: []
}

export const storedKey = ['bookmark', 'createBookmark']

const bookmarkReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_BOOKMARK:
                draft.bookmark = action.bookmark
                break;
            case SET_BOOKMARK:
                draft.bookmark = action.data
                break;

            case ADD_BOOKMARK:
                draft.createBookmark = action.createBookmark
                break;
            case SET_ADD_BOOKMARK:
                draft.createBookmark = action.data
                break;

            default:
                break;
        }
    })

export default bookmarkReducer