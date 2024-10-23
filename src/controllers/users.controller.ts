import { Request, response, Response } from "express";
import { HTTP_STATUS_CODE } from "../types/http-status-codes";
import User from "../models/user";

class UsersController {

    /*
    getAll(req: Request, res: Response) {
        User.find({}).then((response) => {
            res.send(response as UserType);
        }).catch(() => {
            res.sendStatus(HTTP_STATUS_CODE.SERVER_ERROR);
        });
    }
    */

    async getAll(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.send(users);
        } catch (e) {
            console.log('server error:', e);
            res.send(HTTP_STATUS_CODE.SERVER_ERROR);
        }
    }
}

const controller = new UsersController();

export default controller;