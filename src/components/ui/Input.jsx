
const Input = ({ type, placeholder, defaultValue, name, required }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      required={required}
    />
  )
}

export default Input