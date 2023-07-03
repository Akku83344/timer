import  { useState, useEffect } from "react";


function newsletterpage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const fetchNewsArticles = async () => {
    const apiKey = "2eb9e7b3c5394315adc30085f6d51fce"
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === "ok") {
        setArticles(data.articles);
      } else {
        console.error("Failed to fetch news articles:", data.message);
      }
    } catch (error) {
      console.error("Error while fetching news articles:", error);
    }
  };

  return (
    <div className="App">
      <h1>Latest News Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}





export default newsletterpage;
