


export const fetchClima=async(ciudad="london")=>{

    

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=6172a571ec73b581f18e4db9618db372&units=metric`

    const resp = await fetch(url)
    const data = await resp.json()

    const climaInfo ={
        ciudad:data.name,
        temperatura:data.main.temp,
        main:data.weather[0].main,
        icon:data.weather[0].icon,
        fecha:data.dt,
        
        descripcion:data.weather[0].description,
        viento:data.wind.speed,
        feel:data.main.feels_like,
    }
    return climaInfo

}

