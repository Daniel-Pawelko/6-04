// Started a listener to check for button press
document.getElementById('button-id').addEventListener('click', checkStudent)
// defining output variable
const output = document.getElementById('output-id')

// defining function
function checkStudent () {
  // defining input variables
  const day = document.getElementById('input-id-day').value.toLowerCase()
  const age = document.getElementById('input-id-age').value
  // checking to see if user input is identical to systems
  if ((day === 'tuesday' || day === 'thursday') || (age > 12 && age < 21)) {
    output.innerHTML = "You're eligible for student pricing!"
  } else {
    output.innerHTML = 'you must pay regular price :('
  }
}
