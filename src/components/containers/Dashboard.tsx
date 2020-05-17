import React from "react";
import Button from "../Button/Button";
import Element1 from "../ElemetnsComponent/Element1";
import Elements2 from "../ElemetnsComponent/Elements2";
import Placeholder from "../ElemetnsComponent/Placeholder";
import People1 from "../ElemetnsComponent/People1";
import People2 from "../ElemetnsComponent/People2";
import { Input } from "../Input/Input";

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
  I agree to the processing of my personal data and have read the user agreement
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
    <div className="grid grid-cols-2 h-full min-h-screen max-h-screen ">
      <div className="min-h-screen w-full max-h-screen h-full p-24">
        <h1 className="text-4xl font-bold text-gray-800" id="Title">
          Creating an account
        </h1>
        <form onSubmit={handleSubmit}>
          {inputField.map((data) => {
            return (
              <Input
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                label={data.label}
              />
            );
          })}
          <div
            className="mt-4"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              className="mr-2 leading-tight"
              name="agreement"
              type="checkbox"
            />
            <p className="text-base">{agreementsText}</p>
          </div>
          <Button
            text="Create Account"
            type="submit"
            extendClass={[
              "mt-4 bg-yellow-400 text-yellow-700 w-full py-4 px-2",
            ]}
          />
        </form>
      </div>
      <div
        className="bg-blue-600 w-full min-h-screen max-h-screen h-full"
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="flex flex-col absolute"
          style={{
            bottom: 320,
            left: 50,
          }}
        >
          <h1 className="font-bold text-white text-2xl">
            {`Hi, you are one step away to get unlimited access for our service`}
          </h1>
          <p className="text-white">{`We're sure to provide our service is the best for you`}</p>
        </div>
        <People1
          style={{
            top: -100,
            left: 40,
            position: "absolute",
            zIndex: 20,
            width: 100,
          }}
        />

        <People2
          style={{
            bottom: -100,
            right: 40,
            position: "absolute",
            zIndex: 20,
            width: 100,
          }}
        />

        <Element1
          style={{
            bottom: 60,
            left: -10,
            position: "absolute",
          }}
        />
        <Elements2
          style={{
            bottom: 0,
            right: 0,
            position: "absolute",
          }}
        />
        <Placeholder
          style={{
            bottom: 60,
            left: 50,
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
