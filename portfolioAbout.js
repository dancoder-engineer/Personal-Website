const img = document.querySelector("#portImg")
let clickable = true


img.addEventListener("click", clickImg)
img.style.display = "block"


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

    let backTruth = (changableWidth >= backPositions.left && changableWidth <= backPositions.right && changableHeight >= backPositions.top && changableHeight <= backPositions.bottom)
  
    if(backTruth) { fadeToBack() }
 }



function fadeToBack() {
    
    let opacity = 100
    clickable = false

    setInterval(function () {

        opacity -= 5
        textOpacity = "0." + opacity
        img.style.opacity = textOpacity

        if (opacity === 5) { 
            img.style.visibility = "hidden"
            location.href = "coding-portfolio.html" 
        }

    },100)

}