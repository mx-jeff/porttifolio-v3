
function displayBodyLang(country, enBody, bodyPt){
    if(country == 'Brazil') {
        bodyPt.style.display = "block"
    } else {
        enBody.style.display = "block"
    }
}


export function getLocation() {
    const bodyPt = document.querySelector("#pt-body")
    const enBody = document.querySelector("#en-body")
    enBody.style.display = "none"
    bodyPt.style.display = "none"


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords
            const geocodeAPikey = "&auth=260344906473753239972x1557"
            const countryFindUrl = `https://geocode.xyz/${latitude},${longitude}?json=1${geocodeAPikey}`
            try{
                const response = await fetch(countryFindUrl)
                if(response.status != 200) return
                const data = await response.json()
                const { country } = data
                console.log(country)
                displayBodyLang(country, enBody, bodyPt)

            } catch(e){
                enBody.style.display = "block"
                console.error(e)
            }
        })
    } else {
        console.error("Geolocation is not supported by this browser.")
        return
    }
    
}
