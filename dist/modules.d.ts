interface ModuleClient {
    tx: any;
    query: any;
    txGen: Function;
    queryGen: Function;
}
declare const modules: {
    [key: string]: ModuleClient;
};
export default modules;
