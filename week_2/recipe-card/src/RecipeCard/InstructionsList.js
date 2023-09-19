import React from "react";

export default function InstructionsList(prop) {
  // props = properties; go from parent to children

  const { instructions } = prop;

  return (
    <div>
      <h3>Instructions</h3>
      <ol>
        {instructions.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    </div>
  );
}
