import MenuItems from "./MenuItems";

const Menu = ({ category, isLoading, cart, setCart }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <MenuItems meals={category.meals} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Menu;
