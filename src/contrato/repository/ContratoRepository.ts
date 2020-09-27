import { IContratoRepository } from "./IContratoRepository";
import { injectable } from "tsyringe";
import { MariaDB } from "../../database/MariaDB";
import { Contrato } from "../model/Contrato";

@injectable()
export class ContratoRepository implements IContratoRepository {
    constructor(private _mariadb: MariaDB) { }

    async rotaTeste(): Promise<boolean> {
        return true;
    }

    async assinatura(number: number, clientName: string, clientTxId: string, description: string, status: object, stage: object, beginContractVigency: string, endContractVigency: string, services: Array<Object>): Promise<unknown> {
        const cpfCliente = clientTxId.replace(/[^\d]+/g,'');
        const sqlMa = `
            select c.id,
                   p.tx_id,
                   c.description,
                   p.cell_phone_1,
                   p.cell_phone_2,
                   p.email,
                   p.name
            from dbemp00408.contracts c
            join dbemp00408.people p
            where c.id = ? and p.tx_id = ?;
        `;
        const resultMa = await this._mariadb.query(sqlMa, [number, cpfCliente]);
        const { id, txtId, descriptionContract, cellPhone1, cellPhone2, email, name } = resultMa[0];

    
        return "resultMa";
    }

    async cancelamento(): Promise<boolean> {
        return true;
    }

    async retorno_assinatura(action: string, success: boolean, message: string, code: number, subscription_id: string): Promise<boolean> {
        

        return true;
    }

}