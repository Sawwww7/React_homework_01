import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">PIZZA DAY</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for the order #"
      />
      <div className="username">ANDRII</div>
    </div>
  );
};

export default Header;
