import "./PhilosopherGraph.css";
import PhilosopherGraphNode from "../../Components/PhilosopherGraphNode/PhilosopherGraphNode.js";

import { React, useState } from "react";

function template() {
  return (
    <div >
        <h1>PhilosopherGraph</h1>
      <div className="philosopher-graph-wrapper">
        <PhilosopherGraphNode philosopherName={'Socrates'} />
        <PhilosopherGraphNode philosopherName={'Zoroaster'} />
        <PhilosopherGraphNode philosopherName={'Pythagoras'} />
        <PhilosopherGraphNode philosopherName={'Aristotle'} />
        <PhilosopherGraphNode philosopherName={'Zeno'} />
        <PhilosopherGraphNode philosopherName={'Epicurus'} />
        <PhilosopherGraphNode philosopherName={'Seneca'} />
        <PhilosopherGraphNode philosopherName={'Heraclitus'} />
        <PhilosopherGraphNode philosopherName={'Plotinus'} />
        <PhilosopherGraphNode philosopherName={'St. Thomas Acquinas'} />
        <PhilosopherGraphNode philosopherName={'Parmenides'} />
        <PhilosopherGraphNode philosopherName={'Democritus'} />
        <PhilosopherGraphNode philosopherName={'Voltaire'} />
        <PhilosopherGraphNode philosopherName={'Kant'} />
        <PhilosopherGraphNode philosopherName={'Hume'} />
        <PhilosopherGraphNode philosopherName={'Hegel'} />
        <PhilosopherGraphNode philosopherName={'Kierkegaard'} />
        <PhilosopherGraphNode philosopherName={'Nietzsche'} />
        <PhilosopherGraphNode philosopherName={'Freud'} />
        <PhilosopherGraphNode philosopherName={'Satre'} />
        <PhilosopherGraphNode philosopherName={'Camus'} />    
        <PhilosopherGraphNode philosopherName={'Jaspers'} />
      </div>
    </div>
  );
};

export default template;
