// TIMING EVENTS EXERCISE
// 1
setTimeout(() => {
  const p1 = document.createElement(`p`);
  p1.innerText = `Hi`;
  document.querySelector(`#first`).insertAdjacentElement('afterbegin', p1);
}, 1000);

// 2
setTimeout(() => {
  const p2 = document.createElement(`p`);
  p2.innerText = `One`;
  const div2 = document.querySelector(`#timeout-nesting`);
  div2.append(p2);

  // Nested setTimeout
  setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.insertAdjacentElement(`beforeend`, p3);
  }, 1000);
}, 2000);

// 3a
let counter = 1;
const counting = setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);

// 3b
const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
  clearInterval(counting);
});
