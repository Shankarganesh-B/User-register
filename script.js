var form = document.getElementById("form")
var result = document.getElementById("result")
var mainbox = document.getElementById("mainbox")
var twobox = document.getElementById("twobox")
var submitButton = document.getElementById("submitButton")

document.getElementById("password").addEventListener("keyup", function() {
    var password = this.value;
    var letpassword = password.length;
    // Check if the password length is between 6 and 10
    if (letpassword >= 6 && letpassword <= 10) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "true");
    }
})
    
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    
    var name = document.getElementById('name').value
    var password = document.getElementById("password").value
    var letname = name.charAt(0).toUpperCase()
    var letpassword = password.length
    
    
    if(name.charAt(0)===letname && name !==name.toLowerCase())
    {
        if(letpassword>=6 && letpassword<=10)
        {
            result.textContent="Successfully registered"
            twobox.style.display="flex"
            mainbox.style.display="none"
            
        }
        else
        {
            alert("Password should contain 6 to 10 characters")
            password.reset();
            submitButton.setAttribute("disabled", "true");
            
        }
    }
    else
    {
        alert("Name should start with an uppercase")
        form.reset();
        result.textContent = "Retry..."
        submitButton.setAttribute("disabled", "true")
        
    }

})