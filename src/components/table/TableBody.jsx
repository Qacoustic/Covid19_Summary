import { useSelector } from 'react-redux';

export default function TableBody() {

    const { covidCountryFiltered } = useSelector(({ reducer }) => reducer);

    const checkReported = number => number === 0 ? "unreported" : convertNumberFormat(number);

    const convertNumberFormat = number => Number(number).toLocaleString();

    return (
        <tbody>
            {
                covidCountryFiltered?.map(({ Country, TotalConfirmed, TotalDeaths, TotalRecovered }, index) => (
                    <tr key={index}>
                        <td data-label="#">{index + 1}</td>
                        <td data-label="Country Name">{Country}</td>
                        <td data-label="Total confirmed cases" className="confirmed">{checkReported(TotalConfirmed)}</td>
                        <td data-label="Total death cases" className="death">{checkReported(TotalDeaths)}</td>
                        <td data-label="Total recovered cases" className="recovered">{checkReported(TotalRecovered)}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}
