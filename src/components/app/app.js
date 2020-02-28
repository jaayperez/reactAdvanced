import React from 'react';
import './app.css';
import Header from './header';
import Helmet from "react-helmet";

function App() {
  return (
    <div className="app">
    <Helmet title= "React Advanced"
 meta={[
  {"name": "description", "content": "Description of page"},
  {property: "og:title", content: "Example title"},
  {property: "og:image", content: "/"},
  {property: "og:url", content: "/"}
 ]}
/>
      <Header />
    </div>
  );
}

export default App;
