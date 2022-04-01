
const Input = ({ type, placeholder, value, name, onchange, required }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onchange}
      required={required}
    />
  )
}

export default Input