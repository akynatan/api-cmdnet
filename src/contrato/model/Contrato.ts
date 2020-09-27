export class Contrato {
    constructor(
        private _id: number,
        private _txId: number,
        private _descriptionContract: string,
        private _cellPhone1: string,
        private _cellPhone2: string,
        private _email: string,
        private _name: string
    ) { }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get txId(): number {
        return this._txId;
    }

    set txId(value: number) {
        this._txId = value;
    }

    get descriptionContract(): string {
        return this._descriptionContract;
    }

    set descriptionContract(value: string) {
        this._descriptionContract = value;
    }

    get cellPhone1(): string {
        return this._cellPhone1;
    }

    set cellPhone1(value: string) {
        this._cellPhone1 = value;
    }

    get cellPhone2(): string {
        return this._cellPhone2;
    }

    set cellPhone2(value: string) {
        this._cellPhone2 = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }
}
