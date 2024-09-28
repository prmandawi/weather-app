const getDataForm = document.getElementById('getData')
const temp = document.getElementById('temp')
const IsDayOrNight = document.getElementById('IsDayOrNight')
const informationDiv = document.getElementById('information')
const latitudeInput = document.getElementById('lat')
const longitudeInput = document.getElementById('long')


// Create Elements
const latitude = document.createElement('p')
const longitude = document.createElement('p')
const apparentTemp = document.createElement('p')
const wind = document.createElement('p')
const rain = document.createElement('p')

// apend elements
informationDiv.appendChild(latitude)
informationDiv.appendChild(longitude)
informationDiv.appendChild(apparentTemp)
informationDiv.appendChild(wind)
informationDiv.appendChild(rain)


getDataForm.addEventListener("submit", async(e)=>{

  e.preventDefault()

  let lat = latitudeInput.value
  let long = longitudeInput.value
  const weatherData = await getWeatherData(lat,long)

// update innerText

  let dayOrNight = (weatherData.current.is_day === 1)?"Day":"Night"
  temp.innerText = `Temp: ${weatherData.current.temperature_2m} C`
  apparentTemp.innerText = `Apparent Temperature: ${weatherData.current.apparent_temperature} C`
  IsDayOrNight.innerText = `Is Day or Night : ${dayOrNight}`
  rain.innerText = `Rain: ${weatherData.current.rain} mm`
  wind.innerText = `Wind: ${weatherData.current.wind_speed_10m} km/h`
  

  console.log(weatherData)
})


async function getWeatherData(lat,long){
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,is_day,rain,wind_speed_10m`)
    const data = await response.json()
    return data
}



// let dataAyakya = true
// let weatherData = new Promise(function(res,rej){

//     setTimeout(()=>{
//         if (dataAyakya === true){
//             res("Weather Achcha hai");
//         }
//         else{
//             rej("Data  nahi aya");
//         }
//     },5000)
//     })

//     console.log(weatherData)
    

// weatherData.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })
