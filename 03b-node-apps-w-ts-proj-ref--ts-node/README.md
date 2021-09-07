In this study I added ts-node to node-app-1 to see if I can develope the node-app without tsc compilation. 

The study reveal this idea does not work. 

It is not working because ts-node does not use project reference specified in tsconfig.json. The dependencies are required to compile to dist/ becauase that is where ts-node read the codes (via package.json's typing field).

Found this open issue (have not read): 

[https://github.com/TypeStrong/ts-node/issues/897](https://github.com/TypeStrong/ts-node/issues/897)

[https://github.com/wclr/ts-node-dev/issues/239](https://github.com/wclr/ts-node-dev/issues/239) 