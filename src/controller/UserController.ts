import { Request, Response } from "express";
import User from '../database/schemas/User';

class UserController {
    async register(request: Request, response: Response) {

        const { name, email, password } = request.body;

        try {
            const userExists = await User.findOne({ email });
            if(userExists) {
                return response.status(400).json({
                    error: "Não foi possível criar o novo usuário.",
                    message: "Usuário já existe."
                })
            }
            const user = await User.create({name, email, password});

            return response.json(user);
        } catch(err) {
            console.log(err.message);
            return response.status(500).json({
                error: 'Falha ao registrar',
                message: err
            });
        }
    }
}

export default new UserController;