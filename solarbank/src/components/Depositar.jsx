const Depositar = () => {
  return (
    <div className="depositar">
      <h2>Depositar Dinheiro</h2>
      <form className="depositar-form">
        <div className="form-group">
          <label htmlFor="valor-deposito">Quantia a depositar:</label>
          <input 
            id="valor-deposito"
            type="number" 
            placeholder="Digite o valor" 
          />
        </div>
        <button type="submit">Depositar</button>
      </form>
    </div>
  )
}

export default Depositar