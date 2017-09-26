# workflow-editor 

## 流程图编辑控件

[流程图编辑控件示例-https://huang-qing.github.io/workflow-editor/](https://huang-qing.github.io/workflow-editor/)

![流程图编辑控件](https://github.com/huang-qing/workflow-editor/raw/master/workflow-editor-logo.png)

## 流程图功能说明

+ 支持IE8+及现代浏览器。

+ 流程图支持横向流程图和纵向流程图。通过开始节点和结束节点的位置自动调整流程图的模式，在不同的流程图模式下，连线的展示方式不同。

+ 支持流程模版的编辑和浏览模式。编辑模式中会出现工具栏菜单，用其创建节点和连线；浏览模式中显示流程图，并根据流程图大小自动调整画布大小。

+ 流程图支持节点、连线的验证显示；连线的条件显示；浏览模式节点的Tooptip显示。

+ 支持全局和实例配置工具栏节点、连线皮肤，事件等相关配置项。

## 基本配置

### 配置基础路径

*注意：以`/`结束*

```javascript
$.workflow.config.basePath = "XXXX/";
```

### 配置id

配置的Id要保证唯一性

```javascript
$.workflow.config.guid='xxxxxx'
```

### 增加流程状态

流程状态默认有两个：

+ `RUN` 执行中
+ `COMPLETE` 完成

```javascript
$.workflow.config.state.RUN = {
    fill: "270-#fffce1-#ffff99",
    stroke: "#edd770"
}
```

## 配置事件

### 流程节点的切换事件

```javascript
$.workflow.config.event.toggle = function (pid, prevProps, currProps, props){}
```

### 流程节点的验证事件(工具栏的验证菜单使用此配置验证流程节点有效性)

```javascript
$.workflow.config.event.validate = function (pid, props){}
```

流程节点的验证事件-示例

```javascript
$.workflow.config.event.validate = function (pid, props) {
    console.log({ pid: pid, props: props });
    var list = [];
    //根据实际情况添加验证提示信息
    for (var i in this.path) {
        list.push({ key: i, value: "天空中会亮的星 星星星星" });
    }

    return list;
};
```

### 流程连线移动结束事件

```javascript
$.workflow.config.event.lineMoveEnd = function (pid, currProps, props, direction){}
```

### 流程选中事件（双击流程编辑页面的空白处）

```javascript
$.workflow.config.event.selectTemplate = function (pid, props){}
```

## 配置自定义皮肤

### 配置节点样式

```javascript
$.extend(true, $.workflow.config.rect, {
    attr: {
        r: 8,
        fill: "270-#fff-#d7d7d7",
        stroke: '#ccc',
        "stroke-width": 1,
        "stroke-width-active": 2,
        "stroke-active": '#0099cc'
    }
});
```

### 配置连线样式

```javascript
$.extend(true, $.workflow.config.path, {
    attr: {
        stroke: '#0099ff',
        "stroke-width": 2,
        "stroke-width-active": 3,
        "arrow-end": 'block'
    },
    rect: {
        attr: {
            width: 4,
            height: 4,
            fill: "#0066cc",
            stroke: "#0066cc",
            "stroke-width": 1,
            cursor: "opinter"
        }
    }
});
```

## 配置自定义工具栏

编辑状态下，选择工具栏`流程节点类型`菜单，进入节点添加状态。在画布中点击鼠标左键添加（可连续添加多个）；点击右键结束并恢复为选择状态。


编辑状态下，选择工具栏`连线`菜单，进入连线添加状态。在画布中选择连线起始位置，按下鼠标左键并移动鼠标至结束位置，完成画线的动作（可连续添加多个）；点击右键结束并恢复为选择状态。


### 数据格式

`showType` : 显示类型

 + `image`
 + `text`
 + `null` : 此类型下不会在工具栏模版中显示

`name` : 节点的类型

`text` : 节点显示名称

`img` : 节点的默认图片

`nodeType` : 节点的类型。为`null`时为非创建节点类型（可以理解为功能菜单，不是流程图中的节点类型）

```javascript
{
    showType: 'image',
    name: '<<save>>',
    text: {
        text: '保存'
    },
    img: {
        src: '~/images/save.png'
    },
    nodeType: null
}
```

### 配置工具栏自定义节点

```javascript
 $.workflow.config.tools.states
```   
示例：

```javascript
$.extend(true, $.workflow.config.tools.states, {
    load: {
        showType: 'image',
        type: 'load',
        name: '<<load>>',
        text: {
            text: '加载'
        },
        img: {
            src: './images/load.png',
            width: 16,
            height: 16
        },
        nodeType: null,

    },
    view: {
        showType: 'image',
        type: 'view',
        name: '<<view>>',
        text: {
            text: '浏览'
        },
        img: {
            src: './images/view.png',
            width: 16,
            height: 16
        },
        nodeType: null
    },
    save: {
        showType: 'image',
        type: 'save',
        name: '<<save>>',
        text: {
            text: '保存'
        },
        img: {
            src: '~/images/save.png',
            width: 16,
            height: 16
        },
        nodeType: null
    }
});
```

### 配置工具栏事件（配合自定义节点使用）

```javascript
$.workflow.config.tools.event
``` 

示例：

```javascript
$.extend(true, $.workflow.config.tools.event, {
    load: function (pid, props) {
        opt.restore = restore2;
        $("#paper").workflow(opt);
    },
    view: function (pid, props) {
        opt.editable = false;
        $("#paper").workflow(opt);
    },
    save: function (pid, props) {
        debugger;
        var restore = $("#paper").workflow('save');
    }
});
``` 

## 数据格式（配置项`restore`）

`Name` : 流程图标题

`DisplayName` : 流程图显示标题

`Description` : 流程图说明

`NodeList` : 流程图节点数据

`LinkList` : 流程图连线数据

```javascript
{
    "Name": "并行或流程",
    "DisplayName": "并行或流程",
    "Description": "",
    "NodeList": [],
    "LinkList": []
}
```


### 流程图节点数据格式

`NodeID` : 节点Id。开始节点和结束节点固定为`StartNode`和`EndNode`；其它的节点id更加配置项guid生成。

`NodeType` : 节点类型。默认有以下类型：

+ `StartNode` : 开始
+ `EndNode` :  结束
+ `FlowSwitch`: 分支
+ `FlowAnd`: 并行与
+ `FlowOr`: 并行或
+ `FlowExecute`: 执行
+ `FlowAudit`: 评审
+ `FlowCheck`: 签收
+ `FlowBusiness`: 业务

`NodeText` : 节点名称

`CenterX` : 节点中心位置X坐标

`CenterY` :  节点中心位置Y坐标

`ImagePath` : 节点显示图片。此项为空时，根据节点类型`NodeType`匹配显示。

`Tooltip` : 在浏览模式时有效。使用`\n`换行显示。

`State` : 节点状态。默认2个状态`RUN`和`COMPLETE`

```javascript
{
    "NodeID": "StartNode",
    "NodeType": "StartNode",
    "NodeText": "开始",
    "CenterX": 300,
    "CenterY": 78,
    "State": "COMPLETE"
    "ImagePath": "workflow-editor/img/StartNode.png",
    "Tooltip": "我是Tooltip...."
}
```


### 流程图线数据格式

`LinkID` : 连线Id。

`StartNodeID` : 关联的起始流程节点

`EndNodeID` : 关联的结束流程节点

`StartX` : 起始位置X轴坐标

`StartY` : 起始位置Y轴坐标

`EndX` : 结束位置X轴坐标

`EndY` : 结束位置Y轴坐标

`DisplayType` : 流程线类型，在绘图的时候会自动赋值。包括3种：

+ `straightLine` : 直线
+ `brokenHLine` :  水平折线
+ `brokenVLine`: 垂直折线

`FirstLength` : 绘制折线的拐点参数，绘图时自动赋值。保存为整型。

`ConditionText` : 条件文本显示

`State` : 流程线状态

```javascript
{
    "LinkID": "LINEb0baa3eed45d4cd7b5ba48480a6cc588",
    "StartNodeID": "StartNode",
    "StartX": 304,
    "StartY": 73,
    "EndNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
    "EndX": 303,
    "EndY": 194,
    "DisplayType": 0,
    "FirstLength": 0,
    "ConditionText": '一二三',
    "State": "COMPLETE"
}
```

## 创建流程图

配置项也可以通过示例进行配置。

### 实例配置项

`pid` : 流程图的id

`basePath` : 此插件文件（workflow-editor.js）所在的Web站点部署路径

`restore` : 流程图数据

`editable` : 是否为编辑模式。默认为`true`

### 示例

```javascript

//节点数据
var restore = {
    "Name": "并行或流程",
    "DisplayName": "并行或流程",
    "Description": "",
    "NodeList": [{
            "NodeID": "StartNode",
            "NodeType": "StartNode",
            "NodeText": "开始",
            "CenterX": 300,
            "CenterY": 78,
            "Tooltip": "我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n",
            "PluginList": []
        }, {
            "NodeID": "EndNode",
            "NodeType": "EndNode",
            "NodeText": "结束",
            "CenterX": 293,
            "CenterY": 557,
            "Tooltip": "我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n",
            "PluginList": []
        }, {
            "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
            "NodeType": "FlowOr",
            "NodeText": "分支开始",
            "CenterX": 299,
            "CenterY": 218,
            "ImagePath": "workflow-editor/img/tools/FlowOr.png",
            "PluginList": [],
            "Tooltip": "我是Tooltip.... \n 啊哈哈啊哈哈哈 \n ",
            "State": "COMPLETE"
        }, {
            "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-ENode",
            "NodeType": "FlowOr",
            "NodeText": "分支结束",
            "ExtendProperty": null,
            "CenterX": 295,
            "CenterY": 431,
            "ImagePath": "~/workflow-editor/img/tools/FlowOr.png",
            "PluginList": []
        }, {
            "NodeFlag": "",
            "ShowOrder": "000",
            "EffectivityTime": 0,
            "AdjectiveRemindTime": 0,
            "IsIgnoreDefaultActor": false,
            "TaskType": null,
            "ChangeActorNodeList": [{
                "Name": "NODE3af3acdbcd3440bf809ac30a3700fa15",
                "IsAllowChange": false,
                "IsValidateNull": false,
                "IsValidateCustomNull": false
            }],
            "AuditActor": [{
                "Name": "User",
                "Actors": "USERINFO_Test1;USERINFO_Test2;"
            }],
            "ResultList": [{
                "Name": "通过",
                "ParameterName": "Result",
                "ParameterValue": 1
            }, {
                "Name": "不通过",
                "ParameterName": "Result",
                "ParameterValue": 2
            }],
            "NodeID": "NODE026c3bdaed0c46d0a07b3f39c944f119",
            "NodeType": "FlowExecute",
            "NodeText": "执行1执行1执行",
            "ExtendProperty": null,
            "CenterX": 193,
            "CenterY": 326,
            "ImagePath": "workflow-editor/img/tools/FlowExecute.png",
            "Tooltip": "我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n我是Tooltip.... \n 啊哈哈啊哈哈哈 \n",
            "State": "RUN",
            "PluginList": [{
                "Name": "SendFlowMessage",
                "BeforeExec": true,
                "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}"
            }]
        },
        {
            "NodeFlag": "fsgsdfg",
            "ShowOrder": "000",
            "EffectivityTime": 3064,
            "AdjectiveRemindTime": 1563,
            "IsIgnoreDefaultActor": false,
            "TaskType": "",
            "ChangeActorNodeList": [{
                "Name": "NODE026c3bdaed0c46d0a07b3f39c944f119",
                "IsAllowChange": false,
                "IsValidateNull": false,
                "IsValidateCustomNull": false
            }],
            "AuditActor": [{
                "Name": "User",
                "Actors": "USERINFO_System;"
            }],
            "ResultList": [{
                "Name": "通过",
                "ParameterName": "Result",
                "ParameterValue": 1
            }, {
                "Name": "不通过",
                "ParameterName": "Result",
                "ParameterValue": 2
            }],
            "NodeID": "NODE3af3acdbcd3440bf809ac30a3700fa15",
            "NodeType": "FlowExecute",
            "NodeText": "执行2",
            "ExtendProperty": null,
            "CenterX": 412,
            "CenterY": 325,
            "Tooltip": "Tooltip：测试\n我是Tooltip....",
            "State": "RUN",
            "PluginList": [{
                "Name": "SendFlowMessage",
                "BeforeExec": true,
                "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}"
            }]
        }
    ],
    "LinkList": [{
        "LinkID": "LINEb0baa3eed45d4cd7b5ba48480a6cc588",
        "StartNodeID": "StartNode",
        "StartX": 304,
        "StartY": 73,
        "EndNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
        "EndX": 303,
        "EndY": 194,
        "DisplayType": 0,
        "FirstLength": 0,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '一二三',
        "Tooltip": "Tooltip： 测试 \n 我是Tooltip.... \n 啊哈哈啊哈哈哈 \n",
        "State": "COMPLETE"
    }, {
        "LinkID": "LINEd7e4d670466c46218f295d228aebf37d",
        "StartNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
        "StartX": 299,
        "StartY": 240,
        "EndNodeID": "NODE026c3bdaed0c46d0a07b3f39c944f119",
        "EndX": 194,
        "EndY": 300,
        "DisplayType": 1,
        "FirstLength": 49,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '1+1=2?',
        "Tooltip": "Tooltip：测试/n我是Tooltip....",
        "State": "COMPLETE"
    }, {
        "LinkID": "LINEbcf4705be3f24b9a81391defd3376532",
        "StartNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
        "StartX": 299,
        "StartY": 240,
        "EndNodeID": "NODE3af3acdbcd3440bf809ac30a3700fa15",
        "EndX": 412,
        "EndY": 305,
        "DisplayType": 1,
        "FirstLength": 52,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '1+1=2?',
        "Tooltip": "Tooltip：测试 我是Tooltip....",
        "State": "COMPLETE"
    }, {
        "LinkID": "LINEb72d43761b4040e8911d32cbad70652b",
        "StartNodeID": "NODE026c3bdaed0c46d0a07b3f39c944f119",
        "StartX": 194,
        "StartY": 344,
        "EndNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-ENode",
        "EndX": 295,
        "EndY": 409,
        "DisplayType": 1,
        "FirstLength": 50,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '天马流星拳'
    }, {
        "LinkID": "LINEbd51561424674ce184e6f1db8291c899",
        "StartNodeID": "NODE3af3acdbcd3440bf809ac30a3700fa15",
        "StartX": 412,
        "StartY": 349,
        "EndNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-ENode",
        "EndX": 295,
        "EndY": 409,
        "DisplayType": 1,
        "FirstLength": 50,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '1+1=2?'
    }, {
        "LinkID": "LINE011022ab7c6d46ec890920c07244e3c2",
        "StartNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-ENode",
        "StartX": 306,
        "StartY": 438,
        "EndNodeID": "EndNode",
        "EndX": 302,
        "EndY": 603,
        "DisplayType": 0,
        "FirstLength": 0,
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '1+1=2?'
    }]
}

//配置项
var opt = {
    pid: "pid",
    basePath: './workflow-editor/',
    tools: {
        states: {
            load: {
                showType: 'image',
                type: 'load',
                name: '<<load>>',
                text: {
                    text: '加载'
                },
                img: {
                    src: './images/load.png',
                    width: 16,
                    height: 16
                },
                nodeType: null,

            },
            view: {
                showType: 'image',
                type: 'view',
                name: '<<view>>',
                text: {
                    text: '浏览'
                },
                img: {
                    src: './images/view.png',
                    width: 16,
                    height: 16
                },
                nodeType: null
            },
            save: {
                showType: 'image',
                type: 'save',
                name: '<<save>>',
                text: {
                    text: '保存'
                },
                img: {
                    src: '~/images/save.png',
                    width: 16,
                    height: 16
                },
                nodeType: null
            }
        },
        event: {
            load: function (pid, props) {
                opt.restore = restore2;
                $("#paper").workflow(opt);
            },
            view: function (pid, props) {
                opt.editable = false;
                $("#paper").workflow(opt);
            },
            save: function (pid, props) {
                debugger;
                var restore = $("#paper").workflow('save');
            }
        },
    },
    restore: restore
};

$("#paper").workflow(opt);
```