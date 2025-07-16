import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}
export default Landing

import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

      <div className="space-x-4">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full" />
      </div>

      <div className="space-x-4">
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full" />
      </div>

      <div className="space-x-4">
        <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full" />
        <Button title="Large Rounded-lg" styles="text-lg px-6 py-3 rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;
