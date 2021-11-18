// created variables for current date and to be displayed onto page
n = new Date();
y = n.getFullYear();
m = n.getMonth()+1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
