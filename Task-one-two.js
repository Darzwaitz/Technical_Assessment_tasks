// task 1

document.getElementById("price-options--renewal").addEventListener("click", addCookie);

    function addCookie() {

    //get phone name
    let nameDiv = document.getElementsByClassName("device-config__device-name"); //div containing H1 element
    let name = nameDiv["0"].childNodes[1].innerHTML;    // name from H1 : "iPhone 8" 

    //get phone price
    let priceOptionSelected = (this).querySelectorAll(".choice--active");
    let price = priceOptionSelected["0"].dataset.price; //price : "430" - when hard coded

    //set cookie
    document.cookie = name + "=" + price + ";expires=Wed, 31 Oct 2018 01:00:00 UTC;"; 
    
};

//Task 2
// IIFE that will run on pageload and print the current cookies as an array to the console
(function printCookies(){

    let currentCookies = document.cookie;
    let cookieArray = currentCookies.split("; ");
    console.log(cookieArray);
    
})();
  