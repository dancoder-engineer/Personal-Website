

document.addEventListener("DOMContentLoaded", init)

let mainImg = document.querySelector("img")
let frontImg = 0
mainImg.addEventListener("click", clickImg)

let clickable = true

function init() {
    return 0
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

    let aboutPositions = {
        top: 240/336,
        bottom: 302/336,
        left: 36/447,
        right: 153/447
    }

    console.log(xPos, yPos)

    
   

    let changableWidth = xPos/e.target.clientWidth
    let changableHeight = yPos/e.target.clientHeight
    let rightHeight = (changableHeight >= positions.top && changableHeight <= positions.folderBottom)
    let jpnTruth = (changableWidth >= positions.jpnLeft && changableWidth <= positions.jpnRight)
    let vitaminTruth = (changableWidth >= positions.vitaminLeft && changableWidth <= positions.vitaminRight)
    let foodTruth = (changableWidth >= positions.foodLeft && changableWidth <= positions.foodRight)
    let aboutTruth = (changableWidth >= aboutPositions.left && changableWidth <= aboutPositions.right && changableHeight >= aboutPositions.top && changableHeight <= aboutPositions.bottom)
  
    if(rightHeight) { 
        if(jpnTruth) { fadeImg("./portfolioJapanese.html") }
        else if (vitaminTruth) { fadeImg("./portfolioVitamins.html") }
        else if (foodTruth) { fadeImg("./portfolioFood.html") }
    }
    else if (aboutTruth) { fadeImg("./portfolioAbout.html") }
    
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