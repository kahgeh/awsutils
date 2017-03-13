import * as os from "os";
import * as AWS from 'aws-sdk';
import StackUpCommand from './stackUpCommand'
class Startup {
    public static async  main() : Promise<number> {

        this.initializeAws();
        var stackUpCommand= new StackUpCommand('test');
        await stackUpCommand.run();
        return 0;
    }

    public static initializeAws()
    {
        var homePath = os.homedir();
        AWS.config.loadFromPath(`${homePath}/.aws/ttTest.json`);
    }
}


Startup.main();
