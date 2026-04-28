function generateName(){
    //1. Get Input
    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    //2. Validation 
    if (day <1 || day >31){
        alert("Day must be between 1 and 31");
        return;
    }
    if( month <1 || month >12){
        alert("Months must be between 12 months")
    }
}
if(!gender){
    alert("Please select a gender");
    return;
}