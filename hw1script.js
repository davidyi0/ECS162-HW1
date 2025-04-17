function getTodaysDate(){
    date = new Date();
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[date.getMonth()];
    day = date.getDate();
    year = date.getFullYear();
    document.getElementById("date").innerHTML = `<strong>${month} ${day}, ${year}<strong>`;
}
getTodaysDate();
console.log("test");