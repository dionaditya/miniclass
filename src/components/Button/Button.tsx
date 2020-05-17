import React from "react"
import cx from "@macklinu/cx"

const Button = (props) => {
  const {
    text,
    onClick,
    disabled,
    loading,
    color,
    extendClass,
    ...rest
  } = props

  return (
    <button
      className={cx(
        "btn",
        color,
        ...extendClass,
      )}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span>Loading...</span> : <span>{text}</span>}
    </button>
  )
}

export default Button
