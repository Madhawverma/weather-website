# 🌤️ Real-Time Weather Application

A comprehensive, responsive weather application that provides real-time weather data, air quality information, and 5-day forecasts for 250+ Indian cities.

---

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Information](#api-information)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [Privacy & Security](#privacy--security)
- [Contact](#contact)
- [License](#license)

---

## ✨ Features

### 🌡️ Current Weather
- Real-time temperature display
- Weather condition descriptions
- Min/Max temperature range
- Weather icons and emojis

### 💧 Advanced Weather Metrics
- **Humidity Level** - Current moisture in air (%)
- **Rainfall Data** - Last 3 hours precipitation (mm)
- **Wind Speed** - Current wind velocity (m/s)
- **Atmospheric Pressure** - Current pressure level (hPa)

### 📊 Air Quality Index (AQI)
- Real-time AQI values (1-5 scale)
- Color-coded status badges
- 6 Major Pollutants:
  - **PM2.5** - Fine particulate matter (μg/m³)
  - **PM10** - Coarse particulate matter (μg/m³)
  - **O₃** - Ozone levels (μg/m³)
  - **NO₂** - Nitrogen Dioxide (μg/m³)
  - **SO₂** - Sulfur Dioxide (μg/m³)
  - **CO** - Carbon Monoxide (mg/m³)

### 📅 5-Day Forecast
- Daily weather predictions
- Temperature ranges
- Predicted rainfall amounts
- Interactive forecast cards

### 🇮🇳 City Support
- **250+ Indian Cities** including:
  - Major metropolitan areas (Mumbai, Delhi, Bangalore, Hyderabad, etc.)
  - Tier-2 cities (Indore, Sehore, Pune, Nagpur, etc.)
  - All state capitals
  - Popular tourist destinations

### 📱 User Experience
- **Fully Responsive** - Works on mobile, tablet, and desktop
- **Real-time Updates** - Refresh button for latest data
- **Smooth Animations** - Loading spinners and transitions
- **Intuitive Interface** - Easy-to-use dropdown selector
- **Error Handling** - User-friendly error messages
- **Last Updated Timestamp** - Shows when data was last fetched

### 🔐 Privacy & Legal
- Comprehensive Privacy Policy
- Contact information
- About section
- Transparent data practices

---

## 🎬 Demo

[Live Demo](https://your-website.com) *(Replace with actual URL)*

### How to Use:
1. Open the application in your web browser
2. Select a city from the dropdown menu
3. View real-time weather data, AQI, and 5-day forecast
4. Click refresh button (🔄) to update data anytime
5. Click footer links for Privacy Policy, Contact, or About information

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Dynamic functionality and data handling
- **Responsive Design** - Mobile-first approach with media queries

### APIs
- **OpenWeatherMap Weather API** - Current weather and forecast data
- **OpenWeatherMap Air Pollution API** - Real-time AQI and pollutant data

### Additional
- **RESTful API Integration** - Asynchronous data fetching with Fetch API
- **Local Storage** - Optional preference saving
- **Modal Windows** - Policy and information dialogs

---

## 📦 Installation

### Method 1: Direct File Usage
1. Download `weather-app-with-footer.html`
2. Save it to your local drive
3. Double-click the file to open in your default browser
4. Bookmark for quick access

### Method 2: Web Server Hosting
```bash
# Clone or download the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

# Start a local server (Python)
python -m http.server 8000

# Or using Node.js
npx http-server

# Or using VS Code Live Server extension
# Right-click > Open with Live Server
