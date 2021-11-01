const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})
getPuzzle('2').then((puzzle)=>{
    console.log(puzzle)
},(err)=>{
    console.log(`error:${err}`)
})

getCountryDetails("EG").then((country)=>{
    console.log(country.name)
},(error)=>{
    console.log(`Error: ${error}`)
})

// const request =new XMLHttpRequest()
// request.addEventListener('readystatechange',(e)=>{
//     if(e.target.readyState ===4 && e.target.status === 200){
//        console.log(e.target.responseText) 
//         const data =JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if(e.target.readyState ===4){
//         console.log('bad request')
//     }
// })

