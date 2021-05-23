import { Slider } from "antd";

const MySlider = () => {
  const onRangeChange = (value) => {
    console.log("onChange: ", value);
  };

  const onAfterRangeChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <>
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onRangeChange}
        onAfterChange={onAfterRangeChange}
      />
    </>
  );
};
export default MySlider;
