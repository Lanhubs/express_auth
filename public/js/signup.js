const form = document.querySelector("form")

const emailError = document.querySelector(".emailError")
const pwdError = document.querySelector(".pwdError")
emailError.style.color = "red"
pwdError.style.color = "red"

form.addEventListener("submit", (e)=>{
    e.preventDefault()     
    emailError.textContent = ''
    pwdError.textContent = ''
    // form input elements
    
    console.log(window.location)
    try {
        const url = "http://localhost:4000/signup"
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        console.log(email,password, username);
        if(password.length < 6){
            pwdError.textContent = "password length should be at least 6"
        }
        if(password == ""){
            pwdError.textContent == "password is compulsory"
        }
        const Data = { username, email, password}
        
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(Data=>{
                if(Data){
                    console.log(Data)
                    window.location.assign("/")
                }
            })
            .catch(err => console.log(err))
        

    } catch (err) {
        console.log(err)   
    }
})
