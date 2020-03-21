import React, { useState, useEffect } from 'react';

function Ex03() {
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

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={(e)=>{setNewTech(e.target.value)}}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}
export default Ex03;
