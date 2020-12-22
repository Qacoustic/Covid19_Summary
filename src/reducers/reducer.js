import * as CONSTANTS from '../constant';

export const reducer = (state = {}, { type, payload }) => {
    switch (type) {
        case CONSTANTS.GET_COVID_INFO:
            return {
                ...state,
                covidInfo: payload.data,
                covidCountryFiltered: payload.countriesSorted
            }
        case CONSTANTS.SET_COVID_FILTERED:
            return {
                ...state,
                covidCountryFiltered: [...payload]
            }
        default: return state;
    }
}