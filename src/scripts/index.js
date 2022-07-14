// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import data from "./data.js"


const originalObject = JSON.parse(data)
console.log(originalObject)

// \/ All of your javascript should go here \/

for(let key in originalObject){
    console.log(key)
    let section = document.getElementById(key)
    originalObject[key].forEach(elem=>{
        let card = document.createElement("div")
        card.style.width="300px"
        card.style.padding="20px"
        card.style.boxShadow="2px 3px 5px gray"
        card.style.margin="10px"
        let title = document.createElement("h2")
        title.innerText=elem.title
        let img = document.createElement("img")
        img.src=elem.image
        img.width="250"
        img.height="250"
        let author = document.createElement("p")
        author.innerText= elem.author
        let ingredients= document.createElement("h3")
        ingredients.innerText= elem.ingredients.join(", ")


        card.append(title, img, author,ingredients)
        section.append(card)


    })


}




/* let array = ["naqvi","robert","loen"]
let obj = { name:"ali"}

console.log(JSON.parse(JSON.stringify(obj))) */