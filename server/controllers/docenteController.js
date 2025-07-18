const model = require('../models/docenteModel');
const auth = require('../services/auth');

const docenteController = {
    getAllDocentes: async (req, res) => {
        try {
            res.status(200).json(
                await model.getAllDocentes()
            )
        } catch (error) {
            console.error("Error to getAllDocentes in docenteController: " + error.message);
            res.status(400).json({
                error: "Erro ao obter lista de docentes"
            })
        }
    },

    getDocente: async (req, res) => {
        try {
            const matricula = req.params.matricula;
            docente = await model.getDocenteByMatricula(matricula);
            if (!docente){
                res.status(400).json({error: "Docente não encontrado"});
                return;
            }
            res.status(200).json({
                "nome": docente.nome,
                "cpf": docente.cpf,
                "matricula": docente.matricula,
                "foto": docente.foto,
                "admissao": docente.admissao
            });
        } catch (error) {
            console.error("Error to getDocentes in docenteController: " + error.message);
            res.status(400).json({
                error: "Erro ao obter docente"
            })
        }
    },

    getDocenteByCPF: async (cpf) => {
        return model.getDocenteByCPF(cpf)
    },

    authenticate: async (req, res) => {
        const {matricula, cpf, senha} = req.body;
        try {
            let usuario = null;
            if (matricula && senha) {
                usuario = await model.getDocenteByMatricula(matricula,senha);
            } else if (cpf && senha) {
                usuario = await model.getDocenteByCPF(cpf,senha);
            } else {
                res.status(400).json({
                    error: "login and passwod can not be empty."
                })
                return;
            }

            if (usuario) {
                if (auth.authenticate(usuario, senha)) {
                    res.send({
                        "nome": usuario.nome,
                        "cpf": usuario.cpf,
                        "matricula": usuario.matricula,
                        "foto": usuario.foto,
                        "admissao": usuario.admissao
                    });
                    return;
                };
                res.status(400).json({
                    error: "Credenciais incorretas."
                });
                return;
            } else {
                res.status(400).json({
                    error: "Credenciais incorretas."
                });
                return;
            }      
        } catch (error) {
            console.error("Error to authenticate in docenteController: " + error.message);
            res.status(400).json({
                error: "Erro ao autenticar"
            });
        }
    },

}

module.exports = docenteController;