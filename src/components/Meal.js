const Meal = ({ meal, cart, setCart }) => {
  return (
    <div className="cart-content">
      <div className="cart-counter">
        <span
          className="icon-minus"
          onClick={() => {
            const newCart = [...cart];
            let indexMealToModify = cart.findIndex((elt) => {
              return elt.id === meal.id;
            });
            newCart[indexMealToModify].quantity -= 1;
            // if quantity equals 0, meal is no longer ordered, so we remove element
            if (newCart[indexMealToModify].quantity === 0) {
              newCart.splice(indexMealToModify, 1);
            }
            setCart(newCart);
          }}
        />
        <span>{meal.quantity}</span>
        <span
          className="icon-plus"
          onClick={() => {
            const newCart = [...cart];
            let indexMealToModify = cart.findIndex((elt) => {
              return elt.id === meal.id;
            });
            newCart[indexMealToModify].quantity += 1;
            setCart(newCart);
          }}
        />
      </div>
      <div className="cart-meal-name">{meal.title}</div>
      <div className="cart-price">{`${Number(
        meal.price * meal.quantity
      ).toFixed(2)} €`}</div>
    </div>
  );
};

export default Meal;
