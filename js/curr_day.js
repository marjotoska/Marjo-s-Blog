 // Change date to curr_day (place "date" on html)
 n =  new Date();
 d = n.getDate();
 m = n.getMonth() + 1;
 y = n.getFullYear();

 switch(m){
     case 1:
         m = "January";
         break;
     case 2:
         m = "February";
         break;
     case 3:
         m = "March";
         break;
     case 4:
         m = "April";
         break;
     case 5:
         m = "May";
         break;
     case 6:
         m = "June";
         break;
     case 7:
         m = "July";
         break;
     case 8:
         m = "August";
         break;
     case 9:
         m = "September";
         break;
     case 10:
         m = "October";
         break;
     case 11:
         m = "November";
         break;
     case 12:
         m = "December";
         break;
 }

document.getElementById("date").innerHTML = d + " " + m + " " + y;

var items = document.getElementsByClassName("date-class"),
    i, len;

// loop through all elements having class name ".date-class"
for (i = 0, len = items.length; i < len; i++) {
    items[i].innerHTML = d - 1 + " " + m + " " + y;
}
 