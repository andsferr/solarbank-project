import Header from './components/Header/Header'
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
      </main>
    </div>
  )
}

export default App
