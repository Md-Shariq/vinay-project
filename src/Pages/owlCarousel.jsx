// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// /*
//   resources:
//   1- https://www.npmjs.com/package/react-owl-carousel
//   2- https://github.com/seal789ie/react-owl-carousel
// */

// const MyOwlCarousel = () => {
//   const options = {
//     loop: true,
//     margin: 10,
//     items: 1,
//     // dots: false,
//     autoplay: true
//   };
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <OwlCarousel className="owl-theme" {...options} style={{ width: "45%" }}>
//         <div className="item">
//           <img src="https://ouch-cdn2.icons8.com/ZkpqQ4-_3UvZBlSD5ItTu-cERWwxBDbLPu9aoOgP3ck/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzU4/LzBiYTBiMWNiLTJl/ZTEtNGU3Ny1hZmM0/LTUzMmY4YjliNGNi/MC5zdmc.png" />
//           <br />
//           <div style={{ width: "100%", color: "white" }}>
//             <h2 style={{ position: "relative", left: "10%", fontSize: "4vw",margin:"1px" }}>
//               Extend Warranty
//             </h2>
//           </div>
//         </div>
//         <div className="item">
//           <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
//           <br />
//           <div style={{ maxWidth: "100%", color: "white" }}>
//             <h6 style={{ fontSize: "2.5vw",margin:"10px" }}>
//               Get Engine Transmission Warrant Upto 5 lac
//             </h6>
//           </div>
//         </div>
//         <div className="item">
//           <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
//           <br />
//           <div style={{ maxWidth: "100%", color: "white" }}>
//             <h6 style={{ fontSize: "2.5vw" }}>
//               Get Engine Transmission Warrant Upto 5 lac
//             </h6>
//           </div>
//         </div>
//         {/* <div className="item">
//           <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
//         <br />
//         <div style={{ maxWidth: "100%", color: "white" }}>
//           <h6 style={{ fontSize: "2.5vw" }}>
//             Get Engine Transmission Warrant Upto 5 lac
//           </h6>
//         </div>
//         <div/> */}
//       </OwlCarousel>
//     </div>
//   );
// };
// export default MyOwlCarousel;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    autoplay: true,
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OwlCarousel
        className="owl-theme"
        {...options}
        style={{ maxWidth: "200px", height: "auto", margin: "auto" }}
      >
        <div className="item">
          <img src="https://ouch-cdn2.icons8.com/ZkpqQ4-_3UvZBlSD5ItTu-cERWwxBDbLPu9aoOgP3ck/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzU4/LzBiYTBiMWNiLTJl/ZTEtNGU3Ny1hZmM0/LTUzMmY4YjliNGNi/MC5zdmc.png" />
          <br />
          <div style={{ width: "100%", color: "white" }}></div>
          <h4 style={{ margin: "auto", position: "relative", left: "25%",color:"white" }}>
            Waranty
          </h4>
        </div>
        <div className="item">
          <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
          <br />
          <div style={{ maxWidth: "100%", color: "white" }}></div>
          <h6 style={{ position: "relative", left: "15%",color:"white" }}>
            Get Claim upto 5 lac
          </h6>
        </div>
        <div className="item">
          <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
          <br />
          <div style={{ maxWidth: "100%", color: "white" }}></div>
        </div>
        {/* <div className="item">
          <img src="https://ouch-cdn2.icons8.com/lw7ryc_p4Ldc0harpODqJDxPOzsXXyC8NdbAlK1dCPw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUz/L2EzNjgzNTNkLTNj/N2UtNDJiZi1hOTlk/LWYyNDZhZWY5ZTE1/YS5zdmc.png" />
        <br />
        <div style={{ maxWidth: "100%", color: "white" }}>
          <h6 style={{ fontSize: "2.5vw" }}>
            Get Engine Transmission Warrant Upto 5 lac
          </h6>
        </div>
        <div/> */}
      </OwlCarousel>
    </div>
  );
};
export default MyOwlCarousel;
