import './style.css'

type TaskProps  = {
    title: string;
    description: string;
}

export default function Task( {title, description}: TaskProps){
    return(
        <div className="TaskCard">
            <div className='Info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='Actions'>
                <button>Remover</button>
                <button>Iniciar</button>
                <button>Concluir</button>
            </div>
        </div>
    )
}