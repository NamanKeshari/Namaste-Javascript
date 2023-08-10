const obj = {
  name: "Naman",
  address: {
    pin: 125,
    landmark: {
      pin: 589,
      location: "new delhi",
    },
  },
  chintu: [4, 5, 6],
};

const flattenObj = (obj) => {
  let ans = {};
  const generateFlattenObj = (obj, parent) => {
    for (let key in obj) {
      let newParent = parent + key;
      let value = obj[key];
      if (typeof value === "object" && !Array.isArray(value)) {
        generateFlattenObj(value, newParent + ".");
      } else {
        ans[newParent] = value;
      }
    }
  };
  generateFlattenObj(obj, "");

  return ans;
};

console.log(flattenObj(obj));
