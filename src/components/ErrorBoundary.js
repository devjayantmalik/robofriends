import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, message: "" };

  componentDidCatch(error) {
    this.setState({ hasError: true, message: error });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error Occured: {this.state.message}</h1>;
    }

    return this.props.children;
  }
}
