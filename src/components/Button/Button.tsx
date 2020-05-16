import React from "react"
import cx from "@macklinu/cx"

const Button = (props) => {
  const {
    theme,
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
        theme === "dark"
          ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          : "bg-transparent text-blue-500 border border-blue-600 py-2 px-2 rounded ",
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
