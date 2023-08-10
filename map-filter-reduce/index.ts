interface userType {
  firstName: string;
  lastName: string;
  age: number;
}

const users: userType[] = [
  { firstName: "Naman", lastName: "Keshari", age: 29 },
  { firstName: "Naman", lastName: "Keshari", age: 15 },
  { firstName: "Naman", lastName: "Keshari", age: 29 },
  { firstName: "Naman", lastName: "Keshari", age: 48 },
  { firstName: "Naman", lastName: "Keshari", age: 48 },
];

const output: any = users.reduce((acc, curr: userType) => {
  if (acc.hasOwnProperty(curr.age)) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 0;
  }
  return acc;
}, {});

console.log(output);

const filterAge = users.reduce((acc: string[], curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);

console.log(filterAge);
