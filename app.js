window.onload = function () {
    const mainContainer = document.querySelector(".maincontainer")
    const smallCircle = document.querySelector(".small-circle")
    const locker = document.querySelector(".lock-holder")
    const container = document.querySelector(".container-circle")
    var rotate = 0
    var deg = 0
    var click = 0
    var score = 0
    var timer = null
    const passcodeCode = document.querySelector(".passcode")
    let passwordCounter = 0
    let nextlevel = 1
    const _negative=document.querySelector("._rotate-negative")
    const hint=document.querySelector(".hint-code")
    const angles = [
        0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360
    ]
   
    var password =   password = angles.map(x=>{
        return Math.floor(Math.random()*12)
    }).slice(0,4)
    hint.innerHTML=password
    resetGame()

    function game() {
        if (click++ % 2) {
            check(rotate)
            resetGame()
        } else {
            timer = setInterval(() => {
                scrolling.play()
                smallCircle.style.transform = `rotate(${deg}deg)`
                _negative.style.transform = `rotate(${-2*(1+passwordCounter)*deg}deg)`
                deg += 1
                --rotate;
                if (rotate < -18) {
                    resetGame()
                    document.getElementById("score").textContent = score = 0
                    ++click
                    passwordCounter = 0
                    passcodeCode.textContent=""

                }
            }, 10)
        }
    }
    mainContainer.addEventListener("click", function (e) {
        game()

    })
    window.addEventListener("keyup", (e) => {
        if (e.key == " ") game()
    })
    console.log( angles.map(x=>{
        return Math.floor(Math.random()*12)
    }).slice(0,4))
    function check(rotate) {
        if ((rotate) <= 1 && rotate >= -18) {
            score+=nextlevel*2
            document.getElementById("score").textContent = score
        passcodeCode.textContent+=password[passwordCounter]+","
        if(passwordCounter<
            3){
            success.play()
        }
        setTimeout(()=>{
            success.load()
        },1000)
        passwordCounter += 1
        if (passwordCounter > 3) {
            locker.classList.add("slide")
            padlocksound.play()
            setTimeout(() => {
                locker.classList.remove("slide")

            }, 3000);
            passwordCounter = 0
            passcodeCode.textContent=""
            ++nextlevel
            hint.innerHTML=password = angles.map(x=>{
                return Math.floor(Math.random()*12)
            }).slice(0,4)
   
           
        }

        }
        else {
            document.getElementById("score").textContent = score = 0
            passwordCounter = 0
            passcodeCode.textContent=""
        }
    }

    function resetGame() {
        scrolling.load()
        clearInterval(timer)
        rotate = angles[password[passwordCounter]]
     
        _negative.textContent=password[passwordCounter]

        if (rotate >= 360) rotate = 330
        container.style.transform = `rotate(${rotate}deg)`
        deg = -rotate;
        smallCircle.style.transform = `rotate(${deg}deg)`
    }
}