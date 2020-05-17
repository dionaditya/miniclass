import React from "react";
import { styled } from "linaria/react";

const StlyedInput = styled.input`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

export const Input = (props) => {
  const { type, name, placeholder, label, ...rest } = props;
  return (
    <div key={`input-${name}`} className="flex flex-col mt-4">
      <label htmlFor={name}>{label}</label>
      <StlyedInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
