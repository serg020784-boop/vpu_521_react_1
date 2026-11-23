import './App.css';
import Header from './components/Header'; // подключаем Header
import Footer from './components/Footer'; // подключаем Footer
import Main from './components/Main'; // подкючаем Main

// разметка атома, который вращается

function App() {
  return (
      <div className="App">
          <Header />
          <Main />
          <Footer />
      </div>
  );
}

export default App;
