import React from "react";
import {
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  WebView
} from "react-native";
import { Header } from "react-native-elements";

type State = {
  isModalOpen: boolean,
  uri: string
};

export default class BookScreen extends React.Component {
  state: State;

  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      uri: ""
    };
  }

  handlePress(type) {
    if (type === "tea") {
      this.setState({
        isModalOpen: true,
        uri: "http://www.zionserangoon.org.sg/book-now/fellowship-tea-2/"
      });
    } else if (type === "flowers") {
      this.setState({
        isModalOpen: true,
        uri: "http://www.zionserangoon.org.sg/book-now/sanctuary-flower/"
      });
    } else if (type === "facilities") {
      this.setState({
        isModalOpen: true,
        uri: "http://www.zionserangoon.org.sg/book-now/church-facilities/"
      });
    }
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("DrawerOpen")
          }}
          centerComponent={{
            text: "Booking",
            style: { color: "#fff" }
          }}
        />
        <Modal
          animationType="slide"
          visible={this.state.isModalOpen}
          onRequestClose={() => {
            this.setState({ isModalOpen: false });
          }}
        >
          <WebView source={{ uri: this.state.uri }} />
        </Modal>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress("facilities")}
          >
            <Image source={require("../images/Church-Facilities.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress("flowers")}
          >
            <Image source={require("../images/Sanctuary-Flowers.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handlePress("tea")}
          >
            <Image source={require("../images/Sunday-Tea-Offering.jpg")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  button: {
    paddingVertical: 2
  }
});
