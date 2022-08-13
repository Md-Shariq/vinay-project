import React from "react";
import styles from "../Styles/Ownercard.module.css";
import profile from "../Assets/profile.jpg";
import { useLocation } from "react-router-dom";

const Ownercard = () => {
  const locationData = useLocation();
  console.log(locationData);
  const { details } = locationData.state;
  return (
    // <div className={styles.bodyDiv}>
    //   <div className={styles.mainDiv}>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     {details &&
    //       details.map((eachData) => {
    //         return (
    //           <div className={styles.card}>
    //             <br />
    //             <img
    //               src={profile}
    //               alt="John"
    //               style={{ maxWidth: 100 }}
    //               className={styles.circleImage}
    //             />
    //             <br />
    //             <br />
    //             <h6>
    //               <b>{eachData.owner_name}</b>
    //             </h6>
    //             <p class="title">{eachData.phone_no}</p>
    //             <p>Bangalore,Karanataka</p>
    //             <p>Lorem Ipsum is simply dummy </p>
    //             <br />
    //             {/* <div style={{ margin: "24px 0" }}>
    //                     <a href="#"><i class="fa fa-dribbble"></i></a>
    //                     <a href="#"><i class="fa fa-twitter"></i></a>
    //                     <a href="#"><i class="fa fa-linkedin"></i></a>
    //                     <a href="#"><i class="fa fa-facebook"></i></a>
    //                 </div> */}
    //             {/* <p><button>Contact</button></p> */}
    //           </div>
    //         );
    //       })}
    //   </div>
    // </div>
    <>
      <div
        className={styles.Card}
        style={{ position: "relative", top: "60px" }}
      >
        {details &&
          details.map((eachData) => {
            return (
              <div className={styles.mainDiv}>
                <div className={styles.firstDiv}>
                  <div className={styles.secondDiv}>
                    {/* <img src="https://play-lh.googleusercontent.com/DsEyfcgxQkLkuQ7MBNqDCXb6KJx2kp2KjLvnAfL3LSbWdGipP4jSzw2PzdEoR27oxLE=w600-h300-pc0xffffff-pd" /> */}

                    <div className={styles.thirdDiv}>
                      <div style={{ position: "relative", bottom: "80px" }}>
                        <h4>{eachData.owner_name}</h4>

                        <h6>{eachData.phone_no}</h6>
                        <p>
                          {eachData.vehicle_make}-{eachData.vehicle_model}
                        </p>
                        <p>
                          {eachData.transmission_type}-{eachData.odometer}
                        </p>
                        <p>Inspection Status</p>
                      </div>
                      <div className={styles.fourthDiv}>
                        <div className={styles.fifthDiv}>
                          <img
                            src={eachData.dealer_logo}
                            style={{
                              maxWidth: "114px",
                              height: "107px",
                              borderRadius: "50%",
                              width: "109px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Ownercard;
