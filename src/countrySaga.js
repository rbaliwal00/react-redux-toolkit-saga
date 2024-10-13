import {call, put, takeEvery} from 'redux-saga/effects';
import { getCountrySuccess } from './countrySlice';

function* workGetCountriesFetch(){
    const countries = yield call(() => fetch('https://restcountries.com/v3.1/all'));
    const formattedCounties = yield countries.json();
    const formattedCountriesShortened = formattedCounties.slice(0,10);
    yield put(getCountrySuccess(formattedCountriesShortened));
}

function* countrySaga(){
    yield takeEvery('countries/getCountryFetch', workGetCountriesFetch); // reducerName/actionName
}

export default countrySaga;