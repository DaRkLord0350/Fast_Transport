import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div style={{ background: "lightpink" }}>
      <div>
        <div className=" row   align-items-top text-right justify-content-right">
          <div className=" " style={{ color: "white" }}>
            <div class="btn">
              <button type="button" class="btn btn-warning">
                <Link to="/Login" className="nav-links">
                  Login
                </Link>
              </button>
              <button type="button" class="btn btn-info">
                <Link to="/CustomerReg" className="nav-links">
                  Registration
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <table>
            <div
              id="carouselExampleInterval"
              class="Feature carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    src="https://img.etimg.com/thumb/msid-87839758,width-300,imgsize-46288,,resizemode-4,quality-100/shipping-chamber.jpg"
                    className="d-block w-100 "
                    alt="image1"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://a-es.eu/en/wp-content/uploads/sites/2/2021/03/1.jpeg"
                    className="d-block w-100 "
                    alt="image2"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://ziplinelogistics.com/wp-content/uploads/2019/10/976_blog_bids-v1.jpg"
                    className="d-block w-100 "
                    alt="image3"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://ziplinelogistics.com/wp-content/uploads/2019/10/976_blog_bids-v1.jpg"
                    className="d-block w-100 "
                    alt="image4"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="d-block w-100 "
                    alt="image5"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 justify-content-center "></div>
        <div className="col-8">
          <div className="">
            <marquee behavior="" direction="up">
              <div className="text-center fs-4">
                <p>
                  We have set high standards in every facet of transportation,
                  and strive to keep raising the bar. With our extensive
                  industry knowledge and skilled team, you can completely focus
                  on your core interests whereas leaving the tiring and complex
                  moving process on us.
                </p>
                <p>
                  Our company is equipped with advanced equipment, modern tools,
                  and expertise that enable us to help our consumers with
                  crucial transportation and supply chain solutions. We ensure
                  businesses that they will get excellent-quality, prompt, and
                  secure transportation services irrespective of
                  time-constraint, the heavy load issue, and any other related
                  problem.
                </p>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
