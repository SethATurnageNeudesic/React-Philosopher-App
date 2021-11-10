import "./PhilosopherGraphNode.css";
import React from "react";

function template() {
  return (
    <div class="philosopher-node">
      {this.props.philosopherName}
    </div>
  );
};

export default template;
