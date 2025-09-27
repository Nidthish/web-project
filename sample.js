
function login(){
    let mail=document.getElementById("Email").value;
    let pass=document.getElementById("Password").value;
    let mes=document.getElementById("submit");

    // Get saved user from localStorage
    let savedUser = JSON.parse(localStorage.getItem("userDetails"));

    if(mail==="nidthishak@gmail.com" && pass==="123456789") {
        
        mes.innerText = "Login successful ✅";
        mes.style.color = "green";
        window.location.href="home.html";
    } 
    else {
        mes.innerText = "Wrong email or password ❌"
        mes.style.color = "red";
    }
}

function signup(){
      let name=document.getElementById("Fullname").value;
      let mail=document.getElementById("email").value;
      let password=document.getElementById("Password").value;
      let confirm_password=document.getElementById("c_password").value;

      if(password === confirm_password){
        let user = {
          name: name,
          mail: mail,
          p_word: password
        };

        localStorage.setItem("userDetails", JSON.stringify(user));

        document.getElementById("submit").innerText="Signed up ✅";
        document.getElementById("submit").style.color="green";

        window.location.href="sign in.html";
      } else {
        alert("Passwords do not match ❌");
      }
    }
