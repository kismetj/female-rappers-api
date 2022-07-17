const express = require('express')
const app = express()
const PORT = 8000
const cors = require ('cors')

app.use(cors())

const rappers = {
    'queen latifah':{
    'age': 52,  
    'birthDate': 'March 18 1970', 
    'birthName': 'Dana Elaine Owens',
    'birthLocation': 'Newark, NJ',
    'debutAlbum': 'All Hail The Queen',
    'debutRelease': 'November 28, 1989',
    'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/QueenLatifahAllHailtheQueen.jpg/220px-QueenLatifahAllHailtheQueen.jpg',
    'playlist':'https://open.spotify.com/playlist/37i9dQZF1DZ06evO39mt0c?si=6807b97d43464a3d',
        'Label': 'Tommy Boy'
    }, 
    'mc lyte':{
        'age':51,
        'birthDate': 'October 11, 1970', 
        'birthName': 'Lana Michele Moorer', 
        'birthLocation': 'New York City, US',
        'debutAlbum': 'Lyte as a Rock', 
        'debutRelease': 'May 1988',
    },
    'lil kim':{
        'age':47,
        'birthDate': 'July 11, 1974', 
        'birthName': 'Kimberly Denise Jones',
        'nickname': 'Queen Bee', 
        'birthLocation': 'Brooklyn, NY',
        'debutAlbum': 'Hard Core', 
        'debutRelease': 'November 12, 1996',
    },
        'missy elliott':{
        'age':50,
        'nickname': 'Misdemeanor',
        'birthDate': 'July 1, 1971', 
        'birthName': 'Melissa Arnette Elliott', 
        'birthLocation': 'Portsmouth, Virginia, U.S.',
        'debutAlbum': 'Supa Dupa Fly', 
        'debutRelease': 'July 15, 1997',
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

app.get('/api/:name',(request,response)=>{
    const rapperName =request.params.name.toLowerCase()

    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
})