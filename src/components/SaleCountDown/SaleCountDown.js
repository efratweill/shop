import React, { useState, useEffect } from "react";

// const SaleCountDown = ({ endSale }) => {
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(5);

//   const myInterval = setInterval(() => {
//     console.log("poel");
//     if (seconds > 0) {
//       setSeconds((seconds) => seconds - 1);
//     }
//     if (seconds === 0) {
//       if (minutes === 0) {
//       console.log("aa");
//       clearInterval(myInterval);
//       endSale();
//     } else {
//       setMinutes((minutes) => minutes - 1);
//       setSeconds(59);
//     }
//     }
//   }, 1000);

//   useEffect(() => {
//     myInterval();
//     return () => {
//       clearInterval(myInterval);
//       endSale();
//     },[];

//   return (
//     <div>
//       {minutes === 0 && seconds === 0 ? (
//         <h1>Sale ended</h1>
//       ) : (
//         <h1>
//           Sale ends in : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//         </h1>
//       )}
//     </div>
//   );
// };

// export default SaleCountDown;
