import React from 'react';
import dates from './Dates.css';

const Dates = () => {
  const date = new Date();
  const dayNumber = date.getDate();
  const weekday = date.getDay();
  const month = date.getMonth();
  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun',
    8: 'Mon',
    9: 'Tues',
    10: 'Wed',
    11: 'Thurs',
    12: 'Fri',
    13: 'Sat',

  };
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  const actualMonth = months[month];
  const actualWeekday = daysOfWeek[weekday];
  const fourDaysLater = daysOfWeek[weekday + 4];
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return (
    <div className={dates.expectedDates}>
      <div className={dates.free}>
        <span className={dates.bold}>
          {` Get it ${actualWeekday}, ${actualMonth} ${dayNumber} - ${fourDaysLater}, ${actualMonth} ${dayNumber + 4} `}
        </span>
        {' if you choose '}
        <span className={dates.bold}> 
          {'FREE Shipping'}
        </span>
        {' at checkout. '}
      </div>

      <div className={dates.oneDay}>
        <span className={dates.bold}>
          {` Get it Tomorrow, ${actualMonth} ${dayNumber + 1}`}
        </span>
        <span className={dates.sameDay}>
          {` if you order within ${24 - hour} hrs ${60 - minutes} mins and choose paid `}
        </span>
        <span className={dates.oneDayShipping}> One-Day Shipping</span>
        <span className={dates.sameDay}> at checkout </span>
      </div>
      <div className={dates.stock}>
        <span className={dates.available}>
          {' In Stock. '} 
          <br />
        </span>
        <span className={dates.location}> 
          {' Ships from and sold by Amazon.com. '}
        </span>
      </div>
    </div>
  );
};

export default Dates;
