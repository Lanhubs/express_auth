const form = document.querySelector("form")
const url = "http://localhost:4000/login"

const emailError = document.querySelector(".emailError")
const pwdError = document.querySelector(".pwdError")
emailError.style.color = "red"
pwdError.style.color = "red"
console.log(window.location)

form.addEventListener("submit", async (e)=>{
    e.preventDefault()     
    emailError.textContent = ''
    pwdError.textContent = ''
    // form input elements
    
    
     try {
        
       
        
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        

        if(password.length < 6){
            pwdError.textContent = "password length should be at least 6"
        }
        if(password == ""){
            pwdError.textContent == "password is compulsory"
        }
        
        const Data = { email, password}
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()                  
                if(data){
                    window.location.assign("/")
                    console.log(data.id)
                }
        

    } catch (err) {
        console.log(err)   
    } 
})
