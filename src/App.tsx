import React from "react";
import { Root } from "native-base";
import { ApplicationContainer } from "./components/containers/application-container";

export default class App extends React.Component {
  render() {
    return (
      <Root>
          <ApplicationContainer />
      </Root>      
    )
  }
}