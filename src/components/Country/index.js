import { connect } from "react-redux";
import { fetchUser } from "../../asyncFunctions";
import { SET_USER_NAME } from "../../store/actionTypes";
import Country from "./Country.js";

const mapStateToProps = state => {
  //replace Reducer name with state.'Your Reducer name' and .property
        return {
          userName: state.user.name,
          userRole: state.user.role,
        };
      };
      const mapDispatchToProps = dispatch => {
        return {
          setUser: (payload) => {
            dispatch({
              type: SET_USER_NAME,
              payload
            });
          },
          getUser: (id) => dispatch(fetchUser(id))
      };}
  
export default connect(mapStateToProps, mapDispatchToProps)(Country)