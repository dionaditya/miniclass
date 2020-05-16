import React from "react"
import { styled } from "linaria/react"
import Button from "../Button/Button"
import { css, styles } from "css-zero/macro"

const bgRed = css`
  font-size: 1.2rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
`

const InputStyle = styled.input`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const inputField = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Masukan Username",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Masukan Password",
  },
]

const Dashboard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(e.target.elements.username.value)
  }

  return (
    <StyledWrapper>
      <Title>Registration pages</Title>
      <form onSubmit={handleSubmit}>
        {inputField.map((data) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              key={`input-${data.name}`}
              className="mt-4"
            >
              <label htmlFor={data.name}>{data.label}</label>
              <InputStyle
                type={data.type}
                name={data.name}
                id={data.name}
                placeholder={data.placeholder}
              />
            </div>
          )
        })}
      </form>
      <Button
        text="submit"
        type="submit"
        theme="light"
        extendClass={["mt-4", styles(bgRed)]}
      />
    </StyledWrapper>
  )
}

export default Dashboard
