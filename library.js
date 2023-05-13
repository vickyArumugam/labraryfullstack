function doSsreload() {
  console.log("sing sucess");
  var element = document.getElementById("login");
  var signup= document.getElementById("signup");
  signup.style.display = "none";
  element.style.display = "block";
}
function doSfreload(){
  console.log("sing failed");
  var element = document.getElementById("login");
  var signup= document.getElementById("signup");
  element.style.display = "none";
  signup.style.display = "block";
}
function doLsreload() {
  window.location.href = "http://localhost:8080/library/home.html";
}

function doLfreload() {
  window.location.href = "http://localhost:8080/library";
}
function signup_page()  {  
  var element = document.getElementById("login");
  var signup= document.getElementById("signup")
  element.style.display = "none";
  signup.style.display = "block";
  
}

function doLogin_page() {
  var element = document.getElementById("login");
  var signup= document.getElementById("signup")
  signup.style.display = "none";
  element.style.display = "block";
 
}

function doSubmit()
{
let firstname=document.getElementById("firstname").value;
let lastname=document.getElementById("lastname").value;
let username=document.getElementById("username").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let phone=document.getElementById("phone").value;


let url = `http://localhost:8080/library/accounts/signup?firstname=${firstname}&lastname=${lastname}&username=${username}&email=${email}&pass=${password}&phone=${phone}`;
fetch(url,{
    method: 'POST',
    headers: 
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
}).then(response => response.json())
.then(data => 
  {
 
  if(data.massage=="successful") 
  { 
    doSsreload();
    document.getElementById("ss_alert").style.display="block";
  }
  else
  {
    document.getElementById("sf_alert").style.display="block"; 
    doSfreload();

  }
})
};

     function login()
     {
        let username=document.querySelector("#c_username").value;
        let password=document.querySelector("#c_password").value;
    	  let url=`http://localhost:8080/accounts/home?username=${username}&userpass=${password}`;
        fetch (url,{
            method:'GET',
            headers:
            {
                Accept:'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => 
          {
            if (data.user_password == password)
            {
            doLsreload();
            
            }
            else 
            {
             document.getElementById("lf_alert").style.display="block";
            }
        sessionStorage.setItem("data",JSON.stringify(data));
            console.log(data.user_password);
            console.log(data.user_id);         
        })
      }

     function doShowPass() 
     {
      var x = document.getElementById("c_password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
     }

  


   
