const list = document.getElementById("list");

if(list){
animeData.forEach(a=>{
list.innerHTML+=`
<div class="card" onclick="openAnime(${a.id})">
<img src="${a.img}">
<h3>${a.title}</h3>
</div>
`;
});
}

function openAnime(id){
window.location="anime.html?id="+id;
}
