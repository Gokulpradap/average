const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
//average
const total = scores.filter((val) => val.marks);
console.log(total);
const totalmarks = total.map((tot) => tot.marks);
console.log(totalmarks);
const subtotal = totalmarks.reduce((sum,curr) => sum + curr, 0);
console.log(subtotal);

// const avg = subtotal/totalmarks;
// console.log(avg); // NaN


const avg = subtotal/7;
console.log(avg);

// highest mark name

// const high = totalmarks.reduce((sum,curr) => sum < curr, 0);
// console.log(high);

// const high = totalmarks.reduce((sum,curr) => sum > curr, 0);
// console.log(high);

const total1 = scores.filter((val) => val.marks > 90);
console.log(total1);
const name1 = total1.map((name2) => name2.name);
console.log(name1); 