const getPuzzle =() =>new Promise((resolve,reject)=>{
   
    const request =new XMLHttpRequest()
        request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState ===4 && e.target.status === 200){
                console.log(e.target.responseText) 
                
                const data =JSON.parse(e.target.responseText)
                resolve(data.puzzle)
            }else if(e.target.readyState ===4){
                reject('error tacken place')    
            }
        })
    request.open('GET','http://puzzle.mead.io/puzzle')
    request.send()
    
})
const getCountryDetails = (countryCode)=> new Promise((resolve,reject)=>{

    const countryrequest =new XMLHttpRequest()
    countryrequest.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState ===4 && e.target.status === 200){
            //console.log(e.target.responseText) 
            const data =JSON.parse(e.target.responseText)
            const country = data.find((country) => country.cca2 === countryCode)
            resolve(country)
           // console.log(country.name.common)
        }else if(e.target.readyState ===4){
            reject('error')
        }
    })

countryrequest.open('GET','https://restcountries.com/v3.1/all')
countryrequest.send()
})
    

fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response=>{
    if(response.status=200){
        return response.json()
    }else{
        throw new Error('unale to fetch puzzle')
    }

    }))