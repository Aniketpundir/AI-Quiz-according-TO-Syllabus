import React, { useState } from "react";

const questions = [
  // === Unit 1 ===
  {
    question: "What does AI stand for?",
    options: [
      "Artificial Integration",
      "Automated Interface",
      "Artificial Intelligence",
      "Algorithmic Intelligence",
    ],
    answer: 2,
  },
  {
    question: "Which layer in OS handles communication with hardware?",
    options: ["User Interface", "Kernel", "Shell", "Service Layer"],
    answer: 1,
  },
  {
    question: "What is the core technique behind AI?",
    options: [
      "Hardcoding",
      "Rule-based Systems",
      "Learning from data",
      "Compilation",
    ],
    answer: 2,
  },
  {
    question: "Which is an uninformed search technique?",
    options: ["A* Search", "Greedy Best First", "DFS", "Bayes Search"],
    answer: 2,
  },
  {
    question: "What is a Constraint Satisfaction Problem (CSP)?",
    options: [
      "A problem with fixed outcomes",
      "A problem where variables must satisfy constraints",
      "A game problem",
      "An unsolvable issue",
    ],
    answer: 1,
  },
  {
    question: "What type of agent solves problems using search?",
    options: [
      "Reactive agent",
      "Learning agent",
      "Problem-solving agent",
      "Utility agent",
    ],
    answer: 2,
  },
  {
    question: "Which year marked the birth of AI as a field?",
    options: ["1945", "1956", "1980", "1995"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a foundation of AI?",
    options: ["Mathematics", "Neuroscience", "Physics", "Computer Science"],
    answer: 2,
  },
  {
    question: "Which of these is an informed search algorithm?",
    options: ["Breadth-first Search", "DFS", "A*", "Depth-Limited Search"],
    answer: 2,
  },
  {
    question: "What is the purpose of a heuristic in AI?",
    options: [
      "To reduce memory",
      "To provide domain knowledge",
      "To guess the best path",
      "To sort data",
    ],
    answer: 2,
  },

  // === Unit 2 ===
  {
    question: "Which logic uses true/false values?",
    options: [
      "Predicate Logic",
      "Propositional Logic",
      "Fuzzy Logic",
      "Boolean Algebra",
    ],
    answer: 1,
  },
  {
    question: "Which structure stores relations and values in frames?",
    options: ["Neural Net", "Slot-filler", "Search Tree", "Graph"],
    answer: 1,
  },
  {
    question: "What does unification do in predicate logic?",
    options: [
      "Adds variables",
      "Matches expressions",
      "Resolves errors",
      "Cleans data",
    ],
    answer: 1,
  },
  {
    question: "A knowledge-based agent must contain:",
    options: ["Sensor", "Knowledge base", "Randomizer", "Controller"],
    answer: 1,
  },
  {
    question: "Strong slot-filler structures are used for:",
    options: [
      "Simple logic",
      "Procedural tasks",
      "Complex relational data",
      "Basic data",
    ],
    answer: 2,
  },
  {
    question: "Propositional logic is limited because it:",
    options: [
      "Can’t handle true/false",
      "Lacks quantifiers",
      "Is probabilistic",
      "Can’t use slots",
    ],
    answer: 1,
  },
  {
    question: "Which is an issue in knowledge representation?",
    options: [
      "Language Translation",
      "Uncertainty",
      "Storage Space",
      "Randomness",
    ],
    answer: 1,
  },
  {
    question: "What represents facts and rules in an expert system?",
    options: ["Knowledge Base", "Search Tree", "Syntax Net", "Bayesian Net"],
    answer: 0,
  },
  {
    question: "Resolution is used to:",
    options: [
      "Add rules",
      "Detect contradictions",
      "Remove facts",
      "Normalize data",
    ],
    answer: 1,
  },
  {
    question: "A filler structure must have:",
    options: [
      "Slots and values",
      "Only rules",
      "Only inference engine",
      "No metadata",
    ],
    answer: 0,
  },

  // === Unit 3 ===
  {
    question: "Bayes Rule is used to:",
    options: [
      "Create logic",
      "Update probability",
      "Structure data",
      "Detect anomalies",
    ],
    answer: 1,
  },
  {
    question: "A Bayesian Network represents:",
    options: ["Graphs", "Neurons", "Conditional Probabilities", "Logs"],
    answer: 2,
  },
  {
    question: "Neural networks are inspired by:",
    options: ["Bacteria", "Circuits", "Human brain", "Machines"],
    answer: 2,
  },
  {
    question: "Conditional probability calculates:",
    options: [
      "Total outcomes",
      "Joint events",
      "Probability given condition",
      "Error margin",
    ],
    answer: 2,
  },
  {
    question: "What are the nodes in a Bayesian Network?",
    options: ["Rules", "Events/variables", "Classes", "Registers"],
    answer: 1,
  },
  {
    question: "Fuzzy Logic deals with:",
    options: [
      "Only true/false",
      "Range of truth",
      "Binary inputs",
      "Strict logic",
    ],
    answer: 1,
  },
  {
    question: "Genetic Algorithms are inspired by:",
    options: ["Geology", "Thermodynamics", "Natural selection", "Fuzzy logic"],
    answer: 2,
  },
  {
    question: "Which operation is used in GA to produce new population?",
    options: ["Prune", "Train", "Crossover", "Backpropagation"],
    answer: 2,
  },
  {
    question: "Inference in Bayesian networks means:",
    options: [
      "Drawing conclusions",
      "Searching graph",
      "Optimizing paths",
      "Scaling weights",
    ],
    answer: 0,
  },
  {
    question: "What are chromosomes in Genetic Algorithms?",
    options: [
      "Memory units",
      "Encoding of possible solutions",
      "Neural weights",
      "Syntax trees",
    ],
    answer: 1,
  },

  // === Unit 4 ===
  {
    question: "What is state-space planning?",
    options: [
      "Modeling search problems",
      "Using hardware states",
      "Training models",
      "Sorting",
    ],
    answer: 0,
  },
  {
    question: "Conditional planning involves:",
    options: [
      "Random moves",
      "No conditions",
      "Different possible future outcomes",
      "Sorting paths",
    ],
    answer: 2,
  },
  {
    question: "Reinforcement learning is based on:",
    options: [
      "Rewards and penalties",
      "Genetic operations",
      "Logic rules",
      "Boolean values",
    ],
    answer: 0,
  },
  {
    question: "Inductive learning derives rules from:",
    options: ["Rules", "Facts", "Examples", "Solutions"],
    answer: 2,
  },
  {
    question: "Statistical learning focuses on:",
    options: [
      "Binary trees",
      "Fixed rules",
      "Data distribution",
      "Hard constraints",
    ],
    answer: 2,
  },
  {
    question: "In multi-agent planning, agents:",
    options: [
      "Ignore others",
      "Compete only",
      "Plan collaboratively",
      "Break down tasks",
    ],
    answer: 2,
  },
  {
    question: "Continuous planning means:",
    options: [
      "Once only",
      "One-step plans",
      "Ongoing re-planning",
      "Backup plans",
    ],
    answer: 2,
  },
  {
    question: "What is reinforcement in RL?",
    options: [
      "Retesting data",
      "Feedback to learn",
      "Weight tuning",
      "Fact-based control",
    ],
    answer: 1,
  },
  {
    question: "Planning is often combined with:",
    options: ["Learning", "Memory", "Sorting", "Classification"],
    answer: 0,
  },
  {
    question: "State space is defined by:",
    options: [
      "Action sets",
      "Possible world configurations",
      "Error models",
      "Memory cells",
    ],
    answer: 1,
  },

  // === Unit 5 ===
  {
    question: "An expert system shell provides:",
    options: [
      "User interface",
      "Hardware",
      "Framework for building expert systems",
      "Only database",
    ],
    answer: 2,
  },
  {
    question: "What is the Minimax algorithm used for?",
    options: ["Classification", "Game playing", "Sorting", "Optimization"],
    answer: 1,
  },
  {
    question: "Alpha-Beta pruning is applied in:",
    options: ["Heuristics", "Sorting", "Minimax trees", "Clustering"],
    answer: 2,
  },
  {
    question: "Swarm Intelligence is inspired by:",
    options: ["Beehive", "Ant behavior", "Fungi", "Rainfall"],
    answer: 1,
  },
  {
    question: "What do ants leave behind in ACO?",
    options: ["Signals", "Pheromones", "Scent markers", "Sound"],
    answer: 1,
  },
  {
    question: "Imperfect decisions in games are due to:",
    options: ["Lack of memory", "Time constraints", "Bad code", "Poor UX"],
    answer: 1,
  },
  {
    question: "Which system makes rule-based decisions?",
    options: [
      "Genetic algorithm",
      "Neural network",
      "Expert system",
      "Swarm system",
    ],
    answer: 2,
  },
  {
    question: "Which system uses population of agents?",
    options: [
      "Expert System",
      "Swarm Intelligence",
      "Reinforcement Learning",
      "Predicate Logic",
    ],
    answer: 1,
  },
  {
    question: "What is knowledge acquisition?",
    options: [
      "Data removal",
      "Data cleaning",
      "Collecting expert knowledge",
      "Splitting logic",
    ],
    answer: 2,
  },
  {
    question: "Which algorithm is commonly used in swarm intelligence?",
    options: [
      "PageRank",
      "Backpropagation",
      "Ant Colony Optimization",
      "Minimax",
    ],
    answer: 2,
  },
];

export default function AIQuizApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionClick = (index) => setSelected(index);

  const handleNext = () => {
    const isCorrect = selected === questions[current].answer;
    if (isCorrect) setScore(score + 1);
    setUserAnswers([
      ...userAnswers,
      { selected, correct: questions[current].answer },
    ]);
    setSelected(null);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-xl bg-white">
      {!finished ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Q{current + 1}. {questions[current].question}
          </h2>
          <ul className="space-y-2">
            {questions[current].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`p-3 border rounded cursor-pointer ${
                  selected === index ? "bg-blue-200" : "hover:bg-gray-100"
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {current + 1 < questions.length ? "Next" : "Finish"}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-3 text-lg">
            Your Score: {score} / {questions.length}
          </p>
          <div className="text-left mt-6">
            <h3 className="font-semibold mb-2">Answer Review:</h3>
            <ul className="space-y-3">
              {questions.map((q, index) => {
                const user = userAnswers[index];
                const isCorrect = user.selected === user.correct;
                return (
                  <li
                    key={index}
                    className={`p-3 border rounded ${
                      isCorrect ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <p className="font-medium">
                      Q{index + 1}. {q.question}
                    </p>
                    <p>
                      Your Answer: {q.options[user.selected] || "No Answer"}
                    </p>
                    {!isCorrect && <p>Correct Answer: {q.options[q.answer]}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
