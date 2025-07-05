import React from "react";
import ReactDOM from "react-dom/client";

const products = [
  {
    id: 1,
    name: "Charizard Base Set 1st Edition",
    price: "$3,000",
    image: "https://images.pokemontcg.io/base1/4.png",
    link: "https://cartaspokemon.pe/productos/charizard-base-set-1st-edition"
  },
  {
    id: 2,
    name: "Blastoise Base Set",
    price: "$1,200",
    image: "https://images.pokemontcg.io/base1/2.png",
    link: "https://cartaspokemon.pe/productos/blastoise-base-set"
  },
  {
    id: 3,
    name: "Pikachu Promo",
    price: "$150",
    image: "https://images.pokemontcg.io/sm115/SM115.png",
    link: "https://cartaspokemon.pe/productos/pikachu-promo"
  },
];

function handlePurchase(link, name) {
  alert(`Has elegido comprar: ${name}`);
  window.open(link, "_blank");
}

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#fef3c7' }}>
      <h1 style={{ textAlign: 'center', color: '#dc2626' }}>Pokémon Card Store</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '30px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ height: '200px', objectFit: 'contain', marginBottom: '10px' }} />
            <h2>{product.name}</h2>
            <p style={{ color: 'green', fontWeight: 'bold' }}>{product.price}</p>
            <button onClick={() => handlePurchase(product.link, product.name)} style={{ backgroundColor: '#dc2626', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
