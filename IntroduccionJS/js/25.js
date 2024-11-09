// Fetch api con promises

const url = "https://jsonplaceholder.typicode.com/comments"

fetch(url)
    .then((response) =>{
        if(response.ok){
            return response.json()
        }
        throw new Error('Request failed')
    })
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error.mesaage)
    })