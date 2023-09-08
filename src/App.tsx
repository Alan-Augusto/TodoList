import { useState } from 'react';
import Task from './components/Task';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='Header'>
        <h2>Lista de Tarefas</h2>
        <input placeholder='O que você precisa fazer?'/>
        <button>Adicionar</button>
      </div>
      <div className='List'>
        <Task
          title = 'Fazer café'
          description='Fazer forte e sem açúcar'
        />

        <Task
          title = 'Fazer café'
          description='Fazer forte e sem açúcar'
        />

        <Task
          title = 'Fazer café'
          description='Fazer forte e sem açúcar'
        />
      </div>

    </div>
  )
}

export default App
