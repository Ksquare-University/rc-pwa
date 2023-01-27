import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import '../styles/checkoutItem.css'

type CheckoutItemProps = {
  id: number;
  quantity: number;
};

export function CheckoutItem({ id, quantity }: CheckoutItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="checkoutItem">
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "100px", objectFit: "cover" }}
        alt=""
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted">
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <div className="quantity">
      <button className="plusminus">+</button>
      <button
        className="delete"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
      <button className="plusminus">-</button>
      </div>
    </Stack>
    </div>
  );
}
