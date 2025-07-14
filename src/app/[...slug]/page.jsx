// app/[...slug]/page.js

export default function CustomNotFoundPage({ params }) {
  const slug = params.slug?.join('/') || 'home';
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
      <h1>Page "{slug}" not found</h1>
      <p>The page you're looking for does not exist.</p>
    </main>
  );
}
