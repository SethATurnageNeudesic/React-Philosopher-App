import "./PhilosopherGraphNode.css";
import React from "react";

function template() {
  return (
    <div class="philosopher-node" onClick={() => this.setState({ expanded: !this.state.expanded})}>
      {this.props.philosopherName}
      <p>State: {this.state.expanded.toString()}</p>
      <Description hidden={!this.state.expanded} description={this.props.description}/>
    </div>
  );
};

function Description(props) {
  return (
  <div hidden={props.hidden}>
    {props.description}
  </div>
  );
}

export default template;
