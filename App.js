import React from "react";
import { ScrollView, Text, StyleSheet, ToastAndroid } from "react-native";
import HTMLView from "react-native-htmlview";

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
      <ScrollView style={{ flex: 1 }}>
        <Text>{this.state.data.title}</Text>
        <HTMLView value={htmlToShow} stylesheet={styles} />
      </ScrollView>
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
          title: responseData[2].title.rendered,
          content: responseData[2].content.rendered
        });
      })
      .done();
  }
}
const styles = StyleSheet.create({
  a: {
    fontWeight: "300",
    color: "#83d87d"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
