const input = document.querySelector('#inp');
const items = document.querySelector('.items');
const submit = document.querySelector('#submit');

input.addEventListener('keydown',(e)=>{
    if(e.key==="Enter" && input.value!==''){
        add(input.value);
    }
});

submit.addEventListener('click',(e)=>{
    if(input.value!==''){
        add(input.value);
    }
});

function add(x){
    const item = document.createElement("div");
    item.classList.add("item");

    const text =  document.createElement("div");
    text.innerText=x;

    const icons =  document.createElement("div");

    const trash = document.createElement("i");
    trash.className = "fa-solid fa-trash";
    trash.addEventListener("click",()=>{
        item.remove();
    })
    
    const tick = document.createElement("i");
    tick.className = "fa-solid fa-circle-check";
    tick.style.color = "lightgrey";
    tick.addEventListener("click", () => {
        tick.style.color = "limegreen";
      })
    
      icons.appendChild(tick);
    icons.appendChild(trash);
    

    item.appendChild(text);
    item.appendChild(icons);

    items.appendChild(item);

    input.value = '';

}