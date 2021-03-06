import React, { useState } from 'react';

function Ex01() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  function handleAdd() {
    setTech([...tech, 'Node.js' ]);
  }
  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}
export default Ex01;
