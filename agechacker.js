/*function chackAge(){

 const name= document.getElementById("name").Value;
  const age=parseInt( document.getElementById("age").Value);

  const resultElement= document.getElementById("result");
if(!name|| isNaN(age)){


  result.style.color="red";

  result.resultElement= " please  enter tre both name and age.";

  return;
}


}


let status= "";

if (age>=18){

  status="an adult";

  }

  else{

    status=" a minor";
  }


  resultElement.style.color="green";
  resultElement.InnerHtm=name + " is "+ststus +".";
  */

  function chackAge() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const resultElement = document.getElementById("result");
  
    if (!name || isNaN(age)) {
      resultElement.style.color = "red";
      resultElement.innerHTML = "Please enter both your name and age.";
      return;
    }
  
    let status = "";
  
    if (age >= 18) {
      status = "an adult";
    } else {
      status = "a minor";
    }
  
    resultElement.style.color = "green";
    resultElement.innerHTML = name + " is " + status + ".";
  }
  