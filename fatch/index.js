function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {
    console.log(data);
    //console.log(data.city);

    //Getting the min and max values for each day
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        
    }
 
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //Getting the wind values for each day
 for(i = 0; i<7; i++){
    document.getElementById("day" + (i+1) + "wind").innerHTML = "wind: " + Number(data.list[i].wind.speed).toFixed(1);
    
}
   //Getting the sun-rise values for each day
//    for(i = 0; i<7; i++){
//     document.getElementById("day" + (i+1) + "sun-rise").innerHTML = "sun-rise: " + Number(data.list[i].city.sunrise).toFixed(1);
    
// }
//    //Getting the sunset values for each day
//    for(i = 0; i<7; i++){
//     document.getElementById("day" + (i+1) + "sunset").innerHTML = "sunset: " + Number(data.list[i].city.sunset).toFixed(1);
    
// }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<7; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Please provide correct information/Check your internet connection"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Delhi";
    GetInfo();
}


//Getting and displaying the text for the upcoming Seven days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay()-7;
     }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    //------------------------------------------------------------


