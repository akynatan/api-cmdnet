import { Contrato } from "../model/Contrato";

export interface IContratoRepository {
    rotaTeste(): Promise<boolean>;
    cancelamento(): Promise<boolean>;
    assinatura(number: number, clientName: string, clientTxId: string, description: string, status: object, stage: object, beginContractVigency: string, endContractVigency: string, services: Array<Object>): Promise<unknown>;
    retorno_assinatura(action: string, success: boolean, message: string, code: number, subscription_id: string): Promise<boolean>;
}