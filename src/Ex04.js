import React, { useState, useEffect, useMemo } from 'react';

function Ex04() {
  /*
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);
  */
  const [tech, setTech] = useState([]);
  const[newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech ]);
    setNewTech('');
  }

  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br/>
      <input value={newTech} onChange={(e)=>{setNewTech(e.target.value)}}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}
export default Ex04;
