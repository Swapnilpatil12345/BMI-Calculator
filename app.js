btn = document.querySelector("#btn");
btn.addEventListener("click",calculatebmi);

function calculatebmi(){
    let heightVal = parseFloat(document.querySelector("#height").value )/100;

    let weightVal = parseFloat(document.querySelector("#weight").value);
   
    let bmi = weightVal/(heightVal*heightVal);
   
    //access list to print result below button
    let res = document.querySelector("#result");
   
    res.textContent =(bmi).toFixed(2);
}