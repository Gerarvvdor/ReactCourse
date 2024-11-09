const tecnologías = ['HTML','CSS','JavaScript','React','Node.js'];

tecnologías[5]="Python";        

for (let i = 0; i < tecnologías.length; i++) {
    console.log(tecnologías[i]);
}

let map = tecnologías.map((tecnología) => {
    return tecnología;
});


tecnologías.forEach((tecnología) => {
    console.log(tecnología);
})

for(let tech of tecnologías) {
    console.log(tech);
}   

