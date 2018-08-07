import { SELECT_ARTICLE } from '../constants'
import { DATE_RANGE } from '../constants'

const defaultFilters = {
	selected: [],
	dateRange: {
		from: null,
		to: null
	}
}


export default (filters = defaultFilters, action) => { 
const { type, payload } = action
    switch (type) {
		case SELECT_ARTICLE:
			return {...filters, selected: payload.idArr}

		case DATE_RANGE:
			return {...filters, dateRange: payload.range}	
	}
    return filters
}

