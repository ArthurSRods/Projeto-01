import React from 'react';

const ListaAlunos = ({ alunos }) => {
    const alunosOrdenados = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <section className='container'>
            <h1>Lista de Alunos</h1>
            {alunosOrdenados.map((aluno) => (
                <p key={aluno.matricula}>
                    Nome: {aluno.nome} {aluno.sobrenome}, Matrícula: {aluno.matricula}
                </p>
            ))}
        </section>
    );
};

export default ListaAlunos;
