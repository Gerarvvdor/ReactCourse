//Manipular elementos de CSS con JavaScript
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = "Nuevo Heading"
heading.id = 'newId'

heading.removeAttribute('class')