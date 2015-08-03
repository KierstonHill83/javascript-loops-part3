var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

function firstLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name);
  });
}
firstLoop(students);


//problem 1
function ageLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.age);
  });
}
ageLoop(students);


//problem 2
function cityLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name + ", " + student.city);
  });
}
cityLoop(students);


//problem 3
function filterLoop(arr) {
  arr.forEach(function(student) {
    if(student.city === 'Boulder') {
      console.log(student.name + " is from Boulder");
    }
  });
}
filterLoop(students);


//problem 4
function isOlder(arr) {
  arr.forEach(function(student) {
    if(student.age > 25) {
      console.log(student.name + " is older than 25");
    }
  })
}
isOlder(students);

