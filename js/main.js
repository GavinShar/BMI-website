
function bmiCalc()
{
    //gets initial values from user
    let heightNum1 = 0;
    let heightNum2 = 0;
    let weightNum = 0;
    try{
        heightNum1 = parseInt(document.getElementById("inchesNum").value);
        heightNum2 = parseInt(document.getElementById("feetNum").value);
        weightNum = parseInt(document.getElementById("weightNum").value);
    } catch (TypeError) {
        console.debug("Error: TypeError");
    }
    
    let totalHeight;
    //convert values to metric
    totalHeight = (heightNum2 * 12) + heightNum1;
    //converts to meters
    totalHeight = totalHeight*0.025;
    //converts to kgs
    weightNum = weightNum*0.45;
    //calculates bmi and displays to user
    document.getElementById("bmiNum").value = (weightNum/(totalHeight ** 2));
}


