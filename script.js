document.addEventListener('DOMContentLoaded', () => {
  // Load data from LocalStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || {
    name: 'Dennis Wanjiku'
  };

  // Render user name
  document.getElementById('user-name').textContent = userData.name;
});