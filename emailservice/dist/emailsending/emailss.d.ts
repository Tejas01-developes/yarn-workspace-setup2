declare class emailsendingservice {
    private transport;
    constructor();
    sendemails(to: string, sub: string, text: string): Promise<void>;
}
declare const _default: emailsendingservice;
export default _default;
//# sourceMappingURL=emailss.d.ts.map