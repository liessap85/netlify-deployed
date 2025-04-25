// Initially this code was inbetween the <script> tags in the html file, but much better to separate into another and use this file as src.
// document.getElementById("count-el").innerText = 7

let count = 0

// Initialise html element
let countEl = document.getElementById("count-el")

// // how to display something in the terminal
// console.log(count)


// initialise count as 0
//listen for clicks on increment button and add to count variable
//change count-el in html to reflect count value

function increment() {
    count += 1
    countEl.innerText = count    //.innerText will affect the text between html elements <h2> < p> etc
    console.log(count)
}

let saveEl = document.getElementById("save-el")
let saveClick = false
let runningTotal = 0

let dailyTotal = document.getElementById("passengers")

function save() {
    if (!saveClick) {
        saveEl.innerText += ` ${count}`
        saveClick = true
    }
    else {
        saveEl.innerText += ` - ${count}`
    }
    console.log(count)
    runningTotal += count
    // To amend just PART of a line we can use the <span> in the HTML and innerHTML in the js
    dailyTotal.innerHTML = runningTotal
    count = 0
    countEl.innerText = count
}


// could also use mozilla dev network saveEl.textContent to show hiden elements like spaces (innerText will trim these!)

