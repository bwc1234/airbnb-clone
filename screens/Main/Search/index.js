import { connect } from "react-redux";
import SerachContainer from "./SerachContainer";

function mapStateToProps(state) {
  return { token: state.usersReducer.token };
}

export default connect(mapStateToProps)(SerachContainer);
