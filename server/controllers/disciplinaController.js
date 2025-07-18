const disciplinaModel = require('../models/disciplinaModel');

const disciplinaController = {
    getAllDisciplinas: async (req, res)  => {
        try {
            res.status(200).json(
                await disciplinaModel.getAllDisciplinas()
            )
        } catch (error) {
            console.error("Error to getAllDisciplinas in disciplinaController: " + error.message);
            res.status(400).json({
                error: "Erro ao obter lista de disciplinas"
            })
        }
    },

    getDisciplina: async (req, res) => {
        try {
            const disciplina = await disciplinaModel.getDisciplina(req.params.id)
            if (disciplina) {
                res.status(200).json(
                    disciplina
                )
                return;
            };
            res.status(404).json({
                message: "Disciplina não encontrada"
            });
            return;
        } catch (error) {
            console.error("Error to getAllDisciplinas in disciplinaController: " + error.message);
            res.status(400).json({
                error: "Erro ao obter disciplina"
            })
        }
    }
}

module.exports = disciplinaController;