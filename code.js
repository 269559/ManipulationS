// 1-Decision Making (if-else & switch): 

// Ticket Pricing's function using switch:
function pricing(age) {
    let price;
    switch (True) {
        case (age <= 12):
        price= $10;
            break;
        case (age >= 13 && age <= 17):
        price= $15;
            break;
        case (age >= 18):
        price= $20;
            break;
}
}


 // Function to set description according to the temperature status, using(if-else):
 function clothingAdvice(temp, isRaining) {
    let description;

    if (temp <= 0) {
        description = "Bundle up, it's freezing cold!";
        return description + " Wear a heavy coat, gloves, and a hat.";
    } else if (temp < 10) {
        description = "Chilly weather ahead!";
        return description + " Wear a warm jacket and a scarf.";
    } else if (temp < 20) {
        description = "Cool weather, perfect for a stroll.";
        return description + " Wear a light jacket or sweater.";
    } else if (temp < 30) {
        description = "Warm and pleasant day!";
        return description + " Wear light clothing.";
    } else {
        description = "Hot day ahead, stay hydrated!";
        return description + " Wear light and breathable clothing.";
    }

    if (isRaining) {
        return "Don't forget to bring an umbrella!";
    } else {
        return "No need for an umbrella today.";
    }
}


//2-Recursion way:

//Fibonacci Sequence:
function fibbonacci(n) {
if(n=0) {
    return 0;
}else if (n=1) { 
    return 1 ;
}else{
    return fibbonacci(n-1) + fibbonacci(n-2);
}
}
//Palindrome Checker:
function palindrome(str) {
    let check = "";

    for (let i = str.length - 1; i >= 0; i--) {
        check += str[i];
    }

    if (check === str) {
        return true;
    } else {
        return false;
    }
}
