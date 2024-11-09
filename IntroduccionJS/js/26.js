// Fetch api con Async

const url = "https://jsonplaceholder.typicode.com/comments"


/*fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json()
            }
            throw new Error('Error al consultar la API')
        })
        .then(data=> console.log(data))
        .catch(error => console.log(error))*/


const consultarAPI = async() =>{
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Error al consultar la API')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI()