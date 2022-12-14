const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3adb6d35e0msh91536d2f83e7196p183949jsn88448c754e94',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const Weather = (city) => { 
	cname1 = city
	;
	cname.innerHTML = cname1.toUpperCase();
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		t1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		h.innerHTML = response.humidity
		mintemp.innerHTML = response.min_temp
		maxtemp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		winds.innerHTML = response.wind_speed
		
		wind_degrees.innerHTML = response.wind_degrees
		if (response.wind_speed<=50){
			wind_type.innerHTML = "Breeze"
		}
		else if (response.wind_speed<=100){
			wind_type.innerHTML = "Gale"
		}
		else if (response.wind_speed>100){
			wind_type.innerHTML = "Storm"
		}
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset


		console.log(response)
	})
	.catch(err => console.error(err));

}

const Weatherm = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
		mc.innerHTML = response.cloud_pct
		mt.innerHTML = response.temp
		mf.innerHTML = response.feels_like
		mh.innerHTML = response.humidity
		mmn.innerHTML = response.min_temp
		mmx.innerHTML = response.max_temp
		mws.innerHTML = response.wind_speed
		mwd.innerHTML = response.wind_degrees
		
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}
const Weatherr = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
		rc.innerHTML = response.cloud_pct
		rt.innerHTML = response.temp
		rf.innerHTML = response.feels_like
		rh.innerHTML = response.humidity
		rmn.innerHTML = response.min_temp
		rmx.innerHTML = response.max_temp
		rws.innerHTML = response.wind_speed
		rwd.innerHTML = response.wind_degrees
		
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}
const WeatherRj = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
		Rjc.innerHTML = response.cloud_pct
		Rjt.innerHTML = response.temp
		Rjf.innerHTML = response.feels_like
		Rjh.innerHTML = response.humidity
		Rjmn.innerHTML = response.min_temp
		Rjmx.innerHTML = response.max_temp
		Rjws.innerHTML = response.wind_speed
		Rjwd.innerHTML = response.wind_degrees
		
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}
const Weatherk = (city) => { 
	
	url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city
	fetch(url, options)
	.then(response => response.json())
	.then(response => {
		kc.innerHTML = response.cloud_pct
		kt.innerHTML = response.temp
		kf.innerHTML = response.feels_like
		kh.innerHTML = response.humidity
		kmn.innerHTML = response.min_temp
		kmx.innerHTML = response.max_temp
		kws.innerHTML = response.wind_speed
		kwd.innerHTML = response.wind_degrees
		
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	Weather(cityname.value)
}	)
Weather("Delhi")
Weatherm("Mumbai")
Weatherr("Ranchi")
Weatherk("Kolkata")
WeatherRj("Rajasthan")


lucknow.addEventListener("click",(e)=>{
	e.preventDefault()
	Weather("Lucknow")
}	)
patna.addEventListener("click",(e)=>{
	e.preventDefault()
	Weather("Patna")
}	)
bangalore.addEventListener("click",(e)=>{
	e.preventDefault()
	Weather("Bangalore")
}	)