

var user_details=JSON.parse(sessionStorage.getItem('data'));
document.querySelector(".current_username").innerHTML=user_details.user_name;

function warning()
{
    sessionStorage.removeItem("data");  
}

function logout() {
  window.location.href = "http://localhost:8080/library/";
}
function doShowList() 
{
  let url = "http://localhost:8080/library/book";
  fetch
  (url,
    {
      method: 'GET',
        headers: 
        {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    }
  )
    .then((res) => res.json())
    .then((value) => 
    {
         console.log(value);
         value.forEach(element => 
      {
         if(element.bookStatus==true)
      {
        
        document.querySelector(".books").innerHTML += `
        <div class="book">
        <div class="cover" >
        <img src="./0358573a08ec4a5.jpg">
        </div>
        <div class="ditail">
            <p class="bookname">${element.bookName}</p>
            <p class="authorname">${element.authorName}</p>
            <p class="bookid">${element.bookId}</p>
            <button class="glow-on-hover "onclick="doGetbook(${element.bookId})" type="button">Get</button>
        </div>

    </div>`;
      }
      else 
      {
        document.querySelector(".books").innerHTML += `
        <div class="book">
        <div class="cover" >
        <img src="./0358573a08ec4a5.jpg">
        </div>
        <div class="ditail">
            <p class="bookname">${element.bookName}</p>
            <p class="authorname">${element.authorName}</p>
            <p class="bookid">${element.bookId}</p>
        </div>
    </div> `;
      }
     });
   }) 

  };

  doShowList();

  function userbook() {
    window.location.href = "http://localhost:8080/library/userbook.html";

  }
  function service(){
    window.location.href = "http://localhost:8080/library/project.html";
}

function doGetbook(bookId){

  let getbookid=bookId;
  var userId=user_details.user_id;
  console.log(getbookid,userId);
  let url=`http://localhost:8080/library/library/getbook?userid=${userId}&userbookid=${getbookid}`;

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
      if(document.getElementById("alert").style.display="none") {
        document.getElementById("alert").style.display="block";
       
      }

    })
    
}
function reload(){
  window.location.href = "http://localhost:8080/library/home.html";
  location.reload();
}
    let buttons = document.querySelectorAll('li');
    buttons.forEach(li => {
    li.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});



 
