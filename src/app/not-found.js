export default function NotFound() {
  const styling = {
    color: "red",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "1.5em",
    fontWeight: "bold",
    padding: "20px",
    border: "2px solid red",
    borderRadius: "10px",
    backgroundColor: "#ffe6e6",
  };
  return (
    <main className="not-found" style={styling}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </main>
  );
}
