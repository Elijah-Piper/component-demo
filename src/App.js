import './App.css';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Article from './Components/Article';

const articleTitle = "Ideas About React";
const articleBody = "I've begun to understand that components (in React) can be a very useful abstraction for builing HTML elements. They provide you a reusable, configurable object to feed into your index.html file, potentially reducing the complexity of your code.";

function App() {
  return (
    <div id="app" className="App" class="flex-container">
      <div id="wrapper" class="flex-container">
        <div id="top-div" class="flex-container">
        <Header />
        </div>
        <div id="mid-div" class="flex-container">
          <div id="sidebar-div">
            <Sidebar />
          </div>
          <div id="article-div">
            <Article title={ articleTitle } body={ articleBody } />
          </div>
        </div>
        <div id="bot-div" class="flex-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
