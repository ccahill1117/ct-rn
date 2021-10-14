import { connect } from 'react-redux';
import ToolsComponent from '../components/ToolsComponent';
import { getToolsSelector } from '../store/reducers/tools-reducer';
import { fetchTools } from '../store/actions/fetch-tools';

const mapStateToProps = (state) => getToolsSelector(state);

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolsComponent);
