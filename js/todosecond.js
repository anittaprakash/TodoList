//let btn=document.getElementById("btnlogin");
// btn.addEventListener("onchange",  valid(mainpage));

 function valid(callback) {

 let username=document.getElementById('username').value;
 let password=document.getElementById('password').value;

 console.log(password);
 console.log(username);
  
        if((username=="admin") && (password == "12345"))
        {
            callback();
        }
        else if((username=="") || (password == ""))
        {
            alert("Username && Password field cannot be blank");
        }
        else 
        {
            alert(" Invalid username or password or both");

        }          

}
 
function mainpage(){
 
    window.open("todo.html");
}

