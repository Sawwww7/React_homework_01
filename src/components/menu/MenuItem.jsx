import Button from "../Button";
const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={`${name} Pizza`} className="pizza-image" />
      <div className="pizza-info">
        <h2>{name}</h2>
        {ingredients.length > 0 && (
          <ul className="ingredients">
            {ingredients.slice(0, -1).map((ingredient, index) => (
              <li key={`${id}_${ingredients[index]}`} className="ingredient">
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)},
              </li>
            ))}
            <li key={`${id}_${ingredients[ingredients.length - 1]}`}>
              {ingredients[ingredients.length - 1].charAt(0).toUpperCase() +
                ingredients[ingredients.length - 1].slice(1)}
            </li>
          </ul>
        )}
        <p className="price">€{unitPrice}.00</p>
      </div>
      {soldOut ? (
        <p className="sold-out">SOLD OUT</p>
      ) : (
        <Button className={"add-to-cart"}>ADD TO CART</Button>
      )}
    </div>
  );
};

export default MenuItem;
