
    // Modal Functions
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    }

    // Weather App Configuration
    const WEATHER_API_KEY = "e42da10d18c6deba91b672ef5d6c72fa";
    const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

    // DOM Elements
    const citySelect = document.getElementById("citySelect");
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const condition = document.getElementById("condition");
    const range = document.getElementById("range");
    const humidity = document.getElementById("humidity");
    const rain = document.getElementById("rain");
    const windSpeed = document.getElementById("windSpeed");
    const pressure = document.getElementById("pressure");
    const aqiValue = document.getElementById("aqiValue");
    const aqiStatus = document.getElementById("aqiStatus");
    const pm25 = document.getElementById("pm25");
    const pm10 = document.getElementById("pm10");
    const o3 = document.getElementById("o3");
    const no2 = document.getElementById("no2");
    const so2 = document.getElementById("so2");
    const co = document.getElementById("co");
    const dailyForecast = document.getElementById("dailyForecast");
    const weatherCard = document.getElementById("weatherCard");
    const forecastSection = document.getElementById("forecastSection");
    const errorMsg = document.getElementById("errorMsg");
    const loader = document.getElementById("loader");
    const lastUpdated = document.getElementById("lastUpdated");

    // 250+ VERIFIED Indian Cities
    const cities = [
      "Indore", "Bhopal", "Ujjain", "Gwalior", "Jabalpur", "Sehore", "Dewas", "Khandwa", "Khargone",
      "Itarsi", "Betul", "Burhanpur", "Chhindwara", "Damoh", "Datia", "Dhar", "Mandla", "Mandsaur", 
      "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna",
      "Seoni", "Shahdol", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Vidisha",
      "Mumbai", "Pune", "Nagpur", "Aurangabad", "Nashik", "Solapur", "Kolhapur", "Satara", "Sangli",
      "Ratnagiri", "Wardha", "Chandrapur", "Akola", "Yavatmal", "Parbhani", "Latur", "Beed",
      "Dhule", "Jalgaon", "Nandurbar", "Ahmednagar", "Nanded", "Jalna", "Amravati", "Gondia", "Washim", 
      "Thane", "Raigad", "Barshi", "Malegaon", "Manmad", "Miraj", "Navi Mumbai",
      "Bangalore", "Mysore", "Mangalore", "Belgaum", "Hubli", "Kolar", "Tumkur", "Chitradurga",
      "Chikmagalur", "Raichur", "Ballari", "Davangere", "Udupi", "Shimoga", "Hassan", "Bagalkot", 
      "Gadag", "Haveri", "Kodagu", "Mandya", "Ramnagara", "Chamarajanagar", "Chikballapur", 
      "Karwar", "Kumta", "Sirsi", "Bhatkal", "Kundapura", "Puttur",
      "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tirunelveli", "Nellore", "Vellore",
      "Tiruppur", "Erode", "Thanjavur", "Kanchipuram", "Cuddalore", "Ramanathapuram", "Sivaganga", "Ariyalur",
      "Perambalur", "Villupuram", "Chengalpattu", "Theni", "Dindigul", "Dharamapuri", "Namakkal", "Coonoor",
      "Ooty", "Avadi", "Guindy", "Kodambakkam", "Mylapore", "Teynampet", "Adayar", "Besant Nagar", 
      "Thiruvanmiyur", "Tambaram", "Tirupattur", "Tiruvannamalai", "Virudhunagar", "Thoothukudi", "Udumalpet",
      "Hyderabad", "Vijayawada", "Visakhapatnam", "Guntur", "Warangal", "Rajahmundry", "Kakinada", "Anantapur",
      "Kadapa", "Eluru", "Ongole", "Nandyal", "Chittoor", "Suryapet", "Karimnagar", "Khammam", "Nizamabad",
      "Mahbubnagar", "Adilabad", "Sangareddy", "Shadnagar", "Shamshabad", "Tandur",
      "Kochi", "Thrissur", "Kozhikode", "Malappuram", "Palakkad", "Kannur", "Kottayam", "Alappuzha", "Kollam",
      "Thiruvananthapuram", "Ernakulam", "Idukki", "Kasaragod", "Pathanamthitta", "Wayanad", "Aluva",
      "Changanacherry", "Cherthala", "Irinjalakuda", "Kakkanad", "Kaladi", "Kalamassery", "Kalpetta",
      "Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Meerut", "Aligarh", "Moradabad", "Bareilly",
      "Noida", "Ghaziabad", "Bulandshahr", "Saharanpur", "Muzaffarnagar", "Bijnor", "Hapur", 
      "Muradnagar", "Khair", "Greater Noida", "Mathura", "Firozabad", "Jhansi", "Guna",
      "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Madhubani", "Sitamarhi", "Araria",
      "Kisanganj", "Supaul", "Saharsa", "Khagaria", "Munger", "Lakhisarai", "Nalanda", "Aurangabad", 
      "Jehanabad", "Arwal", "Buxar", "Vaishali", "Samastipur", "Begusarai", "Jamui", "Purnia", "Madhepura",
      "Kolkata", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Darjeeling", "Jalpaiguri", "Alipurduar",
      "Coochbehar", "Malda", "Murshidabad", "Birbhum", "Bankura", "Purulia", "East Midnapore", "West Midnapore", 
      "South 24 Parganas", "North 24 Parganas", "Hooghly", "Howrah", "Barrackpore", "Bhatpara", "Barasat",
      "Jaipur", "Jodhpur", "Kota", "Udaipur", "Ajmer", "Bikaner", "Sikar", "Churu", "Jhunjhunu",
      "Alwar", "Bharatpur", "Karauli", "Dholpur", "Sawai Madhopur", "Tonk", "Pali", "Sirohi", "Barmer",
      "Jaisalmer", "Nagaur", "Hanumangarh", "Chittorgarh", "Bhilwara", "Banswara", "Dungarpur",
      "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Porbandar",
      "Dwarka", "Vapi", "Ankleshwar", "Anand", "Gandhinagar", "Khambhat", "Nadiad", "Godhra", "Dahod",
      "Panchmahals", "Chhota Udepur", "Valsad", "Navsari", "Kalol", "Mehsana", "Patan",
      "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Firozpur", "Kapurthala", "Moga",
      "Sangrur", "Barnala", "Faridkot", "Chandigarh", "Gurugram", "Faridabad", "Hisar", "Rohtak",
      "Karnal", "Yamunanagar", "Panipat", "Sonipat", "Jhajjar", "Bhiwani", "Fatehabad", "Sirsa",
      "Palwal", "Rewari", "Mahendragarh",
      "Shimla", "Mandi", "Solan", "Palampur", "Kangra", "Bilaspur", "Rampur", "Kullu", "Kinnaur", "Spiti",
      "Dehradun", "Haridwar", "Rishikesh", "Mussoorie", "Nainital", "Pithoragarh", "Almora", "Bageshwar", 
      "Rudraprayag", "Joshimath", "Auli", "Chopta", "Uttarkashi", "Tehri", "Pauri",
      "Bhubaneswar", "Cuttack", "Rourkela", "Balasore", "Sambalpur", "Berhampur", "Jharsuguda", "Bargarh",
      "Balangir", "Kalahandi", "Kandhamal", "Rayagada", "Nabarangpur", "Gajapati", "Ganjam", "Puri",
      "Guwahati", "Shillong", "Aizawl", "Imphal", "Kohima", "Agartala", "Itanagar", "Gangtok", "Darjeeling",
      "Kalimpong",
      "Srinagar", "Jammu", "Leh", "Kargil", "Puducherry", "Silvassa", "Daman"
    ];

    const uniqueCities = [...new Set(cities)].sort();

    // Populate dropdown
    uniqueCities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });

    // Set default city
    if (uniqueCities.includes("Sehore")) {
      citySelect.value = "Sehore";
      fetchWeather("Sehore");
    } else {
      citySelect.value = uniqueCities[0];
      fetchWeather(uniqueCities[0]);
    }

    citySelect.addEventListener("change", () => {
      fetchWeather(citySelect.value);
    });

    function showError(message) {
      errorMsg.textContent = message;
      errorMsg.classList.add("show");
      weatherCard.style.display = "none";
      forecastSection.style.display = "none";
      setTimeout(() => errorMsg.classList.remove("show"), 5000);
    }

    function showLoader(show = true) {
      if (show) {
        loader.classList.add("show");
        weatherCard.style.display = "none";
        forecastSection.style.display = "none";
      } else {
        loader.classList.remove("show");
        weatherCard.style.display = "block";
        forecastSection.style.display = "block";
      }
    }

    function getAQICategory(aqi) {
      switch(aqi) {
        case 1:
          return { level: "Good", class: "aqi-1", emoji: "😊" };
        case 2:
          return { level: "Fair", class: "aqi-2", emoji: "🙂" };
        case 3:
          return { level: "Moderate", class: "aqi-3", emoji: "😐" };
        case 4:
          return { level: "Poor", class: "aqi-4", emoji: "😕" };
        case 5:
          return { level: "Very Poor", class: "aqi-5", emoji: "😷" };
        default:
          return { level: "Unknown", class: "aqi-3", emoji: "❓" };
      }
    }

    async function fetchAQI(lat, lon) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        );

        if (!response.ok) throw new Error("AQI fetch failed");

        const data = await response.json();
        const aqiRaw = data.list[0].main.aqi;
        const pollutants = data.list[0].components;

        const aqiCategory = getAQICategory(aqiRaw);

        aqiValue.textContent = aqiRaw;
        aqiValue.className = `aqi-value ${aqiCategory.class}`;
        aqiStatus.textContent = `${aqiCategory.emoji} ${aqiCategory.level}`;

        pm25.textContent = (pollutants.pm2_5 || 0).toFixed(1) + " μg/m³";
        pm10.textContent = (pollutants.pm10 || 0).toFixed(1) + " μg/m³";
        o3.textContent = (pollutants.o3 || 0).toFixed(1) + " μg/m³";
        no2.textContent = (pollutants.no2 || 0).toFixed(1) + " μg/m³";
        so2.textContent = (pollutants.so2 || 0).toFixed(1) + " μg/m³";
        co.textContent = (pollutants.co || 0).toFixed(1) + " mg/m³";

        return true;
      } catch (error) {
        console.error("AQI fetch error:", error);
        aqiValue.textContent = "N/A";
        aqiStatus.textContent = "Data unavailable";
        pm25.textContent = "--";
        pm10.textContent = "--";
        o3.textContent = "--";
        no2.textContent = "--";
        so2.textContent = "--";
        co.textContent = "--";
        return false;
      }
    }

    async function fetchWeather(city) {
      showLoader(true);
      errorMsg.classList.remove("show");

      try {
        const weatherResponse = await fetch(
          `${API_BASE_URL}/weather?q=${city},IN&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!weatherResponse.ok) {
          throw new Error(`Weather API error: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();

        const forecastResponse = await fetch(
          `${API_BASE_URL}/forecast?q=${city},IN&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!forecastResponse.ok) {
          throw new Error(`Forecast API error: ${forecastResponse.status}`);
        }

        const forecastData = await forecastResponse.json();

        cityName.textContent = `${city} 📍`;
        temp.textContent = Math.round(weatherData.main.temp) + "°C";
        condition.textContent = weatherData.weather[0].description;
        range.textContent = `${Math.round(weatherData.main.temp_min)}°C ~ ${Math.round(weatherData.main.temp_max)}°C`;

        humidity.textContent = weatherData.main.humidity + "%";
        windSpeed.textContent = weatherData.wind.speed + " m/s";
        pressure.textContent = weatherData.main.pressure + " hPa";
        
        const rainAmount = weatherData.rain ? weatherData.rain["3h"] || 0 : 0;
        rain.textContent = rainAmount.toFixed(1) + " mm";

        await fetchAQI(weatherData.coord.lat, weatherData.coord.lon);

        dailyForecast.innerHTML = "";
        const uniqueDays = {};

        for (let i = 0; i < forecastData.list.length; i += 8) {
          const day = forecastData.list[i];
          const dateStr = new Date(day.dt * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

          if (!uniqueDays[dateStr]) {
            uniqueDays[dateStr] = day;
            const div = document.createElement("div");
            div.className = "day";
            const rainForecast = day.rain ? (day.rain["3h"] || 0).toFixed(1) : "0";
            div.innerHTML = `
              <span>${dateStr}</span>
              <span>${Math.round(day.main.temp_min)}°C ~ ${Math.round(day.main.temp_max)}°C</span>
              <span>🌧️ ${rainForecast}mm</span>
            `;
            dailyForecast.appendChild(div);
          }
        }

        const now = new Date();
        lastUpdated.textContent = `Last updated: ${now.toLocaleTimeString()}`;

        showLoader(false);
      } catch (error) {
        console.error("Weather fetch error:", error);
        showLoader(false);
        showError(`❌ Unable to fetch weather for ${city}. Please try again.`);
      }
    }

    function refreshWeather() {
      fetchWeather(citySelect.value);
    }
  