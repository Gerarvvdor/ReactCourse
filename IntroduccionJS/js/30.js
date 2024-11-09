const heading = document.querySelector('.heading')


heading.addEventListener('click', () => {
    heading.textContent = "nuevo heading al dar click"
  })
heading.addEventListener('mouseenter', () => {
  heading.textContent = "nuevo heading al pasar encima"
})
heading.addEventListener('mouseleave', () => {
  heading.textContent = "nuevo heading al salir"
})

enlaces.forEach(enlace => {
  enlace.addEventListener('click',(e) =>
  {
    e.preventDefault()



    console.log(e.target)
  })  
});
