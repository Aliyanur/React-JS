function ProfileCard() {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      width: '240px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img
        src="/Photo.jpeg"
        alt="User Avatar"
        style={{
          borderRadius: '50%',
          marginBottom: '15px',
          width: '200px',
          height: '200px',
          objectFit: 'cover'
        }}
      />
      <h3 style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>Aliyanur Kaldybai</h3>
      <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>Email: aliya_kaldibay01@gmail.com</p>
    </div>
  );
}

export default ProfileCard;

