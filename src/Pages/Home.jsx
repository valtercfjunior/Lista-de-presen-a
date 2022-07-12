import "./Home.css";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function newCard() {
    const newStudent = {
      name: name,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/valtercfjunior')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  },[]) 

  return (
    <div className="container">
      <header>
      <h1>Lista de Presença</h1>
      <div>
        <h3>{user.name}</h3>
        <img src={user.avatar} alt="Perfil" /></div>        
      </header>
      
      <input
        type="text"
        placeholder="Nome do Aluno"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={newCard}>Adicionar</button>

      {students.map((student, key) => (
        <Card name={student.name} time={student.time} key={key}></Card>
      ))}
    </div>
  );
}
