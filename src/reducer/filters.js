import {CHOOSE_DATES, SELECT_ARTICLE} from "../constants";

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_ARTICLE:
            return {...filters, selected: payload.selected};
        case CHOOSE_DATES:
            return {...filters, dateRange: payload.dateRange};
    }

    return filters;
}