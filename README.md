<div align="center"><image width="140em" src="https://user-images.githubusercontent.com/66859419/183120498-1dede5b4-0666-4891-b95f-c3a812b3f12f.png" /></div>
<h1 align="center">BetterNCM II Plugin Template</h1>
<h3 align="center">从这里，开启你的下一个插件</h3>

## 文件简介

- .github | Github Actions有关文件
- manifest.json | 生产环境插件描述文件
- main.js | 主文件（在`manifest.json`中指定）
- manifest_test.json | Github Actions 测试环境插件描述文件
- main_test.json | 测试主文件（在`manifest_test.json`中指定）

### `manifest.json` v1
(同`manifest_test.json`)
```json
{
    "manifest_version": 1, // manifest版本，必为 1
    "name": "ExamplePlugin", // 插件名，不推荐有中文
    "slug": "example-plugin", // 插件唯一识别名 (留空则根据插件名自动生成)
    "version": "0.1.0", // 插件版本，推荐使用语义化版本（https://semver.org/）
    "author": "Author", // 插件作者
    "description": "Description of the plugin", // 插件描述
    "betterncm_version": "^0.2.6", // 依赖的 BetterNCM 版本
    "preview": "preview.png", // 插件预览图
    
    "injects": { // 普通注入
        "Main": [  // 网易云主页面
            {
                "file": "main.js"  // 需注入的文件
            }
        ]
    },
    "hijacks":{  // 网易云请求修改
        "> 2.10.0 <= 2.10.6":{  // 版本，支持Range
            "orpheus://orpheus/pub/core.e5842f1.js":{ // URL，开头部分匹配即可
            //(如 orpheus://orpheus/pub/core.e5842f1.js?abcdefg 将被匹配到)

                "type":"replace", // 类型，目前支持 replace 和 regex
                "from":"var o;if(((this.U()||C).from||C).id==t)", // 搜索项
                "to":";expose(a);var o;if(((this.U()||C).from||C).id==t)" // 替换为
            }
        }
    }
}
```
