import { Config } from "./config"
import { IExample } from "./core/base";
import { ExampleCenter } from "./core/example_center"
import { Example1 } from "./examples/example1";
import { Example2 } from "./examples/example2";

export class App {
    protected getExample(): IExample {
      let mode: number = Config.getInstance().getParam ("exsample_mode")
      switch(mode) {
        case 1: return new Example1();
        case 2: return new Example2();
      }
    }

    run () {
      ExampleCenter.getInstance().run(this.getExample());
    }
}