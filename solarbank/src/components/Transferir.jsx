const Transferir = () => {
  return (
    <div className="transferir">
      <h2>Transferir Dinheiro</h2>
      <form className="transferir-form">
        <div className="form-group">
          <label htmlFor="conta-destino">Conta de destino:</label>
          <input 
            id="conta-destino"
            type="text" 
            placeholder="Digite o número da conta" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="valor-transferencia">Quantia a transferir:</label>
          <input 
            id="valor-transferencia"
            type="number" 
            placeholder="Digite o valor" 
          />
        </div>
        <button type="submit">Transferir</button>
      </form>
    </div>
  )
}

export default Transferir