// Write your code here!

document.getElementById('main').remove()

// function newHeader(){
let newHeader = document.createElement('h1')
const body = document.querySelector('body')
body.prepend(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "JC is the champion"
// }
// newHeader()


// h1.id = 'victory'




//the differnce between text content and innertext