import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import HTMLView from "react-native-htmlview";
import { Header } from "react-native-elements";

var REQUEST_URL = "https://www.zionserangoon.org.sg/wp-json/wp/v2/pages";

export default class DetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: { title: "Loading Title..", content: "Loading Content.." }
    };
  }

  render() {
    htmlToShow = this.state.data.content;

    return (
      <View>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("DrawerOpen")
          }}
          centerComponent={{
            text: this.state.data.title,
            style: { color: "#fff" }
          }}
        />
        <ScrollView style={styles.container}>
          <HTMLView value={htmlToShow} stylesheet={htmlStyles} />
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        //TODO: This shouldn't be hardcoded, instead search for 2msbulletin
        this.setState({
          data: {
            title: responseData[2].title.rendered,
            content: responseData[2].content.rendered
          }
        });
      })
      .done();
  }
}
const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: "300",
    color: "#83d87d"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  span: {
    textDecorationLine: "underline"
  },
  p: {
    fontSize: 16
  }
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4
  }
});
