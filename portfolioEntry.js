const img = document.querySelector("#portImg")
const navBar = document.querySelector("#navBar")
const video = document.querySelector("#portVideo")
const foodSite = "https://foodbook-awo0.onrender.com/"
let clickable = true
let desc = null
let notes = null
let repo = null

img.addEventListener("click", clickImg)
navBar.addEventListener("click", clickNavBar)
img.style.display = "block"


if (window.location.href.includes("Japanese")) {
    desc = "./images/portfolioImages/jpnDescription.png"
    notes = "./images/portfolioImages/jpnNotes.png"
    repo = "https://github.com/dancoder-engineer/JapaneseThroughRetroGaming"
    video.src="https://www.youtube.com/embed/BOhMCx3oDoE"
}
else if (window.location.href.includes("Vitamin")) {
    desc = "./images/portfolioImages/vitaminDescription.png"
    notes = "./images/portfolioImages/vitaminNotes.png"
    repo = "https://github.com/dancoder-engineer/vitamin-store"
    video.src="https://www.youtube.com/embed/x4r2xZQRZBE"
}
else if (window.location.href.includes("Food")) {
    desc = "./images/portfolioImages/foodDescription.png"
    notes = "./images/portfolioImages/foodNotes.png"
    repo = "https://github.com/dancoder-engineer/FoodPics"
    video.src="https://www.youtube.com/embed/fkmKXidnFMc"
}

function clickNavBar(e) {

    if (!clickable) { return 0 }

    let xPos = e.offsetX

    let positions = {
        descLeft: 2/449,
        descRight: 126/449,
        notesLeft: 130/449,
        notesRight: 284/449,
        repoLeft: 287/449,
        repoRight: 374/449,
        videoLeft: 377/449,
        videoRight: 446/449,
        topOfBar: 303/336,
        bottom: 336/336,
    }

    let changableWidth = xPos/e.target.clientWidth

    let descTruth = (changableWidth >= positions.descLeft && changableWidth <= positions.descRight)
    let notesTruth = (changableWidth >= positions.notesLeft && changableWidth <= positions.notesRight)
    let repoTruth = (changableWidth >= positions.repoLeft && changableWidth <= positions.repoRight)
    let videoTruth = (changableWidth >= positions.videoLeft && changableWidth <= positions.videoRight)


        if(descTruth) { 
            img.style.display = "block"
            video.style.display = "none"
            img.src = desc
        }
        else if (notesTruth) { 
            img.style.display = "block"
            video.style.display = "none"
            img.src = notes
        }
        else if (repoTruth) { location.href = repo }
        else if (videoTruth) { showVideo() }
 
}

function clickImg(e) {
    if (!clickable) { return 0 }

    let xPos = e.offsetX
    let yPos = e.offsetY

    let changableWidth = xPos/e.target.clientWidth
    let changableHeight = yPos/e.target.clientHeight

    let backPositions = {
        top: 4/336,
        bottom: 33/336,
        left: 8/449,
        right: 42/449
    }

    let sitePositions = {
        top: 259/297,
        bottom: 291/297,
        left: 5/446,
        right: 114/446
    }

    let backTruth = (changableWidth >= backPositions.left && changableWidth <= backPositions.right && changableHeight >= backPositions.top && changableHeight <= backPositions.bottom)
    let siteTruth = (changableWidth >= sitePositions.left && changableWidth <= sitePositions.right && changableHeight >= sitePositions.top && changableHeight <= sitePositions.bottom)

    if(backTruth) { fadeToBack() }
    else if (window.location.href.includes("Food") && siteTruth) { location.href = foodSite }
}

function showVideo() { 
    if (img.style.display === "block") {
        img.style.display = "none";
        video.style.display = "block";
    }
}

function fadeToBack() {
    
    let opacity = 100
    clickable = false

    setInterval(function () {

        opacity -= 5
        textOpacity = "0." + opacity
        img.style.opacity = textOpacity
        navBar.style.opacity = textOpacity

        if (opacity === 5) { 
            img.style.visibility = "hidden"
            navBar.style.visibility = "hidden"
            location.href = "coding-portfolio.html" 
        }

    },100)

}