import {Progress} from "@nextui-org/react";
import React from "react";

export const PathwaysProgressOutline = () => {
    const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (

    <Progress
      aria-label="Rendering..."
      size="md"
      value={value}
      color="success"
    //   showValueLabel={true}
      className="w-[75%] max-w-[80%] self-center justify-self-center text-white"
    />
  );
}