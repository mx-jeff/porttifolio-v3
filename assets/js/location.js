
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
            const apiKey = "b6219e522f57eb2c8547d613a9b0224a"
            const countryFindUrl = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`

            try{
                const response = await fetch(countryFindUrl)
                if(response.status != 200) return
                const data = await response.json()
                const { country } = data.data[0]
                displayBodyLang(country, enBody, bodyPt)

            } catch(e){
                bodyPt.style.display = "block"
                console.log(e)
            }
        })
    } else {
        console.error("Geolocation is not supported by this browser.")
        return
    }
    
}
