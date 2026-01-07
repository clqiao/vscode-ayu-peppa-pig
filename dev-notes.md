### Description
- 这个库 fork 自 ayu-theme 官方库，ayu-theme 官方库 fork 自 Sublime Text 4 Ayu theme 官方库。
- `npm i` 即 npm install 命令，安装需要的依赖库, 修改版本号，或者 package.json 后需要执行 npm i，以更新 package-lock.json 文件。
- npm run build，编译生成 json 文件。
- npm start，build 并且进入 watch 模式，文件有变化自动编译。

## publish
### update package-lock.json file
npm i

### generate theme JSON files
npx tsx ./src/build.ts
npx vsce package
