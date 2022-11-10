


function LoginFunc(){
  var Email = document.getElementById("un").value;
  var Password = document.getElementById("pa").value;
  if(Email==="admin" && Password="admin"){
      window.open("https://www.w3schools.com/");
      return false;
  }
  else{
    window.alert("Wrong Credentials!");
  }
}

function Show(){
  var temp = document.getElementById("pa");
  if(temp.type === "password"){
    temp.type = "text";
  }
  else{
    temp.type = "password";
  }
}
