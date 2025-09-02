import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#333",
            fontFamily: "Arial, sans-serif",
            marginBottom: "20px",
          }}
        >
          Welcome to My Website!
        </h1>
        <ProfileCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
