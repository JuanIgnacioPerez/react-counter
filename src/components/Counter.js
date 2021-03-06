import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const propTypes = {};
const defaultProps = {};

export default class Counter extends Component {
  constructor(props) {
    super (props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Button title="Up" onPress={this.props.increment} />
        <Text style={styles.counter} onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button title="Down" onPress={this.props.decrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});
