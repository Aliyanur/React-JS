function Product({ title, price, inStock, description, rating, tags }) {
  const stars = "⭐".repeat(rating);

  let content;
  if (!inStock) {
    content = <p style={{ color: "red", fontWeight: "bold" }}>Out of stock</p>;
  } else if (tags.includes("Sale")) {
    const discounted = Math.round(price * 0.9);
    content = (
      <p>
        <s>{price}₸</s> <b>{discounted}₸</b>
      </p>
    );
  } else {
    content = <p>{price}₸</p>;
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{stars}</p>
      {content}
      <p>{tags.join(", ")}</p>
    </div>
  );
}

export default Product;