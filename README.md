# 🎬 Cine – Movie Discovery App

A beautifully crafted cross-platform mobile app built with **React Native**, **Expo** , **NativeWind** , Cine provides real-time access to the latest movies using the **TMDB API** and ranks trending content via a custom **Appwrite-powered algorithm**. With debounced search, dynamic routing, and a sleek UI, it delivers an engaging and scalable movie browsing experience.

## 🚀 Features

- 🎞️ Real-time fetching of newly released films with detailed metadata
- 🔍 Debounced search functionality for optimized performance
- 📈 Custom trending algorithm using Appwrite based on user search frequency
- 📋 Dynamic movie detail screens with genres, revenue, budget, production data, and more
- 🧭 Smooth navigation and back-stack handling
- 🌐 Responsive and modern UI with NativeWind and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React Native (TypeScript), Expo, NativeWind
- **Backend**: Appwrite (Database, Functions)
- **API Integration**: TMDB API
- **Deployment**: EAS Build, OTA Updates

## 📦 Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/YourUsername/cine-app.git
cd cine-app
```
2. Install Dependencies

```bash
npm install
Set Up Environment Variables
```
3. Create a .env file in the root directory and add:
```env
TMDB_API_KEY=your_tmdb_api_key
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_appwrite_project_id
⚠️ Make sure your Appwrite project is set up with the necessary collections and permissions.
```
4. Start the App
```bash
npx expo start
Scan the QR code with Expo Go on your phone (iOS or Android)
Or launch it in an Android/iOS simulator
```
## 📂 Folder Structure
```bash
cine-app/
├── assets/          # Icons and images
├── components/      # Reusable UI components!
├── screens/         # Home, Search, MovieDetails, etc.
├── services/        # API and Appwrite service handlers
├── utils/           # Constants and helper functions
├── App.tsx          # Main entry point
└── app.json         # Expo configuration
```


## Live Build 
App is live to use it on Android Devices. Showing some of the screenshots of live app for reference.
![Cine-1](https://github.com/user-attachments/assets/cbd9043a-17ca-4228-930f-7ccaa23faac7)
![Cine-2](https://github.com/user-attachments/assets/7a6f3514-51b5-4ab6-bc03-8c98a6fa0378)
![Cine-3](https://github.com/user-attachments/assets/6a9a0e06-09b7-463f-856e-59710ae6985d)
![Cine-4](https://github.com/user-attachments/assets/c8b76f92-ae54-42f6-ac68-8ede52cbe941)


## ⭐️ Show Your Support
If you found this project helpful or interesting, feel free to give it a ⭐️, and fork it 
share it with your peers!

