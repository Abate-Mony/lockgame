const btn=document.getElementById("btn--modal")
const modal=document.getElementById("modal")
const hintbox=document.querySelector(".hint-box")
btn.onclick=function(e){
modal.style.display="none"
e.stopPropagation()

}
modal.addEventListener("click",(e)=>{
    hintbox.classList.add("shake")
    setTimeout(()=>{
    hintbox.classList.remove("shake")
    },500)
e.stopPropagation()
})