import "./search-box.style.css";

const SearchBox = ({ className, type, placeholder, onChangeHander }) => {
  return (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHander}
    ></input>
  );
};

export default SearchBox;
