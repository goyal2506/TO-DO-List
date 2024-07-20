let inp =document.querySelector("input");
let btn =document.querySelector(".add");
let ul =document.querySelector("ul");

btn.addEventListener("click" ,function(){
  let list = document.createElement("li");
  if(inp.value===""){
    alert("empty value")
  }else{
  list.innerText=inp.value;
  ul.appendChild(list);}
  inp.value="";
  let dlbt = document.createElement("button");
  dlbt.innerHTML='<i class="fa-solid fa-trash"></i>'
  dlbt.style.backgroundColor="transparent";
  dlbt.style.border="none"
  dlbt.style.color="white";
  dlbt.style.cursor="pointer";
  list.appendChild(dlbt);

  dlbt.addEventListener("click", function(){
    let par = dlbt.parentElement;
    par.remove();
  })
})