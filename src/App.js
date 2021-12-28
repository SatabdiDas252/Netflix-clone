//import logo from './logo.svg';
import React from 'react'
import './App.css';
import Banner from "./Banner";
import Header from "./Header";


import requests from './request';
import Row from "./Row";

function App() {
  return (
    <div className="App">
      
        
      <Header />
      <Banner />
      
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      
      />
      <Row
        isLargeRow={true}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        isLargeRow={true}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        isLargeRow={true}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        isLargeRow={true}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        isLargeRow={true}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        isLargeRow={true}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      
    </div>
  );
}

export default App;
