const panels = document.querySelectorAll('.panel');

panels.forEach((p)=>{
  p.addEventListener("click", ()=>{
    panels.forEach((item)=>{
      item.classList.remove("active");
    })
    p.classList.add("active");
  })
})
