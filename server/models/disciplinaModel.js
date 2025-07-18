const listaDisciplinas = require('../db/disciplinas.json');

const disciplinaModel = {
    getAllDisciplinas: async () => {
        return listaDisciplinas;
    },

    getDisciplina: async (codigo) => {
        console.log(listaDisciplinas)
        const disciplina = listaDisciplinas.find(discp => 
            (discp.codigo === codigo)
        );
        return disciplina;
    }
};

module.exports = disciplinaModel;
