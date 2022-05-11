var foodprice = document.querySelectorAll('.foodprice')
var foodname = document.querySelectorAll('.foodname')
var lambda = document.querySelectorAll('.lambda')
var quantity = document.querySelectorAll('.quantity')
var quantity_plus = document.querySelectorAll('.quantity_plus')
var display_quantity = document.querySelectorAll('.display_quantity')
var quantity_minus = document.querySelectorAll('.quantity_minus')
var view_cart = document.querySelector('view_cart')
var incrementDecrement;
var store = 0;

const packageName = require('../');

// console.log(quantity);
var display_quantity = Array.from(display_quantity)
var quantity_plus = Array.from(quantity_plus)

for (let i = 0; i < quantity_plus.length; i++) {

    quantity_plus[i].addEventListener('click', () => {
        console.log(quantity_plus[i].dataset.Result);

        quantity_minus[i].style.color = "blue";
        store = display_quantity[i].ariaValueNow++;
        localStorage.setItem(`cart${i}`, store);
        display_quantity[i].innerHTML = localStorage.getItem(`cart${i}`);
    });
    quantity_minus[i].addEventListener('click', () => {
        var getItem = localStorage.getItem(`cart${i}`);
        if (getItem > 0) {
            --getItem;
            localStorage.setItem(`cart${i}`, getItem);
            display_quantity[i].innerHTML = localStorage.getItem(`cart${i}`);
            if (getItem == 0) {
                quantity_minus[i].style.color = "red";
                display_quantity[i].ariaValueNow = 1;
            } else {
                quantity_minus[i].style.color = "blue";
                display_quantity[i].ariaValueNow = getItem;
            }
        };
    });
};

// clean = () => {

// var foodprice1 = document.querySelector('.foodprice1')
// var foodname1 = document.querySelector('.foodname1')

// for (let i = 0; i < quantity_plus.length; i++) {
// console.log(foodprice[1].innerHTML);

// foodprice1.innerHTML = foodprice[1].innerHTML;
// foodname1.innerHTML = foodname[1].innerHTML;
// };


// localStorage.clear();
// window.location.reload();
// window.location.href = 'cart'
// }
// view_cart.addEventListener('onclick', () => {
// });


// if (localStorage.length > 0) {
//     // view_cart.addEventListener('click', () => {
//     localStorage.clear;
//     // });
// }
module.exports = incrementDecrement;