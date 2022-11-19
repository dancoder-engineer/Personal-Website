let desc = "./images/portfolioImages/jpnDescription.png"
let notes = "./images/portfolioImages/jpnNotes.png"
let img = document.querySelector("#portImg")
let navBar = document.querySelector("#navBar")
let video = document.querySelector("#portVideo")
let clickable = true

img.addEventListener("click", clickImg)
navBar.addEventListener("click", clickNavBar)


function clickNavBar(e) {

    if (!clickable) { return 0 }

    let xPos = e.offsetX

    let positions = {
        descLeft: 2/449,
        descRight: 126/449,
        notesLeft: 130/449,
        notesRight: 349/449,
        videoLeft: 352/449,
        videoRight: 446/449,
        topOfBar: 303/336,
        bottom: 336/336,
    }

    let changableWidth = xPos/e.target.clientWidth
    let descTruth = (changableWidth >= positions.descLeft && changableWidth <= positions.descRight)
    let notesTruth = (changableWidth >= positions.notesLeft && changableWidth <= positions.notesRight)
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
        else if (videoTruth) { showVideo() }
 

    

  //  console.log(xPos, yPos)
   

}

function clickImg(e) {
    if (!clickable) { return 0 }

    let xPos = e.offsetX
    let yPos = e.offsetY

    let changableWidth = xPos/e.target.clientWidth
    let changableHeight = yPos/e.target.clientHeight

    let positions = {
        backTop: 4/336,
        backBottom: 33/336,
        backLeft: 8/449,
        backRight: 42/449
    }

    let backTruth = (changableWidth >= positions.backLeft && changableWidth <= positions.backRight && changableHeight >= positions.backTop && changableHeight <= positions.backBottom)

    if(backTruth) { fadeToBack() }
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