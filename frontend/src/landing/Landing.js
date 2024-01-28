import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import { Link } from "react-router-dom";
import '../bootstrap-custom.css'
import '../App.css'
import '../bootstrap-custom.css.map'

function Landing() {
  const games = [
    {
      name: "God of war 4",
      url: "images/gow.jpg",
      price : '99.49 $'
    },
      {
      name: "The witcher 3",
      url: 'images/the witcher 3.jpg',
      price :'49.99 $'
      },{
        name: "Call of duty MW3",
        url: "images/cod.jpg",
        price: "39 $"
        },
      {
        name: "Sekiro : shadows die twice",
        url: "images/sekiro.jpg",
        price: "150 $"
      },
      {
        name: "Farcry 6",
        url: "images/farcry.jpg",
        price: "50 $"
      },
      {
        name: "Red dead redemption",
        url: "images/rdr.jpg",
        price: "69.69 $"
      }
    ]
  return (
    <>
      
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        
        <div className="d-flex justify-content-center">
          <Link to="/productList" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3"></h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {Array.from({ length: 6}, (_, i) => {
            return <FeatureProduct key={i} games={games[i]} />;
          })}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
          <i class="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="!#">
          <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="!#" className="ms-3">
          <i class="fa-brands fa-x-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
