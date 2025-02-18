// DOM Elements
const introPage = document.getElementById('intro-page');
const newsPage = document.getElementById('news-page');
const startButton = document.getElementById('start-button');
const articlesContainer = document.getElementById('articles');

// Sample Articles Data
const articles = [
  {
    title: "New Project Launch!",
    content: "I just launched a new project. Check it out and let me know what you think!"
  },
  {
    title: "Upcoming Features",
    content: "Stay tuned for some exciting updates coming soon!"
  },
  {
    title: "Behind the Scenes",
    content: "Here's a sneak peek into how I built this platform."
  },
  {
    title: "New Collaboration",
    content: "Teaming up with an amazing designer for a new project!"
  },
  {
    title: "Tech Stack Update",
    content: "Switched to a new tech stack for better performance."
  }
];

// Event Listener for Start Button
startButton.addEventListener('click', () => {
  introPage.classList.add('hidden');
  newsPage.classList.remove('hidden');
  loadArticles();
});

// Load Articles
function loadArticles() {
  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.content}</p>
    `;
    articlesContainer.appendChild(articleElement);
  });
}
