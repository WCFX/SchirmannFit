import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Home = (props) => {
  if (!props.name) {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'StarterIntro' }],
      })
    );
  } // else {
  //   props.navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: { name: 'AppTab' },
  //     })
  //   );
  // }

  return null;
};

const mapStateToProps = (state) => {
  return {
    name: state.UserReducer.name,
  };
};

export default connect(mapStateToProps)(Home);
