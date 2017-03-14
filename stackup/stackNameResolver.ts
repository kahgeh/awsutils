import * as fs from "async-file";
import StackUpOptions from  './stackUpOptions';
export default class stackNameResolver
{

    private options : StackUpOptions;
    constructor() {
        this.options= new StackUpOptions();
        
    }

    public async getStackName (){
      
        if (this.options.Name != null ||this.options.Name !=undefined)
        {
            return this.options.Name;
        }
        var fileName= await this.getNameFromFile();

        fileName
    }

    private async getNameFromFile ()  : Promise<string>
    {
        let currentDirectory=process.argv0;
        var fileNames=await fs.readdir(currentDirectory);
        var cfnTemplateFileNames:string[]=fileNames.filter((val)=> 
            (val.search("repo") ==0 && ( val.search(".yml") >0 || val.search(".json") > 0 )));
        
        return cfnTemplateFileNames[0];
    }

    private string trimEnd(endString:string)
    {

    }
 
}