import { useState } from 'react';

export default function inputs(){

    const [nome, setNome] = useState<string>("");
    const [curso, setCurso] = useState<string>("");

    return(
        <div>
            <div className="campoForm">
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
            </div>
            <div className="campoForm">
                <label>Curso:</label>
                <input type="text" value={curso} onChange={(evt) => setCurso(evt.target.value)}/>
            </div>
        </div>
    )
}