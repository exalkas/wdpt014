import { memo } from "react";

export default memo(function Input(props) {
  //   console.log("🚀 ~ props:", props);
  console.log("🚀 ~ Input is RENDERING");
  return <input {...props} />;
});
