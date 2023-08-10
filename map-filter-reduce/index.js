var users = [
    { firstName: "Naman", lastName: "Keshari", age: 29 },
    { firstName: "Naman", lastName: "Keshari", age: 15 },
    { firstName: "Naman", lastName: "Keshari", age: 29 },
    { firstName: "Naman", lastName: "Keshari", age: 48 },
    { firstName: "Naman", lastName: "Keshari", age: 48 },
];
var output = users.reduce(function (acc, curr) {
    if (acc.hasOwnProperty(curr.age)) {
        acc[curr.age] += 1;
    }
    else {
        acc[curr.age] = 0;
    }
    return acc;
}, {});
console.log(output);
var filterAge = users.reduce(function (acc, curr) {
    if (curr.age < 30)
        acc.push(curr.firstName);
    return acc;
}, []);
console.log(filterAge);
