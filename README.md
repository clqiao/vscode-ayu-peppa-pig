![ayu](assets/header.png)

[![Version](https://img.shields.io/visual-studio-marketplace/v/teabyii.ayu?style=flat)](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/teabyii.ayu?style=flat)](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu)

A simple theme with bright colors, available in three variants — dark, light, and mirage. This is the official VS Code port of the [Ayu theme](https://github.com/dempfi/ayu).

## Features

- **6 color themes**: Light, Mirage, and Dark — each with bordered and unbordered variants
- **File icons**: Custom icon theme included
- **[Iosevka font](https://github.com/ayu-theme/vscode-ayu/tree/master/fonts)**: Bundled for a consistent look (as seen in screenshots)

> **Bordered vs Unbordered**: Bordered themes have visible dividers between UI panels. Unbordered themes have a seamless, unified look.

## Install

[Install from the Marketplace](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu), or run:

```shell
ext install teabyii.ayu
```

Then go to `Preferences > Color Theme` and select one of the Ayu variants.

To enable file icons: `Preferences > File Icon Theme > Ayu`.

## Screenshots

### Light

![Light](assets/light.png)
![Light Unbordered](assets/light-unbordered.png)

### Mirage

![Mirage](assets/mirage.png)
![Mirage Unbordered](assets/mirage-unbordered.png)

### Dark

![Dark](assets/dark.png)
![Dark Unbordered](assets/dark-unbordered.png)

## Development

1. `npm i` to install dependencies
2. `npm start` to build the theme in watch mode
3. Press F5 to observe changes in real-time in the debug editor window

### Description
- 这个库 fork 自 ayu-theme 官方库，ayu-theme 官方库 fork 自 Sublime Text 4 Ayu theme 官方库。
- `npm i` 即 npm install 命令，安装需要的依赖库。
- npm run build，编译生成 json 文件。
- npm start，build 并且进入 watch 模式，文件有变化自动编译。
