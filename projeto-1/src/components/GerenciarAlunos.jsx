import React, { useState } from 'react';
import ListaAlunos from './SecondComponent';
import AdicionarAluno from './AdicionarAluno';

const GerenciarAlunos = () => {
    const [alunos, setAlunos] = useState([
        {
            nome: 'Arthur',
            sobrenome: 'Rodrigues',
            matricula: 2324290068
        },
        {
            nome: 'Carlos',
            sobrenome: 'Santos',
            matricula: 2324290069
        },
        {
            nome: 'Roberta',
            sobrenome: 'Soares',
            matricula: 2324290062
        },
        {
            nome: 'Carla',
            sobrenome: 'Teles',
            matricula: 2324290078
        },
        {
            nome: 'Andre',
            sobrenome: 'Souza',
            matricula: 2324290077
        },
        {
            nome: 'Vania',
            sobrenome: 'Chagas',
            matricula: 2324290067
        },
    ]);

    const adicionarAluno = (aluno) => {
        setAlunos([...alunos, aluno]);
    };

    return (
        <div>
            <ListaAlunos alunos={alunos} />
            <AdicionarAluno onAdicionar={adicionarAluno} />
        </div>
    );
};

export default GerenciarAlunos;
