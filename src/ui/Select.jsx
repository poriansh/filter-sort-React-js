/* eslint-disable react/prop-types */
function Select({option, onChange, value}) {
  return (
    <div>
      <select className="textField__input" name="" id="" value={value} onChange={onChange}>
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
