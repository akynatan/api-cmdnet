import Express from "express";
import { Controller, Post, ClassMiddleware } from "@overnightjs/core";
import { injectable, inject } from "tsyringe";
import { IContratoRepository } from "./repository/IContratoRepository";
import { ResponseFactory } from "../shared/ResponseFactory";

@injectable()
@Controller("contrato")
export class ContratoController {
    constructor(@inject("ContratoRepository") private _contratoRepository: IContratoRepository) { }

    @Post("/")
    rotaTeste(req: Express.Request, res: Express.Response, next: Function): void {
        this._contratoRepository.rotaTeste().then(success => {
            res.json(ResponseFactory.success(success));
        }).catch(err => {
            res.status(500).json(ResponseFactory.error("Unexpected error"));
        });
    }

    @Post("assinatura")
    assinatura(req: Express.Request, res: Express.Response, next: Function): void {
        const {Number, ClientName, ClientTxId, Description, Status, Stage, BeginContractVigency, EndContractVigency, Services} = req.body;

        this._contratoRepository.assinatura(Number,
                                            ClientName,
                                            ClientTxId,
                                            Description,
                                            Status,
                                            Stage,
                                            BeginContractVigency,
                                            EndContractVigency,
                                            Services
                                ).then(success => {
            res.json(ResponseFactory.success(success));
        }).catch(err => {
            res.status(500).json(ResponseFactory.error("Unexpected error"));
        });
    }

    @Post("cancelamento")
    cancelamento(req: Express.Request, res: Express.Response, next: Function): void {
        this._contratoRepository.cancelamento().then(success => {
            res.json(ResponseFactory.success(success));
        }).catch(err => {
            res.status(500).json(ResponseFactory.error("Unexpected error"));
        });
    }

    @Post("retorno_assinatura")
    retorno_assinatura(req: Express.Request, res: Express.Response, next: Function): void {
        const {action, success, message, code, subscription_id} = req.body;
        
        this._contratoRepository.retorno_assinatura(String(action), Boolean(success), String(message), Number(code), String(subscription_id)).then(success => {
            res.json(ResponseFactory.success(success));
        }).catch(err => {
            res.status(500).json(ResponseFactory.error("Unexpected error"));
        });
    }
}