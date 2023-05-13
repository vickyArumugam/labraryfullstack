

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



    function userbook() {
 
     var userId=user_details.user_id;
      let url = `http://localhost:8080/library/library/userbooks?userid=${userId}`;
      fetch(url,{
          method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
      })
        .then((res) => res.json())
        .then((value) => {
        // console.log(value.massage);
        if (value.massage!='NoBooks') {

        }
        else {
          document.querySelector(".user_bookslist").innerHTML += `
          <h1>You don't have any books...</h1>`;
        }
        value.forEach(element => {
          
          let bookId=element.bookId
          if(bookId==element.bookId){
        
            document.querySelector(".user_bookslist").innerHTML += `

            <div class="book">
        <div class="cover" >
        <img src="./0358573a08ec4a5.jpg">
        </div>
        <div class="ditail">
           
            <p class="bookname">${element.bookName}</p>
            <p class="authorname">${element.authorName}</p>
            <p class="bookid">${element.bookId}</p>
            <button class="glow-on-hover b-btn "onclick="returnbook(${element.bookId})" type="button">Return</button>   
        </div>

    </div>`;
          }
  
        });
        }) 
   
  }
  userbook();

  
  function returnbook(bookId){
  
    let returnbookid=bookId;
    var userId=user_details.user_id;
    let url=`http://localhost:8080/library/library/returnbook?userid=${userId}&bookid=${returnbookid}`;
  
    fetch(url,
      {
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
      }).then(response => response.json())
      .then(data => {
        console.log(data.massage);
        if(data.massage=="the book returned") {
         
            document.getElementById("alert").style.display="block";
        
          
         
        }
      
      })
  };
  function reload(){
  
    location.reload();
  }
  

  function backbook() {
    window.location.href = "http://localhost:8080/library/home.html";
  }

  let buttons = document.querySelectorAll('li');
  buttons.forEach(li => {
  li.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');        
  });
});

function service(){
    window.location.href = "http://localhost:8080/library/project.html";
}




