import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./action";

const App = ({ value, increment, decrement }) => {
  return (
    <div className="ui buttons sixteen wide column">
      <button className="ui button" onClick={increment}>
        Incrementr
      </button>
      <div className="or" data-text={value}></div>
      <button className="ui positive button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
