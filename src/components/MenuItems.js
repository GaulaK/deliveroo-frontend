const MenuItems = ({ meals, isLoading, cart, setCart }) => {
  return (
    <div className="menu-items">
      {meals.map((meal, index) => {
        return (
          <div
            key={index}
            className="item-container"
            onClick={() => {
              const newCart = [...cart];
              const indexNewMeal = newCart.findIndex((elt) => {
                return elt.id === meal.id;
              });

              if (indexNewMeal !== -1) {
                newCart[indexNewMeal].quantity += 1;
              } else {
                newCart.push(meal);
                newCart[newCart.length - 1].quantity = 1;
              }
              setCart(newCart);
            }}
          >
            <div className="item">
              <div className="menu-item-text">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <span className="price">{`${meal.price} €`}</span>
                {meal.popular === true && (
                  <>
                    <span className="icon-STAR_FILL" />
                    <span className="popular">Populaire</span>
                  </>
                )}
              </div>

              {meal.picture && (
                <div className="menu-item-img">
                  <img alt={`{meal.title} cover`} src={meal.picture} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
