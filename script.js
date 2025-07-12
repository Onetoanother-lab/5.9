let nam = prompt("Ismingiz nima?");
let age = prompt("Yoshingiz nechida?");
let job = prompt("Kasbingiz nima?");

document.querySelector(".wrapper").innerHTML = `
    <h1>Ism ${nam}!</h1>
    <p>Yosh: ${age}</p> 
    <p class ="child">Kasb: ${job}</p>
    `
document.querySelector("h1").style.color = `red`
document.querySelector("p").style.color = `blue`
document.querySelector(".child").style.color = `green`
