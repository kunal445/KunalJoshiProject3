import logo from './logo.svg';
import './App.css';

function App() {

  // using this proxy server because of cors error with the api
  
  //  const proxiedUrl = 'https://www.mmobomb.com/api1/games';

  //           const url = new URL('http://proxy.hackeryou.com');
  //           url.search = new URLSearchParams({
  //               reqUrl: proxiedUrl,
  //           });

  //           fetch(url)
  //               .then(response => response.json())
  //               .then(data => {
  //                   console.log(data);
  //               });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          wow
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
