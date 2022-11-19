

document.addEventListener("DOMContentLoaded", init)

let mainImg = document.querySelector("#portImg")
mainImg.addEventListener("click", clickImg)

let clickable = true

function init() {
    console.log("init")
}

function clickImg(e) {

    if (!clickable) { return 0 }

    let xPos = e.offsetX
    let yPos = e.offsetY
    
    let positions = {
        jpnLeft: 3/447,
        jpnRight: 137/447,
        vitaminLeft: 155/447,
        vitaminRight: 319/447,
        foodLeft: 334/447,
        foodRight: 434/447,
        top: 0,
        folderBottom: 52/336
    }

    let changableWidth = xPos/e.target.clientWidth
    let changableHeight = yPos/e.target.clientHeight
    let rightHeight = (changableHeight >= positions.top && changableHeight <= positions.folderBottom)
    let jpnTruth = (changableWidth >= positions.jpnLeft && changableWidth <= positions.jpnRight)
    let vitaminTruth = (changableWidth >= positions.vitaminLeft && changableWidth <= positions.vitaminRight)
    let foodTruth = (changableWidth >= positions.foodLeft && changableWidth <= positions.foodRight)
     
    if(rightHeight) { 
        if(jpnTruth) { fadeImg("./portfolioJapanese.html") }
        else if (vitaminTruth) { fadeImg("./portfolioVitamins.html") }
        else if (foodTruth) { fadeImg("./portfolioFood.html") }
    }
    
}

function fadeImg(url) {
    let opacity = 100
    clickable = false

    setInterval(function () {

        opacity -= 5
        textOpacity = "0." + opacity
        mainImg.style.opacity = textOpacity

        if (opacity === 5) { 
            mainImg.style.visibility = "hidden"
            location.href = url 
        }

    },100)
   
//    
}


// else if (foodTruth) { location.href = "https://foodbook-awo0.onrender.com/" }