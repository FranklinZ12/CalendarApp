
const Input = ({ type, placeholder, value, name, onchange }) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onchange}
    />
  )
}

export default Input