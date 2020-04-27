const app=document.getElementById('root')



const container=document.createElement('div')
container.setAttribute('class','container')

app.appendChild(container)



// create  a request variable and  assign  a new XMLHttpRequest object to it.

var request=new XMLHttpRequest()


// Open a new connection , using the GET request on the URL endpoint
request.open('GET','https://api.covid19api.com/summary ',true)

request.onload=function(){
    // begin accessig JSON data here
   
     var data =JSON.parse(this.response)

     var countries=data.Countries

    //logic of the program
     if (request.status>=200 && request.status< 400){
            for(var i=0;i<247;i++){
                console.log(countries[i].Country)

                const card=document.createElement('div')
                card.setAttribute('class','card')

                const h1=document.createElement('h1')
                h1.setAttribute('class','heading')
                h1.textContent=countries[i].Country

                const info=document.createElement('div')
                info.setAttribute('class','info')

                const newcofirmed=document.createElement('p')
                newcofirmed.textContent="new confirmed: "+countries[i].NewConfirmed

                const totalcofirmed=document.createElement('p')
                totalcofirmed.textContent="total confirmed: "+countries[i].TotalConfirmed

                const newdeaths=document.createElement('p')
                newdeaths.textContent="new deaths: "+countries[i].NewDeaths

                const totaldeaths=document.createElement('p')
                totaldeaths.textContent="total deaths: "+countries[i].TotalDeaths

                const newrecovery=document.createElement('p')
                newrecovery.textContent="New Recoveries: "+countries[i].NewRecovered

                const totalrecovered=document.createElement('p')
                totalrecovered.textContent="total recovered: "+countries[i].TotalRecovered

                const lastupdated=document.createElement('h5')
                lastupdated.textContent="last updated at: "+countries[i].Date



                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(info)
                info.appendChild(newcofirmed)
                info.appendChild(totalcofirmed)
                info.appendChild(newdeaths)
                info.appendChild(totaldeaths)
                info.appendChild(newrecovery)
                info.appendChild(totalrecovered)
                info.appendChild(lastupdated)
                
            }
     }

   
    






    
    
    

}
 // send request
request.send()
