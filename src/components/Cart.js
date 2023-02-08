import Meal from "./Meal";

const Cart = ({ cart, setCart }) => {
  const sumCart = (cart, deliveryCharges = 0) => {
    let totalPrice = 0;
    cart.forEach((element) => {
      totalPrice += Number(element.price) * Number(element.quantity);
    });
    totalPrice += deliveryCharges;
    return totalPrice.toFixed(2);
  };

  return (
    <div className="Cart">
      <button
        className={
          cart.length <= 0 ? "validate-button forbidden" : "validate-button"
        }
      >
        Valider mon panier
      </button>
      {cart.length <= 0 ? (
        <div className="empty-cart">
          <span>Votre Panier est vide</span>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((meal) => {
              return (
                <Meal key={meal.id} meal={meal} cart={cart} setCart={setCart} />
              );
            })}
          </div>
          <div className="cart-subtotal">
            <div className="cart-subtotal-line">
              <span>Sous-total</span>
              <span>{`${sumCart(cart).toString().replace(/\./g, ",")} €`}</span>
            </div>
            <div className="cart-subtotal-line">
              <span>Frais de livraison </span>
              <span>2,50 €</span>
            </div>
          </div>
          <div className="cart-total">
            <span>Total</span>
            <span>{`${sumCart(cart, 2.5)
              .toString()
              .replace(/\./g, ",")} €`}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
