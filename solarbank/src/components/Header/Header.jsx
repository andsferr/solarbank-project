import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Seção esquerda - Logo e nome */}
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">☀️</span>
          <h1 className="logo-text">SolarBank</h1>
        </div>
      </div>

      {/* Seção direita - Menu e usuário */}
      <div className="header-right">
        <nav className="nav-menu">
          <a href="#inicio" className="nav-link">
            Início
          </a>
          <a href="#transacoes" className="nav-link">
            Transações
          </a>
          <a href="#cartoes" className="nav-link">
            Cartões
          </a>
          <a href="#investimentos" className="nav-link">
            Investimentos
          </a>
        </nav>

        {/* Ícone de usuário */}
        <div className="user-menu">
          <button className="user-button">
            <span className="user-avatar">A</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
