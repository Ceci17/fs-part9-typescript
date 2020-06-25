import React from "react";

interface TotalProps {
  total: number[];
}

const Total: React.FC<TotalProps> = ({ total }) => {
  return <p>Total: {total.reduce((a, b) => a + b, 0)}</p>;
};

export default Total;
