import React, { memo } from "react";

// export default function Button({ text, ...rest }) {
//   //   console.log("🚀 ~ props:", props);
//   console.log("🚀 ~ BUTTON is RENDERING");
//   return <button {...rest}>{text}</button>;
// }
export default memo(function Button({ text, ...rest }) {
  //   console.log("🚀 ~ props:", props);
  console.log("🚀 ~ BUTTON is RENDERING");
  return <button {...rest}>{text}</button>;
});
