

// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.getElementById("counter1");
//     count.innerHTML = ++upto;
//     if (upto === 1000) {
//         clearInterval(counts);
//     }
// }


// Function to create a counter
function createCounter(id, target) {
  let upto = 0;
  let counterElement = document.getElementById(id);
  let interval = setInterval(() => {
      counterElement.innerHTML = ++upto;
      if (upto === target) {
          clearInterval(interval);
      }
  }, 1); // Adjust the interval delay as needed
}

// Create four counters with different targets
createCounter('counter1', 8000); // Counter 1 counts up to 1000
createCounter('counter2', 810); // Counter 2 counts up to 2000
createCounter('counter3', 2000); // Counter 3 counts up to 3000
createCounter('counter4', 20); // Counter 4 counts up to 4000



document.getElementById('btn-1').addEventListener('click', function() {
  document.getElementById('group1').style.display = 'flex';
  document.getElementById('group2').style.display = 'none';
});

document.getElementById('btn-2').addEventListener('click', function() {
  document.getElementById('group1').style.display = 'none';
  document.getElementById('group2').style.display = 'flex';
});    