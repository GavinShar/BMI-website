
function bmiCalc()
{
    //gets initial values from user
    let heightNum1 = 0;
    let heightNum2 = 0;
    let weightNum = 0;
    let bmiCat = "";

    heightNum1 = parseInt(document.getElementById("inchesNum").value);
    heightNum2 = parseInt(document.getElementById("feetNum").value);
    weightNum = parseInt(document.getElementById("weightNum").value);
    //checks if number is in range for height and weight
    if(heightNum1 < 0 || heightNum1 > 11 || heightNum2 > 9 || heightNum2 < 2)
    {
        document.getElementById("bmiNum").value = "Please enter valid height";
        return;
    }
    if(weightNum < 25 || weightNum > 1400)
    {
        document.getElementById("bmiNum").value = "Please enter valid weight";
        return;
    }
    let totalHeight;
    //convert values to metric
    totalHeight = (heightNum2 * 12) + heightNum1;
    //converts to meters
    totalHeight = totalHeight*0.025;
    //converts to kgs
    weightNum = weightNum*0.45;
    //checks if is correct number
    if(isNaN((weightNum/(totalHeight ** 2))))
    {
        document.getElementById("bmiNum").value = "Error: Please try again";
        document.getElementById("bmiCat").value = "";
        return;
    }
    //calculates bmi and displays to user
    document.getElementById("bmiNum").value = (weightNum/(totalHeight ** 2));
    if((weightNum/(totalHeight ** 2)) >= 30)
    {
        //output obese
        document.getElementById("bmiCat").value = "Obese";
        return;
    }
    else if((weightNum/(totalHeight ** 2)) >= 25)
    {
        //output overweight
        document.getElementById("bmiCat").value = "Overweight";
        return;
    }
    else if((weightNum/(totalHeight ** 2)) >= 18.5)
    {
        //output normal weight
        document.getElementById("bmiCat").value = "Normal Weight";
        return;
    }
    else
    {
        //output underweight
        document.getElementById("bmiCat").value = "Underweight";
        return;
    }
}


