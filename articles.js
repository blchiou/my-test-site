async function loadArticles(category) {
  const res = await fetch("articles.json");
  const articles = await res.json();
  const container = document.getElementById("article-list");
  container.innerHTML = "";

  const filtered = articles.filter(a => a.category === category);
  filtered.forEach(article => {
    const link = document.createElement("a");
    link.href = `article.html?file=${article.file}`;
    link.innerHTML = `<h2>${article.title}</h2><small>${article.date}</small>`;
    container.appendChild(link);
  });
}

// 顯示單篇文章
async function loadSingleArticle(file) {
  const res = await fetch(file);
  const text = await res.text();
  const container = document.getElementById("single-article");

  // 使用簡單 markdown 轉換器
  container.innerHTML = marked.parse(text);
}
