// input btn for clear statement 
document.getElementById("clearInputBtn").onclick = function(){
    document.getElementById("input-box").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutputBtn").onclick = function(){
    document.getElementById("output-box").innerHTML = " "
}

// concatenation 
document.getElementById("concatenation").onclick = function () {

    let message = "Any type of text in this String"
    let userName = "MUHAMMAD HASSAAN LATIF"
    let sum = (message + " " + userName)
    document.getElementById("input-box").innerHTML = '<p>"Any type of text in this String" + "MUHAMMAD HASSAAN LATIF"</p>'
    document.getElementById("output-box").innerHTML = sum;
}

// ask name from user 
document.getElementById("askName").onclick = function(){
    let firstName = prompt("Please enter your First Name")
    let lastName = prompt("Please enter your Last Name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("input-box").innerHTML = `First Name = ${firstName} <br> Last Name = ${lastName} <br> Full Name = First Name + Last Name`
    document.getElementById("output-box").innerHTML = `Full Name = ${fullName}`
}

// comparison operator 
document.getElementById("comparisonOperator").onclick = function (){

    let num1 = +prompt("Please enter First Number")
    let num2 = +prompt("Please enter Second Number")
    if (num1 === num2){
        document.getElementById("input-box").innerHTML = "Num1 == Num2"
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Condition is True &#128522;<span/>"
    }
    else {
        document.getElementById("input-box").innerHTML = "num1 !== num2"
        document.getElementById("output-box").innerHTML = "<span class='text-danger'>Condition is False &#128554;</span."
    }
}

// if else if
document.getElementById("ifElseIf").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let marks = +prompt("Please enter your marks")
    if (marks >= 90){
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! You got A+ Grade.</span> "
    }
    else if (marks >=80){
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! You got A Grade.</span>"
    }
    else if (marks >=70){
        document.getElementById("output-box").innerHTML = "<span class='text-warning'>You got B Grade.</span>"
    }
    else {
        document.getElementById("output-box").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
    }
}


// sets of conditions 
document.getElementById("setsOfConditions").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let age = prompt("Please enter your age")
    let weight = prompt("Please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output-box").innerHTML = "You are a baby."
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output-box").innerHTML = "You are teenager and healthy."
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("output-box").innerHTML = "You are a youngman and healthy."
    }
    else {
        document.getElementById("output-box").innerHTML = "You are a Senior Citizen and fatty."
    }

}

// if statement nested 
document.getElementById("ifStatementNested").onclick = function(){
    let userName = prompt("Please enter User Name")
    if(userName === "Muhammad Hassaan Latif"){
        let password = prompt("Please enter password")
        if(password == 123){
            document.getElementById("output-box").innerHTML = "<span style='color:green; text-transform:capitalize;'>You are successfully logged in.</span>"
        }
        else{
            document.getElementById("output-box").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> Correct password is <span class='text-success'>123</span>.`
        }
    }
    else{
        document.getElementById("output-box").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect User Name. <br> Correct User Name is <span class='text-success'> "Muhammad Hassaan Latif"</span>.`
    }
}


// login 
document.getElementById("login").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let userName = prompt("Please enter User Name")
    let passWord = +prompt("Please enter password")
    if (userName === "Muhammad Hassaan Latif" && passWord === 123 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output-box").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in.</span>`
    }
    else {
        document.getElementById("output-box").innerHTML = `Try using <span class='text-success'> "Muhammad Hassaan Latif"</span> as a User Name and <span class='text-success'> "123"</span> as a password.`
    }

}