const Button = ({ type = "button", onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 text-lg text-black bg-white font-semibold border-2 border-gray-300 rounded cursor-pointer transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-100 "
    >
      {children}
    </button>
  );
};

export default Button;
