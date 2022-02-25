import ExampleYAML from './content/example.yaml';
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + YAML!</p>
        <pre style={{ textAlign: 'left', fontSize: '1.5rem', background: 'black', padding: '2rem', borderRadius: '0.5rem' }}>
          <code>
            {JSON.stringify(ExampleYAML, null, 2)}
          </code>
        </pre>
      </header>
    </div >
  )
}

export default App
