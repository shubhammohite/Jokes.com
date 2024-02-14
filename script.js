const jokeEl = document.getElementById('joke')
const jokeBtn=document.getElementById('jokebtn')
jokeBtn.addEventListener('click',GenerateJoke)
GenerateJoke()

function GenerateJoke() 
{
    const configuration = {
        headers: {
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',configuration).then(result =>
    result.json()).then((data) =>{
        jokeEl.innerHTML = data.joke
    })
}