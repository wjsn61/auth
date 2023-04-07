const auth = () => {
    const k = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = k
    document.getElementById("token").style.color = "#" + k
}

let time = 10
setInterval(function () {
    if (time >= 0) {
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0")
        time = time - 1
        document.getElementById("timer").innerText = min + ":" + sec

    } else {
        document.getElementById("finish").disabled = true

    }
}, 1000)
