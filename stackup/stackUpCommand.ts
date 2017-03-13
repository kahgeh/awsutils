import * as AWS from 'aws-sdk';
import * as fs from "async-file";
import supportedPlatforms from "./constants/supportedPlatforms";
export default class StackUpCommand {
    stackName:string;
    stackDescription:string;
    cfn:AWS.CloudFormation;
    /**
     *
     */
    constructor(stackName:string, stackDescription:string) {
        this.stackName=stackName;
        this.stackDescription = stackDescription;
        this.cfn=new AWS.CloudFormation();
    }

    public async run(){
        
        if(await this.Exists())
        {
            await this. updateStack();
            return;
        }
        await this.createStack();    
    }

    private async Exists():Promise<boolean> {
        
        var result= await this.cfn.describeStacks().promise();

        for( var i in result.Stacks)
        {
            var stack:AWS.CloudFormation.Stack=result.Stacks[i];
            if(stack.StackName == this.stackName)
            {
                return true;
            }
        }
        return false;    
    }

    private  async  createStack() : Promise<number> {

        var createStackRequest : AWS.CloudFormation.Types.CreateStackInput= {
            StackName : this.stackName,
            TemplateBody : this.stackDescription,
            Capabilities : ['CAPABILITY_IAM']
        };

        var result=await this.cfn.createStack(createStackRequest).promise();
        console.log(`created stack id = ${result.StackId}`);
        
        return 0;
    }
 
    private  async updateStack() : Promise<number>
    {
        var updateStackRequest : AWS.CloudFormation.Types.UpdateStackInput= {
            StackName : this.stackName,
            TemplateBody : this.stackDescription,
            Capabilities : ['CAPABILITY_IAM']
        };

        var result =await this.cfn.updateStack(updateStackRequest).promise();
        console.log(`updated stack id = ${result.StackId}`);
        return 0;
    }
}

