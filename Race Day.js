let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;

if (age === 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly === true) {
  console.log ('Your race starts at 09:30am and your race number is:' + raceNumber);
} else if (age > 18 && registeredEarly === false) {
  console.log ('Your race starts at 11:00am and your race number is:' + raceNumber);
} else if (age < 18) {
  console.log ('Your race starts at 12:30pm and your race number is:' + raceNumber);
} else {
  console.log ('You need to register first. Please see the registration desk for more infomation.')
}