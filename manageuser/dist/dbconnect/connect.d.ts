import { Db } from "mongodb";
declare class connectdb {
    private client;
    private database;
    constructor();
    connect(): Promise<void>;
    getdb(): Db;
}
declare const _default: connectdb;
export default _default;
//# sourceMappingURL=connect.d.ts.map