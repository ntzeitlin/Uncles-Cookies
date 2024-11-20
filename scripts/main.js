// Import necessary functions

import { generateCookieHTML } from "./cookies.js";
import { getCookieData, getIcecreamData } from "./database.js";
import { generateIcecreamHTML } from "./iceCream.js";

// Assign copies of database arrays to variables
const cookieData = getCookieData()
const icecreamData = getIcecreamData()


// send database arrays to html generator
const cookieHTML = generateCookieHTML(cookieData)
const icecreamHTML = generateIcecreamHTML(icecreamData)

// push html to DOM

const cookieElement = document.querySelector("#cookie-container")
const icecreamElement = document.querySelector("#icecream-container")

cookieElement.innerHTML = cookieHTML
icecreamElement.innerHTML = icecreamHTML