function userbook() {
    window.location.href = "http://localhost:8080/library/userbook.html";

  }
  function backbook() {
    window.location.href = "http://localhost:8080/library/home.html";
  }

  var user_details=JSON.parse(sessionStorage.getItem('data'));
document.querySelector(".current_username").innerHTML=user_details.user_name;

function warning()
 {
 
    sessionStorage.removeItem("data");

    console.log(data.massage);    
    if(document.getElementById("alert").style.display="none") {
      document.getElementById("alert").style.display="block";
     
    }
    
  
}

function logout() {
  window.location.href = "http://localhost:8080/library/";
}