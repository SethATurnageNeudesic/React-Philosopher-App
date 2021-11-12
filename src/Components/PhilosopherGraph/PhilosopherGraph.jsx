import "./PhilosopherGraph.css";
import PhilosopherGraphNode from "../../Components/PhilosopherGraphNode/PhilosopherGraphNode.js";

import { React, useState } from "react";

function template() {
  return (
    <div>
        <h1>PhilosopherGraph</h1>
      <div className="philosopher-graph-wrapper">
        <PhilosopherGraphNode philosopherName={'Socrates'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Zoroaster'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Pythagoras'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Aristotle'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Zeno'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Epicurus'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Seneca'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Heraclitus'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Plotinus'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'St. Thomas Acquinas'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Parmenides'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Anaximander'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Democritus'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Voltaire'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Kant'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Hume'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Hegel'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Kierkegaard'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Nietzsche'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Freud'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Satre'} description={"description here"} />
        <PhilosopherGraphNode philosopherName={'Camus'} description={"description here"} />    
        <PhilosopherGraphNode philosopherName={'Jaspers'} description={"description here"} />
      </div>
    </div>
  );
};

export default template;
