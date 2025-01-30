/* eslint-disable react/prop-types */
function Filter({option, onchange, status}) {
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex  items-center gap-x-2 p-1 border border-secondary-200 bg-secondary-0 rounded-lg">
        {option.map(({label, value}) => {
          const isActive = status === value;
          return (
            <button
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${isActive ? "!bg-primary-900 text-white" : "bg-secondary-0 text-secondary-800"} 
              `}
              key={value}
              onClick={() => onchange(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
