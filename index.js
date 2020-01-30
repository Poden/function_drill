function getYearOfBirth(age){
  return 2020 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined ){
    throw new Error('values entered are undefined')
  }
  if (age < 0) {
    throw new Error('Age has to be positive');
  }
  if (typeof age !== 'number'){
    throw new Error('age must be a number');
  }
  const yob = getYearOfBirth(age);
  return ` Hi my name is ${name} and im ${age} years old.
  I was born in ${yob}.`;
}

try{
  const greeting1 = createGreeting('nahomi', 22);
  console.log(greeting1);
} catch(e){
  console.error(e.message);
}
