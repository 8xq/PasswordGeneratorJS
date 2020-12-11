//=============================================================================\\
//                           Random password generator                          \\
//                              made by nullcheats                               \\
//================================================================================\\
 
const amount_gen = 17;
let password = [];
let selection = [];

/*
This function checks atleast 1 checkbox is active / enabled
If a checbox is not selected an "alert" will be shown
If a checkbox is selected it will add 1-4 into a "selection array"
GeneratePassword is called once checkbox options have been added.
*/
let options_Selected = () => {
  selection = [];
  if ((Upper.checked != 1) && (Lower.checked != 1) && (Special.checked != 1) && (Numb.checked != 1)) {
    alert('Please select an option from below !');
  }
  if (Upper.checked == 1) {
    selection.push(1);
  }
  if (Lower.checked == 1) {
    selection.push(2);
  }
  if (Special.checked == 1) {
    selection.push(3);
  }
  if (Numb.checked == 1) { 
    selection.push(4); 
  }
  generatePassword();
}



/* 
Main function that generates passwords via the functions
This will loop from 0 - max selected
Rnd_selection = calls the function to get random function to use
Each itteration adds char/number to "password" array
When loop is finished the array "password" is displayed in HTML :)
*/
const generatePassword = () => {
  password = [];
  for (let i = 0; i < amount_gen; i++) {
    let Rnd_selection = return_type();
    if (Rnd_selection === 1) {
      password.push(UpperChar());
    } else if (Rnd_selection === 2) {
      password.push(LowerChar());
    } else if (Rnd_selection === 3) {
      password.push(SpecialChar());
    } else if (Rnd_selection === 4) {
      password.push(Numbers());
    }
    document.getElementById("ip3").value = (password.join(""));
  }
}



/* 
Random functions
1 -> Upperchar (random upper case character)
2 -> Lowerchar (random lower case character)
3 -> Specialchar (random special character)
4 -> Numbers (random number 0-9)
*/
const UpperChar = () => {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
  var rnd = Math.floor(Math.random() * list.length);
  return list[rnd];
}
const LowerChar = () => {
  const list = "abcdefghijklmnpqrstuvwyxz";
  var rnd = Math.floor(Math.random() * list.length);
  return list[rnd];
}
const SpecialChar = () => {
  const list = "({}[]()/\`~,;:.<>)";
  var rnd = Math.floor(Math.random() * list.length);
  return list[rnd];
}
const Numbers = () => {
  return (Math.floor(Math.random() * 9));
}


/*
Simple function to return a random number (from selection array);
Number will determine what random function to call depending on checkboxes
1-4 is the "max" range currently as described above
*/
const return_type = () => {
  return selection[[Math.floor(Math.random() * selection.length)]]
};