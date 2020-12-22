import * as CONSTANTS from '../constant';
import axios from 'axios';

export const getCovidSummaryAction = () => async dispatch => {

    const { data } = await axios.get('https://api.covid19api.com/summary')

    const countriesSorted = data.Countries.sort((a, b) => (b.TotalConfirmed - a.TotalConfirmed));

    dispatch({ type: CONSTANTS.GET_COVID_INFO, payload: { data, countriesSorted: countriesSorted } })
}

export const setCovidCountryFilteredAction = payload => ({ type: CONSTANTS.SET_COVID_FILTERED, payload })