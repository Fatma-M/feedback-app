import PropTypes from "prop-types";

function Header({ bgColor, textColor }) {
  return (
    <header style={{ background: bgColor, color: textColor }}>
      <div className="container">
        <h2>Feedback UI</h2>
        {/* <h2>{text}</h2> */}
      </div>
    </header>
  );
}

Header.defaultProps = {
  // text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
