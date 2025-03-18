let j = document.querySelector(".joke1")
let j1 = document.querySelector(".joke2")
let j2 = document.querySelector(".joke3")
let btn = document.querySelector(".btn")
let img = document.querySelector(".image")

async function getjoke(){

    // let url = await fetch("https://api.api-ninjas.com/v1/randomimage?category=nature")
    // let imgurl = await url.json();
    // console.log(imgurl)
    








    let joke =  await fetch("https://official-joke-api.appspot.com/random_joke")
    let data =  await joke.json();
    j.innerText = data.setup
    btn.setAttribute("style","display:none")
    console.log(data)
    j.prepend("Me :")
    setTimeout(() => {
        j1.innerText = "You  : Haaah..!?"
    }, 3000);
    setTimeout(() => {
        j2.innerText = data.punchline
        btn.setAttribute("style","display:flex")
        btn.innerText="Re-generate!"
    }, 4750)
    
}
btn.addEventListener("click",()=>{
    j1.innerText =""
    j2.innerText = ""
    j.innerText = ""
    getjoke();
})
