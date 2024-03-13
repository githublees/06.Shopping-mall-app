import "../../styles/CartList.css";
import { FaRegTrashCan } from "react-icons/fa6";

const CartList = () => {
  return (
    <div className="cartlist-container">
      <div className="cartlist-container-detail">
        <div className="cartlist-container__img">img</div>
        <div className="cartlist-container-info">
          <div className="cartlist__category">man's closhing</div>
          <div className="cartlist__title">title</div>
          <div className="cartlist__cost">$20</div>
        </div>
      </div>
      <div className="cartlist-container-calc">
        <button>+</button>
        <input type="number"></input>
        <button>-</button>
      </div>
      <button className="cartlist__delete">
        <FaRegTrashCan size="24" style={{ color: "gray" }} />
      </button>
    </div>
  );
};

export default CartList;
