🏠 MagicBrick – Flat Booking Application:
MagicBrick is a modern flat booking web application built using React and Bootstrap.
It allows users to explore verified flats, apply filters, view detailed flat information, and contact owners directly — all in a clean, responsive UI.
This project is portfolio-ready and designed to resemble real-world platforms like Magicbricks and Housing.com.

🚀 Live Features
🔍 Search flats by city
🎯 Advanced filters (price, availability, rating)
⭐ Ratings & reviews
🏷 Availability status (Available / Booked)
🖼 Image gallery with preview
📍 Google Maps integration
👤 Owner contact details
💬 WhatsApp quick contact
📧 Contact form with EmailJS
🌙 Dark / Light mode (Home & About)
🎠 Homepage carousel
🎨 Fully responsive UI

🛠 Tech Stack
Frontend: React.js
Styling: Bootstrap 5, Custom CSS
Routing: React Router DOM
Animations: AOS (Animate On Scroll)
SEO: React Helmet
Email Service: EmailJS
Maps: Google Maps Embed

📂 Project Structure
src/
│── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Home.js
│   ├── About.js
│   ├── Booking.js
│   ├── FlatDetails.js
│   ├── Contact.js
│
│── data/
│   └── flatsData.js
│
│── App.js
│── index.js

🧩 Pages Overview:

🏡 Home Page
Hero carousel
Animated statistics
Popular cities
Call-to-action buttons

📖 About Page
Mission & vision
Founder/team section
Timeline & testimonials
Scroll animations & SEO

🏷 Booking Page
Advanced filtering
Sorting by price & rating
Modern flat cards
Availability badges

🏠 Flat Details Page
Image gallery
Ratings & reviews
Amenities
Owner contact
Google Maps location
Sticky booking card

📞 Contact Page
Contact info cards
Validated contact form
EmailJS integration
WhatsApp floating button
Google Maps embed

⚙ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/magicbrick.git
cd magicbrick

2️⃣ Install Dependencies
npm install

3️⃣ Install Additional Libraries
npm install react-router-dom bootstrap aos react-helmet emailjs-com

4️⃣ Start the Application
npm start

📧 EmailJS Setup (Contact Form)
Create an account at 👉 https://www.emailjs.com
Create:
Email Service
Email Template

Replace the following in Contact.js:
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formData,
  "YOUR_PUBLIC_KEY"
);

🌱 Future Enhancements:
🔐 Authentication (Login / Signup)
🧾 Booking confirmation flow
❤️ Wishlist / Save flats
📊 Admin dashboard
🔗 Backend API (Django / Node.js)
💳 Payment gateway integration

👨‍💻 Author:
Nagesh K
💼 Full Stack Developer
🚀 Passionate about building real-world web applications

⭐ Show Some Love
If you like this project:
⭐ Star the repository
🍴 Fork it
📢 Share it
