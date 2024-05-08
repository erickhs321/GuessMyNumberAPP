import PropTypes from 'prop-types';
import { Text, View, Pressable } from 'react-native';

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('Pressed!');
  }
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
