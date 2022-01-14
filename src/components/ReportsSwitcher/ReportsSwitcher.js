import 'ReportsSwitcher.css';
// import CostsReport from '../CostsReport';
// import IncomesReport from '../IncomesReport';
import { useState } from 'react';

export default function ReportsSwitcher() {
    const [idxActiveReport, setIdxActiveReport] = useState(0);

    const reports = [{
        name: "РАСХОДЫ"
        // , element: <CostsReport />
    }, {
        name: "ДОХОДЫ"
            // , element: <IncomesReport />
        }];

    const handleSwitchReport = (value) => {
        switch (value) {
            case 'next':
                if (idxActiveReport === reports.length - 1) {
                    setIdxActiveReport(0);
                } else {
                    setIdxActiveReport(idxActiveReport + 1);
                };
                break;
            
            case 'prev':
                if (idxActiveReport === 0) {
                    setIdxActiveReport(reports.length - 1);
                } else {
                    setIdxActiveReport(idxActiveReport - 1);
                };
                break;
            
            default: return;
        }
    }

    return (
        <div>
            <div className='reportSwitcher'>
            <button className='reportSwitcher__btn' type='button' onClick={() => handleSwitchReport("prev")}></button>
            <p className='reportSwitcher__text'>{reports[idxActiveReport].name}</p>
                <button className='reportSwitcher__btn' type='button' onClick={() => handleSwitchReport("next")}></button>
            </div>
            <div>
                {/* {reports[idxActiveReport].element} */}
            </div>
        </div>
    )
}