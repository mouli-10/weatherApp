const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById('temp_real_val')
const datahide = document.querySelector('.middle_layer')



const getInfo = async(event) => {
    event.preventDefault()
    let cityval = cityName.value

    if(cityval === ""){
        city_name.innerText = 'plz write the name before search'
        datahide.classList.add('data_hide')
    }else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8d6f49a1a4c824c27a1c2c72a70529c1`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp
            // temp_status.innerText = arrData[0].weather[0].main

            const tempMood =  arrData[0].weather[0].main

            if(tempMood == "Clear"){
                temp_status.innerHTML = ' <i class="fa-solid fa-sun" style="color: #eccc68"></i> '
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud"> style="color: #dfe4ea"></i> '
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = ' <i class="fa-solid fa-cloud-rain"> style="color: #a4b0be"></i> '
            }else {
                temp_status.innerHTML = ' <i class="fa-solid fa-cloud" style="color: #dfe4ea"></i> '
            }
            
            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText = 'plz enter the city name properly'
            datahide.classList.add('data_hide')
        }

    }




}

submitBtn.addEventListener('click' , getInfo)