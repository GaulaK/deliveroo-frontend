import Menu from "./Menu";
import Cart from "./Cart";

const Content = ({ categories, isLoading, cart, setCart }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="menu">
          {categories.map((category, index) => {
            if (category.meals.length > 0) {
              return (
                <Menu
                  key={index}
                  category={category}
                  cart={cart}
                  setCart={setCart}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="cart-column">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Content;

// {
//   !isLoading &&
//     categories.map((elt, index) => {
//       return (
//         <>
//           <span>{elt}</span>
//           <span>{index}</span>
//         </>
//       );
//     });
// }
