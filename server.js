const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'queen latifah':{
    'age': 52,  
    'birthDate': 'March 18 1970', 
    'birthName': 'Dana Elaine Owens',
    'birthLocation': 'Newark, NJ',
    'debutAlbum': 'All Hail The Queen',
    'debutRelease': 'November 28, 1989',
    }, 
    'mc lyte':{
        'age':51,
        'birthDate': 'October 11, 1970', 
        'birthName': 'Lana Michele Moorer', 
        'birthLocation': 'New York City',
        'debutAlbum': 'Lyte as a Rock', 
        'debutRelease': 'May 1988',
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthDate': 'unknown',
        'birthLocation': 'unknown',
        'debutAlbum': 'unknown',
        'debutRelease': 'unknown',
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName =request.params.name.toLowerCase()

    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})