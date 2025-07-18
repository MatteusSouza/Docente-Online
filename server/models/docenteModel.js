const docentes = require('../db/docentes.json');

const docenteModel = {
    getAllDocentes: async () => {
        const listaDocentes = []
        docentes.forEach( docente => {
            listaDocentes.push({
                "nome": docente.nome,
                // "cpf": docente.cpf,
                // "matricula": docente.matricula,
                "foto": docente.foto,
                "admissao": docente.admissao
            })
        });
        return listaDocentes;
    },

    getDocenteByMatricula: async (matricula) => {
        const docente = docentes.find(docente => 
            (docente.matricula === matricula)
        );
        return docente;
    },
    getDocenteByCPF: async (cpf) => {
        const docente = docentes.find(docente => 
            (docente.cpf === cpf)
        );
        return docente;
    }
};

module.exports = docenteModel;
