This prototype study is derived from

[02-node-apps-w-rig](https://github.com/ApolloTang/study--rush--node-app/tree/main/02-node-apps-w-rig)

Added: Typescript's project reference. With project reference IDE work out of the box, no need to prebuild with:

```
Rush build:watch
```

⚠️ The only problem is json need to add to the includes field in tsconfig-base.json:

```
  "include": [
    "../../../../../src/**/*.ts", 
    "../../../../../src/**/*.json"  // <---- !
   ]
``` 
see: 
[https://github.com/microsoft/TypeScript/issues/25636](https://github.com/microsoft/TypeScript/issues/25636)

However, include json breaks eslint because eslint is tied to heft typescript task, which read the tsconfig's include field. Unable to lint json it fails -- so we disable linting in typescript.json.   