export const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

export async function getWeatherList() {
    let res = fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                res = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                return res
            })
            .catch(err => console.log('Something wrong: ', err))
    let weatherList = await res
    return weatherList
}

