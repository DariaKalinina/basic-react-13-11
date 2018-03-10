import {SELECT_ARTICLE} from "../constants";

export default (selectedArticle = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_ARTICLE:
            return selectedArticle = payload.id
    }

    return selectedArticle
}