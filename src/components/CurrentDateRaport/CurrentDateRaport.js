import { useEffect, useState } from 'react';
import CurrentDate from '../CurrentDate';

const currentData = new Date();
const currentYear = currentData.getFullYear();
const currentMonth = currentData.getUTCMonth();

const CurrentDateRaport = ({ handleDate, firstUserDate }) => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [normalizedMonth, setNormalizedMonth] = useState(null);
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const [isDisabledNext, setIsDisabledNext] = useState(false);

   useEffect(() => {
    const monthNumber = selectedMonth + 1;
    setNormalizedMonth(monthNumber > 9 ? `${selectedYear}${monthNumber}` : `${selectedYear}0${monthNumber}`);

     if (firstUserDate === normalizedMonth) {
      setIsDisabledPrev(true);
    } else {
      setIsDisabledPrev(false);
    }

    if (selectedMonth) {
          setIsDisabledNext(false);
        } else {
          setIsDisabledNext(true);
        }
    return handleDate(normalizedMonth);


  }, [selectedMonth, selectedYear, handleDate, normalizedMonth, firstUserDate]);
  
  const handleNext = e => {
    e.preventDefault();
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      const year = selectedYear + 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth + 1;
    setSelectedMonth(month);
    return;
  };

  const handlePrevious = e => {
    e.preventDefault();
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      const year = selectedYear - 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth - 1;
    setSelectedMonth(month);
  };

  return (
    <>
        <CurrentDate
        month={selectedMonth}
        year={selectedYear}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        isDisabledPrev={isDisabledPrev}
        isDisabledNext={isDisabledNext}
      />
    </>
  );
};

export default CurrentDateRaport;