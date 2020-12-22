import { useSelector, useDispatch } from 'react-redux';
import { setCovidCountryFilteredAction } from '../actions/action'

export default function Header() {

    const { covidInfo } = useSelector(({ reducer }) => reducer);
    const dispatch = useDispatch();

    const handleChangeCountry = (e) => {
        const covidFiltered = covidInfo.Countries.filter(item => item.Country.toLowerCase().includes(e.target.value.toLowerCase()));
        dispatch(setCovidCountryFilteredAction(covidFiltered));
    }

    const formatDate = strDate => new Date(strDate).toLocaleTimeString([], { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <header className="flexheader">
            <h1 className="flexitem">Covid19 Summary</h1>
            <div className="flexitem">
                <div className='sectionfilter'>
                    <label className="labelfilter">Country</label>
                    <input type="text" name="txtCountry" maxLength="50" placeholder="Filter Country" onChange={handleChangeCountry} />
                </div>
                <div className="sectiondate">
                    <label>Last updated: {!!covidInfo?.Date && formatDate(covidInfo?.Date)}</label>
                </div>
            </div>
        </header>
    )
}
