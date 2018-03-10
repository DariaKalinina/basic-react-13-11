import {CHOOSE_DATES} from "../constants";

export default (dates = {
    from: null,
    to: null
}, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHOOSE_DATES:
            return dates = {
                from: payload.from,
                to: payload.to
            }
    }

    return dates;
}