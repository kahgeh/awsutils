import * as yargs from 'yargs';

export default class StackUpOptions {
    private option: { name: string };
    public Name = ()=>{return this.option.name}
    constructor() {
        this.option=yargs.options({
            'name':{
                alias : 'n',
                describe : 'provide the stack name, if it is not provide, it will attempt to resolve it from the yml or json file name, if the file name is app, it will traverse up the folder until it finds a non generic folder name ( generic name includes infrastructure, infra)'
            }
        })
        .help()
        .argv;
    }

    
}