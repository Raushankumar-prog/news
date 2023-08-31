
import React from 'react';
import Newsapi from './Newsapi';

const Home = () => {
  return (
    <div className="root_container_home">
      <h1>Latest News</h1>
      
      <Newsapi />
    </div>
  );
};

export default Home;
