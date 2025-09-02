import Product from "./Product";

function App() {
  const products = [
    {
      id: 1,
      title: "Lemon Cookies",
      price: 990,
      inStock: true,
      description: "Мягкое печенье с лимонной цедрой.",
      rating: 4,
      tags: ["New", "Sale"],
    },
    {
      id: 2,
      title: "Dark Roast Coffee",
      price: 1890,
      inStock: false,
      description: "Кофе тёмной обжарки, насыщенный вкус.",
      rating: 5,
      tags: ["Bestseller"],
    },
    {
      id: 3,
      title: "Almond Milk 1L",
      price: 1290,
      inStock: true,
      description: "Растительное молоко без сахара.",
      rating: 3,
      tags: [],
    },
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        {products.map((p) => (
          <Product
            key={p.id}
            title={p.title}
            price={p.price}
            inStock={p.inStock}
            description={p.description}
            rating={p.rating}
            tags={p.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default App;