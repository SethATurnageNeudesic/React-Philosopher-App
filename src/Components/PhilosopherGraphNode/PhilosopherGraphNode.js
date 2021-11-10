import React from "react";
import template from "./PhilosopherGraphNode.jsx";

class PhilosopherGraphNode extends React.Component {
  constructor(props) {
      super(props)
      this.philosopherName = this.philosopherName.bind(this)
  }
  render() {
    return template.call(this);
  }
  philosopherName() {
    this.props.philosopherName(this.props.philosopherName);
  }
}

export default PhilosopherGraphNode;
