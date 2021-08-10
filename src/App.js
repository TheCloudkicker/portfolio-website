import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        theCloudkicker
        <a
          className="App-link"
          href="https://soundcloud.com/thecloudkicker"
        >SoundCloud</a>
      </header>

      <Footer />
    </div>
  );
}

export default App;
