function Header() {
  return (
    <header style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: 0 }}>My Website</h2>
      <nav>
        <a href="#" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
