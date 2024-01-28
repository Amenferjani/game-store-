
import RelatedProduct from "./RelatedProduct";
import Image from "../img/gow.jpg";

import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";



function ProductD() {
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
          },
          {
            name: "Assasin's creed",
            url: "images/ac.jpg",
            price: "49.99 $"
          },
          {
            name: "GTA V",
            url: "images/gta.jpg",
            price: "49.99 $"
          },
          {
            name: "Minecraft",
            url: "images/mc.jpg",
            price: "49.99 $"
          },
      
          {
            name: "Rainbow six siege",
            url: "images/rs.jpg",
            price: "49.99 $"
          },
          {
            name: "Fortnite",
            url: "images/fortnite.jpg",
            price: "49.99 $"
          },
          {
            name :"valorant",
            url :"images/valo.jpg",
            price :"49.99 $"
          }
        ]
      
  function changeRating(newRating) {}

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products">
              All Products
            </Link>
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 10 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <a key={i} href="!#">
                    <img
                      className={"rounded mb-2 ratio " + selected}
                      
                      src={games[i]}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
  <div className="row">
    <div className="col-12 mb-4">
      <img 
        className="border rounded ratio ratio-1x1"
        src={Image}
        alt="Description of the image"
      />
    </div>
  </div>
</div>


        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{}</h2>
            <h4 className="text-muted mb-4">{}$</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Add to cart
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Buy now</button>
              </div>
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Code</dt>
              <dd className="col-sm-8 mb-3">C0001</dd>

              <dt className="col-sm-4">Category</dt>
              <dd className="col-sm-8 mb-3">games</dd>

              <dt className="col-sm-4">Manufacturer</dt>
              <dd className="col-sm-8 mb-3">From software</dd>

              <dt className="col-sm-4">studio</dt>
              <dd className="col-sm-8 mb-3">santa monica</dd>

              <dt className="col-sm-4">Status</dt>
              <dd className="col-sm-8 mb-3">InStock</dd>

              <dt className="col-sm-4">Rating</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  rating={4.5}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
              </dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              des
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <h4 className="text-muted my-4">Related products</h4>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <RelatedProduct key={i} percentOff={i % 2 === 0 ? 15 : null} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductD;
