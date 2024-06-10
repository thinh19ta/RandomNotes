const q1Notes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Sib"]
const q2Notes = ["Do2", "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2", "Sib2"]
const q1q2Notes = [...q1Notes, ...q2Notes]

const displayArea = document.getElementById('display-area')
const allnotesArea = document.getElementById('allnotes-area')
const startBtn = document.getElementById('start-btn')
let intervalId

const getRandom = max => {
    return Math.floor(Math.random() * max);
}
let allNotes = "==> "

const beatIt = (notes) => {
    intervalId = setInterval(() => {
        var note = notes[getRandom(notes.length)]
        allNotes += note + " "
        displayArea.innerText = note
        allnotesArea.innerText = allNotes
    }, 2000)
}

startBtn.addEventListener("click", () => handleClick())

const handleClick = () => {
    if (startBtn.innerText == "Start") {
        startBtn.innerText = "Stop"
        beatIt(q1Notes)
    } else {
        startBtn.innerText = "Start"
        clearInterval(intervalId)
    }

}





