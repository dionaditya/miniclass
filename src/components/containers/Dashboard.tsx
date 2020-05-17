import React from "react";
import { styled } from "linaria/react";
import Button from "../Button/Button";
import { css, styles } from "css-zero/macro";
import cx from "@macklinu/cx";
import Elements from '../ElemetnsComponent/Elements';

const bgRed = css`
  font-size: 1.2rem;
`;

const InputStyle = styled.input`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const inputField = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
];

const agreementsText = `
  I agree to the processing of my personal data and hvae read the user agreement
`;

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastname, password, email } = e.target.elements;
    const data = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    };
    setValue(data);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="max-h-screen w-full p-24">
        <h1 className="text-4xl font-bold text-gray-800" id="Title">
          Creating an account
        </h1>
        <form onSubmit={handleSubmit}>
          {inputField.map((data) => {
            return (
              <div key={`input-${data.name}`} className="flex flex-col mt-4">
                <label htmlFor={data.name}>{data.label}</label>
                <InputStyle
                  type={data.type}
                  name={data.name}
                  id={data.name}
                  placeholder={data.placeholder}
                />
              </div>
            );
          })}
          <div className="flex align-middle mt-4">
            <input
              type="checkbox"
              name="agreements"
              id="agreements"
              className="bg-blue-200"
            />
            <p className="text-base">{agreementsText}</p>
          </div>
          <Button
          text="Create Account"
          type="submit"
          extendClass={[
            "mt-4 bg-yellow-400 text-yellow-700 w-full py-4 px-2",
            styles(bgRed),
          ]}
        />
        </form>
      
        <div className="mt-4 grid ">
          <span>Name: {value.name}</span>
          <span>LastName: {value.lastname}</span>
          <span>Email: {value.email}</span>
          <span>Password: {value.password}</span>
        </div>
      </div>
      <div className="bg-blue-600 w-full h-screen">
        <Elements />
      </div>
    </div>
  );
};

export default Dashboard;
