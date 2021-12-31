const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 6;
  } else if (day === 'Wednesday') {
    return 5;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 9; 
  } else if (day === 'Saturday') {
    return 7;
  } else if (day === 'Sunday') { 
    return 12;
  } else {
    return 'Please enter a day of the week';
  }
};

const getActualSleepHours = () => getSleepHours ('Monday') + getSleepHours ('Tuesday') + getSleepHours ('Wednesday') + getSleepHours ('Thursday') + getSleepHours ('Friday') + getSleepHours ('Saturday') + getSleepHours ('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours ();
  const idealSleepHours = getIdealSleepHours ();

  if (actualSleepHours === idealSleepHours) {
    console.log (`You got ${actualSleepHours} hours of sleep. The perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log (`You got ${actualSleepHours - idealSleepHours} hours of sleep more then needed!`);
  } else {
    console.log (`You got ${actualSleepHours - idealSleepHours} hours of sleep. You should get some more sleep!`);
  }
};

calculateSleepDebt();