import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'yoshi, age'}
  const link = "https://yandex.ru/"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 4*8 }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Yandex</a>


      </div>
    </div>
  );
}

export default App;
