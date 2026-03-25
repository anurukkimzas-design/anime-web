const list = document.getElementById("animeList")

animeData.forEach(anime=>{
list.innerHTML += `
<div class="card" onclick="openAnime(${anime.id})">
<img src="${anime.img}">
<div class="title">${anime.title}</div>
</div>
`
})

function openAnime(id){
window.location="anime.html?id="+id
}

const search = document.getElementById("search")

search.addEventListener("input",()=>{
const value = search.value.toLowerCase()

list.innerHTML=""

animeData
.filter(a=>a.title.toLowerCase().includes(value))
.forEach(anime=>{
list.innerHTML += `
<div class="card" onclick="openAnime(${anime.id})">
<img src="${anime.img}">
<div class="title">${anime.title}</div>
</div>
`
})
})
