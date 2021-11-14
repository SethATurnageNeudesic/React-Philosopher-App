import "./PhilosopherGraph.css";
import PhilosopherGraphNode from "../../Components/PhilosopherGraphNode/PhilosopherGraphNode.js";

import { React, useState } from "react";

function template() {
  return (
    <div>
        <h1>PhilosopherGraph</h1>
      <div className="philosopher-graph-wrapper">
        <PhilosopherGraphNode philosopherName={'Socrates'} description={"Socrates marked the end of the Hellenistic era and the beginning of the Socratic era."} />
        <PhilosopherGraphNode philosopherName={'Zoroaster'} description={"Zoraster, also known as Zarathustra was the first monotheist and teacher of a battle between good and evil. Zoroastrianism was the official religion of the Persian Empire, the first empire in history to proclaim universal human rights, a notion of progress, and to ban slavery."} />
        <PhilosopherGraphNode philosopherName={'Pythagoras'} description={"Creator of the pythagorian theorem and founder of pythagorean school of mysticism. Influenced by Axamander and the students of Zoroaster."} />
        <PhilosopherGraphNode philosopherName={'Aristotle'} description={"Student of Plato, who was student of Socrates, Aristotle provided the foundation of modern philosophy. Among other things, this idea of a monotheistic god of nature, natural law, and the idea of 4 causes, which has been adapted into Muslim and Christian theology. He also produced the idea of Eudomonia: or the idea that through reason one can pursue a life which is a balance of happiness and long term fulfilment."} />
        <PhilosopherGraphNode philosopherName={'Zeno'} description={"A former boxer who worked nights to fund his studies, Zeno what the founder of the school of thought known as Stoicism. Influenced by Parmenides."} />
        <PhilosopherGraphNode philosopherName={'Epicurus'} description={"Philosopher who preached friendliness, anonymity, non-violence, and indifference to death, Epicurus was an atheist or quasi-atheist who can be thought of as a precursor to modern humanism. Often contrasted with the stoics because of their belief that life's simple pleasures should be enjoyed, albiet with a good deal of moderation."} />
        <PhilosopherGraphNode philosopherName={'Seneca'} description={"A rich stoic who advised Emperor Nero until he committed suicide by order. A Roman thinker and avowed Stoic, he is known for expanding Zeno's thinking and remaining Stoic while enjoying great wealth."} />
        <PhilosopherGraphNode philosopherName={'Heraclitus'} description={"Influenced by Persian thought and a court philosopher to the Persian King, only fragments of his thoughts remain. However, he is best known for the idea that everything in the world is in a constant state of change, saying 'we only step through the same river twice'. "} />
        <PhilosopherGraphNode philosopherName={'Plotinus'} description={"Revived Platonism, becoming the first neoplatonist. Influenced early Christianity, especially regarding the trinity doctrine."} />
        <PhilosopherGraphNode philosopherName={'St. Thomas Acquinas'} description={"Founder of Catholic Scholasticism. Introduced Aristotle back into the western cannon via Avicenna and founded neo-Artistotlianism."} />
        <PhilosopherGraphNode philosopherName={'Avicenna'} description={"Neoplatonist and medical thinker. Influenced by Plato, Aristotle, and Plotinus, as well as Hippocrates."} />
        <PhilosopherGraphNode philosopherName={'Parmenides'} description={"Influenced by Heraclitus and Xenophanes. Founder of metaphysics and ontology. Separated the idea of the essence of the truth from the 'falibility' of the senses. Known by his poem: 'On Nature', of which only fragments remain."} />
        <PhilosopherGraphNode philosopherName={'Anaximander'} description={"Anaximander was a naturalist philosopher, who contributed to the fields of astronomy, geology, and cosmology. He was primarily influenced by Thales."} />
        <PhilosopherGraphNode philosopherName={'Democritus'} description={"Creator of atomic theory and the idea of 'empty space'. Influenced Aristotle, Epicurus and Pyrrho, as well as modern philosophers such as Montaigne, Spinoza, and Nietzsche."} />
        <PhilosopherGraphNode philosopherName={'Voltaire'} description={"Secularist satyrist and freethinker who satyrized intollerance, unreason, elitism and violence. Influenced by Goethe, Shakespeare, and many others. Died as a freemason, after being convinced by Benjamin Franklin."} />
        <PhilosopherGraphNode philosopherName={'Kant'} description={"Influenced by Decartes, Hume, Plato, Artistotle, Empiricus, and many others, Kant is known for his critique of pure reason, his attempt to reconcile empiricism with rationaism, and his idenitification of a general ethical principle applicable to all conscious beings known as the 'categorical imperative' -- i.e., that all conscious entities must be treated as an end, and not merely a means, in one's conduct towards them."} />
        <PhilosopherGraphNode philosopherName={'Hume'} description={"Influenced by Cicero, Rousseau, Hobbes, and others, Hume is known as a skeptic and empiricist who opposed the idea of innate ideas and causality."} />
        <PhilosopherGraphNode philosopherName={'Empiricus'} description={"Influenced by Pyrrho and Herodotus, among others, empiricus questioned the knowability of anything, questioning the validity of grammar, mathematics, geometry, rhetoric, astrology, and even music."} />
        <PhilosopherGraphNode philosopherName={'Goethe'} description={"Goethe was a playwrite and scientist, most known for his popularization of the Faust myth in his 2 part theater rendition, and his morphology of plants. Goethe was a neo-pagan who influenced the German idealists and believed in the immanence and importance of qualia as experienced through scientific obseration."} />
        <PhilosopherGraphNode philosopherName={'Hegel'} description={"Influenced by Goethe, Heraclitus, Aristotle, Plato, Rousseau, Spinoza, and Schiller, among others, Hegel is known for his origination of the state, civil society disctinction, the hegelian dialectic, and the distinction between positive and negative liberty."} />
        <PhilosopherGraphNode philosopherName={'Kierkegaard'} description={"Influenced by Hegel, Plato, Descartes, Goethe, and Socrates, among others, Kieregaard is known as a Christian existentialist who philosophized on the nature of the absurd, and the necessity of a 'leap of faith' in order to overcome the apparent absurdity of existence. He is known for his idea of a 'Knight of Christ', which is a Christian parallel to the Niezschian Ubermensch."} />
        <PhilosopherGraphNode philosopherName={'Nietzsche'} description={"Influenced by Zoroaster, Parmenides, Kant, Hegel, Schopenhauer, Spinoza, Epicurus, Heraclitus, Doestoyevsky, and Montaigne, among others, Nietzsche is known for his idea of the übermench, his revival of the idea of the eternal return, the idea of the will to power, his distinction between slave and master morality, and most notably, his central project of the 'transvaluation of all values', which he was never able to finish."} />
        <PhilosopherGraphNode philosopherName={'Spinoza'} description={"Influenced by Descartes, the Stoic philosophers, Epicurus, and Hobbes, among others, Spinoza was a rationalist and a dualist who is responsible for modern concepts of the self and the universe."} />
        <PhilosopherGraphNode philosopherName={'Montaigne'} description={"Influenced by Plato, Empiricus, Cicero, Heraclitus, Seneca, Socrates, and Augustine, among otheers, Mantaigne is an essayist known for "} />
        <PhilosopherGraphNode philosopherName={'Freud'} description={"Influenced by Nietzsche, Plato, Schopenhauer, Darwin, and others, Freud is known for his popularization of the idea of the projection, complexes, and the ego, id, and super-ego."} />
        <PhilosopherGraphNode philosopherName={'Satre'} description={"Influenced by Kierkegaard, Hegel, Heidegger, Freud among others, Satre is noted for his attempt to reconcile Marxism with existentialism, his idea of 'nothingness' as a way of being, and his invertion of the Aristotilean idea that essence precedes existence."} />
        <PhilosopherGraphNode philosopherName={'Camus'} description={"Influenced by Dostoevsky, Kafka, Kierkegaard, Nietzshe, Satre and Schopenhauer, Camus is one of the foundational philosophers of absurdism, known for his optimistic absurdist statement that 'one must imagine Sisyphus happy' and for his notion of 'Rebellion against existence' as a foundation for the irrational ways in which human beings deal with the absurdity of life."} />
        <PhilosopherGraphNode philosopherName={'Jaspers'} description={"One of the first neo-Thomists, who revived the ideas of Thomas Acquinas in the present day."} />
        <PhilosopherGraphNode philosopherName={'Thales ( of Miletus)'} description={"Considered a founder of modern science, optionality in investment, and the inventor of 'Thales's' theorem, the oldest mathematical theorem in present use. He also believe that there was a general mind, with it's principles permiating nature."} />
        <PhilosopherGraphNode philosopherName={'Gautama Buddha'} description={"Advocated meditation to release from material wants and needs and to avoid the cycle of death and rebirth."} />
        <PhilosopherGraphNode philosopherName={'Pyrrho'} description={"First skeptic philosopher. Influenced by Xenophanes and Democritus, as well as Bhuddism, or possibly Jainism. Eskewed dogma and was essentially relativist."} />
      </div>
    </div>
  );
};

export default template;
