import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCovidCountryFilteredAction } from '../../actions/action.js'
import { ASC, DESC } from '../../constant';

export default function TableHeader() {

    const { covidCountryFiltered } = useSelector(({ reducer }) => reducer);
    const dispatch = useDispatch();

    const [columnSorted, setColumnSorted] = useState({ column: "TotalConfirmed", orderBy: DESC });

    const onClickSort = column => {
        let orderBy = null;

        if (columnSorted.column === column) {
            orderBy = columnSorted.orderBy === ASC ? DESC : ASC;
        }
        else {
            orderBy = DESC;
        }

        sortColumn({ column, orderBy });

        setColumnSorted({ column, orderBy });

    }

    const sortColumn = (objColumnSorted) => {
        if (covidCountryFiltered?.length) {
            const sortFunction = objColumnSorted.orderBy === ASC ?
                (a, b) => (a[objColumnSorted.column] - b[objColumnSorted.column]) :
                (a, b) => (b[objColumnSorted.column] - a[objColumnSorted.column])

            const dataSorted = covidCountryFiltered.sort(sortFunction);
            dispatch(setCovidCountryFilteredAction([...dataSorted]));
        }
    }

    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Country Name</th>
                <th className="th-sort" onClick={() => { onClickSort("TotalConfirmed") }}>
                    Total confirmed cases
                    {(columnSorted.column === "TotalConfirmed" && columnSorted.orderBy === ASC) && <i className="sort-by-asc"></i>}
                    {(columnSorted.column === "TotalConfirmed" && columnSorted.orderBy === DESC) && <i className="sort-by-desc"></i>}
                </th>
                <th className="th-sort" onClick={() => { onClickSort("TotalDeaths") }}>
                    Total death cases
                    {(columnSorted.column === "TotalDeaths" && columnSorted.orderBy === ASC) && <i className="sort-by-asc"></i>}
                    {(columnSorted.column === "TotalDeaths" && columnSorted.orderBy === DESC) && <i className="sort-by-desc"></i>}
                </th>
                <th className="th-sort" onClick={() => { onClickSort("TotalRecovered") }}>
                    Total recovered cases
                    {(columnSorted.column === "TotalRecovered" && columnSorted.orderBy === ASC) && <i className="sort-by-asc"></i>}
                    {(columnSorted.column === "TotalRecovered" && columnSorted.orderBy === DESC) && <i className="sort-by-desc"></i>}
                </th>
            </tr>
        </thead>
    )
}
