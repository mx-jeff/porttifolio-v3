


export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords
            const apiKey = "b6219e522f57eb2c8547d613a9b0224a"
            const countryFindUrl = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`

            const response = await fetch(countryFindUrl)
            if(response.status != 200) return
            const data = await response.json()
            const { country } = data.data[0]
            console.log(country)
            return country
        })
    } else {
        console.error("Geolocation is not supported by this browser.")
        return
    }
}
