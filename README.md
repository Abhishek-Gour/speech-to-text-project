# 🎤 Speech-to-Text Converter (MERN Stack)

A full-stack web application that converts spoken audio into text using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and integrates speech recognition APIs. Designed for accessibility, productivity, and modern web experiences.

---

## 🚀 Features
- 🎙️ **Real-time Speech Recognition** – Convert voice input into text instantly.
- 📄 **Text Editor Integration** – Edit, copy, and save recognized text.
- 💾 **Persistent Storage** – Save transcripts in MongoDB for later use.
- 🌐 **Responsive UI** – Built with React for seamless cross-device experience.
- ⚡ **API Integration** – Uses Web Speech API / third-party speech recognition services.
- 🛠️ **Error Handling** – Graceful fallbacks for unsupported browsers.

---

## 🏗️ Tech Stack
| Layer        | Technology |
|--------------|------------|
| Frontend     | React.js, HTML5, CSS3, JavaScript (ES6+) |
| Backend      | Node.js, Express.js |
| Database     | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Deployment   | Heroku / Netlify / Vercel |

---

## 📂 Project Structure
speech-to-text-converter/ │── client/              # React frontend │   ├── src/ │   │   ├── components/  # UI components │   │   ├── pages/       # App pages │   │   └── App.js │── server/              # Express backend │   ├── models/          # MongoDB schemas │   ├── routes/          # API routes │   └── server.js │── .env                 # Environment variables │── package.json │── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/speech-to-text-converter.git
cd speech-to-text-converter

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install


# Start backend
cd server
npm run dev


# Start backend
cd backend
npm server.js

# Start frontend
cd /frontend
npm start
