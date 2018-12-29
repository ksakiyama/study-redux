import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

// コンポーネントのprops.activeに値をセットする
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.setVisibilityFilter
  };
};

// 
const mapDispatchToProps = (dispatch, ownProps) => {
  // onClickが呼ばれたとき、setVisibilityFilterを呼び出す
  return {
    onClick: () => {
      // actionに定義されているsetVisibilityFilterを呼ぶ
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

// Linkコンポーネントに振る舞いを紐づけ
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
