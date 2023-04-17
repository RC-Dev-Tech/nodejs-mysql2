import { IExample } from "./base";

export class ExampleCenter {
    private static instance : ExampleCenter;

    static getInstance () : ExampleCenter {
        if (!ExampleCenter.instance){
            ExampleCenter.instance = new ExampleCenter ();
        }
        return ExampleCenter.instance;
    }

    public run(example: IExample ) {
       if(example === null || undefined) {
         console.log(`run example error!`);
         return;
       }

       example.run();
    }
}