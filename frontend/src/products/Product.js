
import { Link } from "react-router-dom";


function Product(props) {
  const game = props.game;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to="/products/1" href="!#" replace>
          
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt=""
            src={game.url}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {game.name}
          </h5>
          <p className="card-text text-center text-muted mb-0">{game.price} </p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
            <i class="fa-solid fa-cart-plus me-1"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
