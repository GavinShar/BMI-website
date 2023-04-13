
function bmiCalc()
{
    //gets initial values from user
    let heightNum1 = parseInt(document.getElementById("inchesNum").value);
    let heightNum2 = parseInt(document.getElementById("feetNum").value);
    let weightNum = parseInt(document.getElementById("weightNum").value);
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


