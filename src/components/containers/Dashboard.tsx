import React from "react";
import Button from "../Button/Button";
import Element1 from "../ElemetnsComponent/Element1";
import Elements2 from "../ElemetnsComponent/Elements2";
import Placeholder from "../ElemetnsComponent/Placeholder";
import People1 from "../ElemetnsComponent/People1";
import People2 from "../ElemetnsComponent/People2";
import { Input } from "../Input/Input";
import cx from "@macklinu/cx";
import NightICON from "../../assets/logo/night.svg";
import DayICON from "../../assets/logo/day.svg";
import { useMorph } from "react-morph";

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

  const [theme, setTheme] = React.useState("light");
  const morph = useMorph();
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
    <div className="grid grid-cols-2 h-full min-h-screen max-h-screen">
      <div
        className={cx(
          "min-h-screen w-full max-h-screen h-full p-24",
          theme === "light" ? "bg-white" : "bg-gray-800 text-white",
          "relative"
        )}
      >
        <div
          className="mt-4 flex flex-row absolute flex-1 items-center"
          style={{
            top: 0,
            right: 40,
            width: "100px",
          }}
        >
          {theme !== "dark" ? (
            <span
              id="toogle"
              className="border mr-2 w-full rounded-full border-grey flex items-center cursor-pointer w-12 justify-start"
              onClick={(e) => setTheme("dark")}
              style={{height: 30}}
            >
              <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
            </span>
          ) : (
            <span
              id="toogle"
              className="border mr-2 rounded-full w-full border-grey flex items-center cursor-pointer w-12 bg-green-500 justify-end"
              onClick={(e) => setTheme("light")}
              style={{height: 30}}
            >
              <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
            </span>
          )}
          {theme === "dark" ? (
            <NightICON
              style={{
                width: 48,
                height: 48,
              }}
            />
          ) : (
            <DayICON
              style={{
                width: 48,
                height: 48,
              }}
            />
          )}
        </div>

        <h1
          className={cx(
            "text-4xl font-bold",
            theme === "light" ? "text-gray-800" : "text-white"
          )}
          id="Title"
        >
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
          <div className="mt-4 flex flex-row items-center">
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
      <div className="bg-blue-600 w-full relative overflow-hidden min-h-screen max-h-screen h-full">
        <div
          className={cx("flex flex-col absolute z-10")}
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
          className={cx("absolute z-20 w-full")}
          style={{
            top: -100,
            left: 40,
            width: 80,
          }}
        />
        <People2
          className={cx("absolute z-20 w-full")}
          style={{
            bottom: -100,
            right: 40,
            width: 80,
          }}
        />

        <Element1
          className={cx("absolute z-10 w-full")}
          style={{
            bottom: 100,
            left: -10,
          }}
        />

        <Elements2
          className={cx("absolute z-10")}
          style={{
            bottom: 0,
            right: 0,
          }}
        />

        <Placeholder
          className={cx("absolute z-10")}
          style={{
            bottom: 60,
            left: 50,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
