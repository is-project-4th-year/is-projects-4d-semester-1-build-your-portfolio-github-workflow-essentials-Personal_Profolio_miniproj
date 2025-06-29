document.addEventListener('DOMContentLoaded', () => {
  // Load data from LocalStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || {
    name: 'Dennis Wanjiku',
    about: [
      "I'm a fourth-year student at Strathmore University pursuing a Bachelor's in Informatics and Computer Science. I specialize in web development with Laravel, Next.js, and React Native, and I'm an upcoming AI/ML engineer passionate about designing algorithms to solve real-world problems.",
      "I interned at Bityarn Consult as a Software Engineer, working with Laravel, Vue.js, and Docker. I lead the Feedback Committee in Strathmore's 16th Student Council Academic Docket and contribute to the SCESA media team as a videographer and editor using Adobe Premiere Pro and CapCut.",
      "My passions include learning, community engagement, and creating user-friendly UI/UX designs, IoT solutions, and database management systems."
    ]
  };

  // Render user name
  document.getElementById('user-name').textContent = userData.name;
  document.getElementById('hero-name').textContent = userData.name;

  // Render about section
  const aboutContent = document.getElementById('about-content');
  aboutContent.innerHTML = userData.about.map(paragraph => `<p>${paragraph}</p>`).join('');
});