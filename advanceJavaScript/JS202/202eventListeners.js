document.getElementById("calc-btn").addEventListener("click", function(){
    let firstInput = document.getElementById("first-input").value
    let secondInput = document.getElementById("second-input").value
    // agood programming practice is to seperate functions into individual 
    // functions each with a specific task and this is called single 
    // responsibility principle

    try {
        let result = divide(Number(firstInput), Number(secondInput))
        // console.log("hello")
        // console.log("hi")
        // console.log("welcome")
        document.getElementById("result").innerHTML = result
    }
    catch (error) {
        alert("Error: "+ error)
        // console.log(error)
    }

    // if(result != "ان كنون يابقرة ايشو هذا الجنان ايشو هذا الخبر حقك الخشرفة"){
    //     document.getElementById("result").innerHTML = result
    // }
    

})