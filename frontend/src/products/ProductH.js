
import { Link } from "react-router-dom";


function ProductH(props) {
  const game = props.game;
  

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-4">
            <Link to="/products/1" href="!#" replace>
              
              <img
                className="rounded-start bg-dark cover w-100 h-100"
                alt=""
                src={game.url}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="card-title text-dark text-truncate mb-1">
                  {game.name}
                </h5>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  {game.price}
                </span>
                <div className="mt-auto d-flex">
                  <button className="btn btn-outline-dark ms-auto">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductH;
