'use client';
export default function Error() {
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
    <main className="error" style={styling}>
      <h1>Error Occurred</h1>
      <p>Failed to load page.</p>
      <p>Please try again later.</p>
    </main>
  );
}
