import React, { useState } from 'react';

const AdicionarAluno = ({ onAdicionar }) => {

    const [novoAluno, setNovoAluno] = useState({
        nome: '',
        sobrenome: '',
        matricula: ''
    });

    const handleChange = (e) => {
        setNovoAluno({
            ...novoAluno,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdicionar({
            nome: novoAluno.nome,
            sobrenome: novoAluno.sobrenome,
            matricula: parseInt(novoAluno.matricula, 10)
        });
        setNovoAluno({ nome: '', sobrenome: '', matricula: '' });
    };

    return (
        <section className='container'>
            <h2>Adicionar Novo Aluno</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input
                        className='campo'
                        type="text"
                        name="nome"
                        value={novoAluno.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Sobrenome: </label>
                    <input
                        className='campo'
                        type="text"
                        name="sobrenome"
                        value={novoAluno.sobrenome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Matrícula: </label>
                    <input
                        className='campo'
                        type="number"
                        name="matricula"
                        value={novoAluno.matricula}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Adicionar Aluno</button>
            </form>
        </section>
    );
};

export default AdicionarAluno;
