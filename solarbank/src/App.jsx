import Header from './components/Header.jsx'
import Depositar from './components/Depositar.jsx'
import Sacar from './components/Sacar.jsx'
import Transferir from './components/Transferir.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="welcome-section">
          <h2>Bem-vindo ao SolarBank! 👋</h2>
          <p>Seu banco digital de confiança</p>
        </section>

        <section id="depositar">
          <Depositar />
        </section>

        <section id="sacar">
          <Sacar />
        </section>

        <section id="transferir">
          <Transferir />
        </section>
      </main>
    </div>
  )
}

export default App
