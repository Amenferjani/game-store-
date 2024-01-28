import { Link } from "react-router-dom";
import Product from "./Product";
import ProductH from "./ProductH";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
const categories = [
  "All Products",
  "War",
  "Survive",
  "History",
  "Rpj",
  "Horror",
];


const studios = ["bandai namco", "santa monica", "riot games", "van gard"];

const manufacturers = ["From software", "rockstare", "activision", "ubisoft"];

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

function FilterMenuLeft() {
  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Browse</h5>
        <div className="d-flex flex-wrap my-2">
          {categories.map((v, i) => {
            return (
              <Link
                key={i}
                to="/products"
                className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2"
                replace
              >
                {v}
              </Link>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Studios</h5>
        <div className="d-flex flex-column">
          {studios.map((v, i) => {
            return (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {v}
                </label>
              </div>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Manufacturers</h5>
        <div className="d-flex flex-column">
          {manufacturers.map((v, i) => {
            return (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {v}
                </label>
              </div>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Price Range</h5>
        <div className="d-grid d-block mb-3">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Min"
              defaultValue="100000"
            />
            <label htmlFor="floatingInput">Min Price</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Max"
              defaultValue="500000"
            />
            <label htmlFor="floatingInput">Max Price</label>
          </div>
          <button className="btn btn-dark">Apply</button>
        </div>
      </li>
    </ul>
  );
}

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link
              className="text-decoration-none link-secondary"
              to="/products"
              replace
            >
              All Products
            </Link>
          </li>
        </ol>
      </nav>

      <div className="h-scroller d-block d-lg-none">
        <nav className="nav h-underline">
          {categories.map((v, i) => {
            return (
              <div key={i} className="h-link me-2">
                <Link
                  to="/products"
                  className="btn btn-sm btn-outline-dark rounded-pill"
                  replace
                >
                  {v}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="row mb-3 d-block d-lg-none">
        <div className="col-12">
          <div id="accordionFilter" className="accordion shadow-sm">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-expanded="false"
                  aria-controls="collapseFilter"
                >
                  Filter Products
                </button>
              </h2>
            </div>
            <div
              id="collapseFilter"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFilter"
            >
              <div className="accordion-body p-0">
                <FilterMenuLeft />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4 mt-lg-3">
        <div className="d-none d-lg-block col-lg-3">
          <div className="border rounded shadow-sm">
            <FilterMenuLeft />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-3 d-none d-lg-block">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue=""
                >
                  <option value="">All Models</option>
                  <option value="2">War</option>
                  <option value="3">Survive</option>
                  <option value="3">History</option>
                  <option value="1">Rpj</option>
                  <option value="3">Strategy</option>
                  <option value="3">Horror</option>
                </select>
              </div>
              <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                    aria-label="search input"
                  />
                  <button className="btn btn-outline-dark">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <button
                  className="btn btn-outline-dark ms-2 d-none d-lg-inline"
                  onClick={changeViewType}
                >
                  {viewType.grid ?(<i className="fas fa-th-list fa-lg"></i>):
                  (<i className="fas fa-th-large fa-lg"></i>)}
                </button>
              </div>
            </div>
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >
              {Array.from({ length: 12 }, (_, i) => {
                if (viewType.grid) {
                  return (
                    <Product game={games[i]} key={i} />
                  );
                }
                return (
                  <ProductH game={games[i]} key={i} />
                );
              })}
            </div>
            <div className="d-flex align-items-center mt-auto">
              <span className="text-muted small d-none d-md-inline">
                Showing 12 of 100
              </span>
              <nav aria-label="Page navigation example" className="ms-auto">
                <ul className="pagination my-0">
                  <li className="page-item">
                    <a className="page-link" href="productList">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="productList">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="productList">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="productList">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="productList">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
