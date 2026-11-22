/* Your content: edit text, projects and links here (plain JavaScript) */
/* ---------- Data: apni ekhane text bodlaben ---------- */
const profile = {
  name: "Sangita Das",
  tagline: "Frontend developer in the making. I build clean, responsive interfaces with HTML, CSS, Tailwind CSS, JavaScript and React.",
  email: "sangita07122005@gmail.com",
};

const projects = [
  { title: "Habit Garden", tech: ["HTML","CSS","Tailwind CSS","JavaScript"], featured: true,
    desc: "A habit tracker that shows each habit as a plant that grows as you stay consistent. Check in daily, and your streaks are saved on your device with local storage, so they are still there when you come back.",
    demo: "https://sangita07122005-commits.github.io/habit-garden/", img: "habit-garden.jpg" },
  { title: "Weather App", tech: ["React","Tailwind CSS","JavaScript","Open-Meteo API"], featured: true,
    desc: "Search any city to see its temperature, humidity, wind and a 5-day forecast. Switch between °C and °F, or use your location. The background colour changes with the weather.",
    demo: "https://sangita07122005-commits.github.io/Weather-app/", img: "weather-app.jpg", imgPortrait: true },
  { title: "Bloom & Pot (E-commerce)", tech: ["React","Tailwind CSS","JavaScript"], featured: true,
    desc: "A flower and plant shop with search, category filters, sorting and a product details popup. Add items to the cart, see the delivery charge and total, and place an order through a checkout form. Your cart and saved items stay after a refresh.",
    demo: "https://sangita07122005-commits.github.io/Online-shop/", img: "shop.jpg" },
];

const skills = [
  ["Frontend", "HTML, CSS, Tailwind CSS, JavaScript, React"],
  ["Programming", "Java"],
  ["Tools", "Git, GitHub, VS Code"],
  ["Infosys Springboard", "Internship 7.0 (B1), Intelligent Farm Operations Platform with Smart Agro Precision System. Certificate of completion, Jun 28 – Aug 30, 2026"],
  ["Certification", "Programming in Java, NPTEL (IIT Kharagpur), Elite grade, 91%, Jan–Apr 2026"],
  ["Languages", "Bengali, English, Hindi"],
];

const links = [
  ["GitHub", "sangita07122005-commits", "https://github.com/sangita07122005-commits"],
  ["LinkedIn", "sangita-das-17a2a6394", "https://www.linkedin.com/in/sangita-das-17a2a6394"],
  ["LeetCode", "sangita07122005-commits", "https://leetcode.com/u/sangita07122005-commits/"],
  ["GeeksforGeeks", "sangita05t9c", "https://www.geeksforgeeks.org/profile/sangita05t9c"],
  ["Email", profile.email, "mailto:" + profile.email],
];
