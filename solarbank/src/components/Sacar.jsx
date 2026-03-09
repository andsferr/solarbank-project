const Sacar = () => {
  return (
    <div className="sacar">
      <h2>Sacar Dinheiro</h2>
      <form className="sacar-form">
        <div className="form-group">
          <label htmlFor="valor-saque">Quantia a sacar:</label>
          <input 
            id="valor-saque"
            type="number" 
            placeholder="Digite o valor" 
          />
        </div>
        <button type="submit">Sacar</button>
      </form>
    </div>
  )
}

export default Sacar