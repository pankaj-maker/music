const a = new Date();
console.log(a);
const b = a.getHours()+":"+ a.getMinutes()+"PM GMT+5:30";
console.log(b);

const timep = document.querySelector(".time")
timep.textContent = b;