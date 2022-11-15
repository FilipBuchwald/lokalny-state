import { useState } from "react";
import { Select, Square, Wrapper } from "./styled";

export const Section = () => {

  const colors = [
    { name: "red" },
    { name: "green" },
    { name: "blue" },
  ];

  const [color, setColor] = useState("red");

  return (
    <Wrapper>
      <Select
        value={color}
        onChange={({ target }) => setColor(target.value)}
      >
        {colors.map((({ name }) => (
          <option
            key={name}
            value={name}
          >
            {name}
          </option>
        )))}
      </Select>
      <Square background={color} />
    </Wrapper>
  )
};
