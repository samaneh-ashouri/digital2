


let section = document.querySelector("section");
let icons = document.querySelector(".icons");


icons.onclick = ()=>{
    section.classList.toggle("dark");
}


setInterval(()=>{

    let date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    console.log(hour);

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = minutes;
    document.querySelector(".sec_num").innerText = seconds;


},1000);
