import React from "react";
import styles from "../Styles/Home.module.css";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import MyOwlCarousel from "./owlCarousel";

// import image1 from "../Assets/image1.png";
// import image2 from "../Assets/image2.png";
// import image3 from "../Assets/image3.png";
import logo from "../Assets/logo.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState([]);
  const { addToast } = useToasts();
  // const [isDisabled, setIsDisabled] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("Datas got", details);

  console.log(redirect);

  const getSearch = async (e) => {
    e.preventDefault();
    if (!number) {
      return addToast("Please Enter A Vehicle Number", {
        appearance: "error",
      });
    }
    if (number.length < 6) {
      setNumber("");
      return addToast("Vehicle number is less than six", {
        appearance: "error",
      });
    }
    // console.log("vehicle id", selected);
    // console.log("number", number);
    // setQuery(number);

    // callling vehicles api
    setLoading(false);

    try {
      setTimeout(async () => {
        const response = await fetch(
          `http://164.52.217.96:30027/inspection/getInspectionReport?vehNum=${number}&dealerId`
        );

        console.log(response, "response");

        const data = await response.json();

        setDetails(data.response.VehicleList);
        setLoading(true);

        if (data && data) {
          setRedirect(true);
        }
      }, 10000);
    } catch (error) {
      console.error("error");
    }
  };

  redirect && navigate("/ownercard", { state: { details } });

  return (
    <>
      <div className={styles.topDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.pageLogo}>
            <img src={logo} alt="company logo" />
          </div>
          <div className={styles.slider}>
            <MyOwlCarousel />
          </div>

          <div
            className={styles.form}
            style={{ width: "13%", position: "relative", top: "9%" }}
          >
            <form onSubmit={getSearch}>
              <label
                for="exampleFormControlInput1"
                className="form-label"
                style={{ fontSize: "15px", color: "white" }}
              >
                <input
                  value={number}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ width: "120px" }}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Vehicle No"
                  maxlength="10"
                />
              </label>
              {loading ? (
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: "60%", position: "relative", left: "20%" }}
                >
                  submit
                </button>
              ) : (
                <button
                  class="btn btn-primary"
                  type="button"
                  disabled
                  style={{position: "relative", left: "5%" }}
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              )}
            </form>

            {/* {redirect && navigate("/ownercard", { state: { details } })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
