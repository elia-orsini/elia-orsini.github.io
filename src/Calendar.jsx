import { InlineWidget } from "react-calendly";

export default function Calendar() {
  return (
    <div className="w-full h-screen">
      <div className="mx-auto my-auto h-80 mt-40">
        <InlineWidget url="https://calendly.com/elia-orsini/30min" />
      </div>
    </div>
  );
}
