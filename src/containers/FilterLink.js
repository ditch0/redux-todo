import Link from '../components/Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = ({ visibilityFilter }, ownProps) => ({
    active: ownProps.filter === visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
