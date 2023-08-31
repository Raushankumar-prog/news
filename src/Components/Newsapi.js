
import React, { useEffect, useState } from 'react';

const Newsapi = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '9adfaad1257049e58e1ed886cce35653';
        const url = `https://newsapi.org/v2/everything?q=Apple&from=2023-08-22&sortBy=popularity&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {newsData.map((article, index) => (
        <div key={index} className='separate'>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} className='image'></img>          <p>{article.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Newsapi;
