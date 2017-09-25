# workflow-editor 

流程图编辑控件

[https://huang-qing.github.io/workflow-editor](https://huang-qing.github.io/workflow-editor/)

![流程图编辑控件](https://github.com/huang-qing/workflow-editor/raw/master/workflow-editor-logo.png)

配置基础路径

```javascript
$.workflow.config.basePath = "";
```

配置id

```javascript
$.workflow.config.guid='xxxxxx'
```

配置事件

```javascript
$.workflow.config.event.toggle = function (pid, prevProps, currProps, props){}

$.workflow.config.event.validate = function (pid, props){}

$.workflow.config.event.lineMoveEnd = function (pid, currProps, props, direction){}

$.workflow.config.event.selectTemplate = function (pid, props){}
```

配置验证事件

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

配置节点样式

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

配置连线样式

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

配置工具栏节点

```javascript
 $.workflow.config.tools.states
```   

```javascript
$.extend(true, $.workflow.config.tools.states, {
    select: {
        showType: 'image',
        type: 'select',
        name: { text: '<<select>>' },
        text: { text: '选择' },
        img: { src: './workflow-editor/img/tools/select.png', width: 16, height: 16 },
        nodeType: "select",
        props: {}
    },
    line: {
        showType: 'image',
        type: 'line',
        name: { text: '<<line>>' },
        text: { text: '连线' },
        img: { src: './workflow-editor/img/tools/line.png', width: 16, height: 16 },
        nodeType: "path",
        props: {
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
            "ConditionText": null
        }
    },
    flowSwitch: {
        showType: 'image',
        type: 'flowSwitch',
        name: { text: '<<flowSwitch>>' },
        text: { text: '分支', start: '分支开始', end: '分支结束' },
        img: { src: './workflow-editor/img/tools/FlowSwitch.png', width: 16, height: 16 },
        nodeType: "relaterect",
        props: {
            text: { name: 'text', label: '显示', value: '', editor: function () { return new workflow.editors.textEditor(); }, value: '开始' },
            temp1: { name: 'temp1', label: '文本', value: '', editor: function () { return new workflow.editors.inputEditor(); } },
            temp2: { name: 'temp2', label: '选择', value: '', editor: function () { return new workflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]); } }
        }
    },
    flowAnd: {
        showType: 'image',
        type: 'flowAnd',
        name: { text: '<<flowAnd>>' },
        text: { text: '并行与', start: '分支开始', end: '分支结束' },
        img: { src: './workflow-editor/img/tools/FlowAnd.png', width: 16, height: 16 },
        nodeType: "relaterect",
        props: {
            "NodeID": "StartNode",
            "NodeType": "StartNode",
            "NodeText": "并行与",
            "ExtendProperty": null,
            "CenterX": 300,
            "CenterY": 78,
            "ImagePath": "~\\Platform\\Image\\Console\\GraphEditor\\StartNode.png",
            "PluginList": []
        }
    },
    flowOr: {
        showType: 'image',
        type: 'flowOr',
        name: { text: '<<flowOr>>' },
        text: { text: '并行或', start: '分支开始', end: '分支结束' },
        img: { src: './workflow-editor/img/tools/FlowOr.png', width: 16, height: 16 },
        nodeType: "relaterect",
        props: {
            text: { name: 'text', label: '显示', value: '', editor: function () { return new workflow.editors.textEditor(); }, value: '开始' },
            temp1: { name: 'temp1', label: '文本', value: '', editor: function () { return new workflow.editors.inputEditor(); } },
            temp2: { name: 'temp2', label: '选择', value: '', editor: function () { return new workflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]); } }
        }
    },
    flowExecute: {
        showType: 'image',
        type: 'flowExecute',
        name: { text: '<<flowExecute>>' },
        text: { text: '执行' },
        img: { src: './workflow-editor/img/tools/FlowExecute.png', width: 16, height: 16 },
        nodeType: "rect",
        props: {
            text: { name: 'text', label: '显示', value: '', editor: function () { return new workflow.editors.textEditor(); }, value: '开始' },
            temp1: { name: 'temp1', label: '文本', value: '', editor: function () { return new workflow.editors.inputEditor(); } },
            temp2: { name: 'temp2', label: '选择', value: '', editor: function () { return new workflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]); } }
        }
    },
    flowAudit: {
        showType: 'image',
        type: 'flowAudit',
        name: { text: '<<flowAudit>>' },
        text: { text: '评审' },
        img: { src: './workflow-editor/img/tools/FlowAudit.png', width: 16, height: 16 },
        nodeType: "rect",
        props: {
            "NodeID": "StartNode",
            "NodeType": "StartNode",
            "NodeText": "评审",
            "ExtendProperty": null,
            "CenterX": 300,
            "CenterY": 78,
            "ImagePath": "~\\Platform\\Image\\Console\\GraphEditor\\StartNode.png",
            "PluginList": []
        }
    },
    flowCheck: {
        showType: 'image',
        type: 'flowCheck',
        name: { text: '<<flowCheck>>' },
        text: { text: '签收' },
        img: { src: './workflow-editor/img/tools/FlowCheck.png', width: 16, height: 16 },
        nodeType: "rect",
        props: {
            "NodeID": "StartNode",
            "NodeType": "StartNode",
            "NodeText": "签收",
            "ExtendProperty": null,
            "CenterX": 300,
            "CenterY": 78,
            "ImagePath": "~\\Platform\\Image\\Console\\GraphEditor\\StartNode.png",
            "PluginList": []
        }
    },
    flowBusiness: {
        showType: 'image',
        type: 'flowBusiness',
        name: { text: '<<flowBusiness>>' },
        text: { text: '业务' },
        img: { src: './workflow-editor/img/tools/FlowBusiness.png', width: 16, height: 16 },
        nodeType: "rect",
        props: {
            text: { name: 'text', label: '显示', value: '', editor: function () { return new workflow.editors.textEditor(); }, value: '开始' },
            temp1: { name: 'temp1', label: '文本', value: '', editor: function () { return new workflow.editors.inputEditor(); } },
            temp2: { name: 'temp2', label: '选择', value: '', editor: function () { return new workflow.editors.selectEditor([{ name: 'aaa', value: 1 }, { name: 'bbb', value: 2 }]); } }
        }
    },
    validate: {
        showType: 'image',
        type: 'validate',
        name: { text: '<<validate>>' },
        text: { text: '验证' },
        img: { src: './workflow-editor/img/tools/verification.png', width: 16, height: 16 },
        nodeType: "validate",
        callback: function (currentNode, flowProps) {
            console.log(flowProps);
        }
    },
    "delete": {
        showType: 'image',
        type: 'delete',
        name: { text: '<<delete>>' },
        text: { text: '删除' },
        img: { src: './workflow-editor/img/tools/delete.png', width: 16, height: 16 },
        nodeType: "delete",
        callback: function (currentNode, flowProps) {
            if (currentNode) {
                var type = currentNode.getId().substring(0, 4);
                if (type === "rect") {
                    currentNode.remove();
                }
                else if (type === "path") {
                    currentNode.remove();
                }
            }
        }
    }
});
```

加载流程模版

```javascript
var opt = { pid: "pid" },
    props;

//流程节点数据
props = {
    "Name": "并行或流程",
    "DisplayName": "并行或流程",
    "Description": "",
    "ParameterList": [{ "Name": "Result", "Value": 0 }],
    "NodeList": [{
        "NodeID": "StartNode",
        "NodeType": "StartNode",
        "NodeText": "开始",
        "CenterX": 300,
        "CenterY": 78,
        "ImagePath": "workflow-editor/img/StartNode.png",
        "PluginList": []
    }, {
        "NodeID": "EndNode",
        "NodeType": "EndNode",
        "NodeText": "结束",
        "CenterX": 293,
        "CenterY": 557,
        "ImagePath": "workflow-editor/img/EndNode.png",
        "PluginList": []
    }, {
        "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
        "NodeType": "FlowOr",
        "NodeText": "分支开始",
        "CenterX": 299,
        "CenterY": 218,
        "ImagePath": "workflow-editor/img/tools/FlowOr.png",
        "PluginList": []
    }, {
        "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-ENode",
        "NodeType": "FlowOr",
        "NodeText": "分支结束",
        "ExtendProperty": null,
        "CenterX": 295,
        "CenterY": 431,
        "ImagePath": "workflow-editor/img/tools/FlowOr.png",
        "PluginList": []
    }, {
        "NodeFlag": "",
        "ShowOrder": "000",
        "EffectivityTime": 0,
        "AdjectiveRemindTime": 0,
        "IsIgnoreDefaultActor": false,
        "TaskType": null,
        "ChangeActorNodeList": [{ "Name": "NODE3af3acdbcd3440bf809ac30a3700fa15", "IsAllowChange": false, "IsValidateNull": false, "IsValidateCustomNull": false }], "AuditActor": [{ "Name": "User", "Actors": "USERINFO_Test1;USERINFO_Test2;" }], "ResultList": [{ "Name": "通过", "ParameterName": "Result", "ParameterValue": 1 }, { "Name": "不通过", "ParameterName": "Result", "ParameterValue": 2 }],
        "NodeID": "NODE026c3bdaed0c46d0a07b3f39c944f119",
        "NodeType": "FlowExecute",
        "NodeText": "执行1执行1执行",
        "ExtendProperty": null,
        "CenterX": 193,
        "CenterY": 326,
        "ImagePath": "workflow-editor/img/tools/FlowExecute.png",
        "PluginList": [{ "Name": "SendFlowMessage", "BeforeExec": true, "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}" }]
    },
    {
        "NodeFlag": "fsgsdfg",
        "ShowOrder": "000",
        "EffectivityTime": 3064,
        "AdjectiveRemindTime": 1563,
        "IsIgnoreDefaultActor": false,
        "TaskType": "",
        "ChangeActorNodeList": [{ "Name": "NODE026c3bdaed0c46d0a07b3f39c944f119", "IsAllowChange": false, "IsValidateNull": false, "IsValidateCustomNull": false }], "AuditActor": [{ "Name": "User", "Actors": "USERINFO_System;" }], "ResultList": [{ "Name": "通过", "ParameterName": "Result", "ParameterValue": 1 }, { "Name": "不通过", "ParameterName": "Result", "ParameterValue": 2 }],
        "NodeID": "NODE3af3acdbcd3440bf809ac30a3700fa15",
        "NodeType": "FlowExecute",
        "NodeText": "执行2",
        "ExtendProperty": null,
        "CenterX": 412,
        "CenterY": 325,
        "ImagePath": "workflow-editor/img/tools/FlowExecute.png",
        "PluginList": [{ "Name": "SendFlowMessage", "BeforeExec": true, "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}" }]
    }],
    "LinkList": [
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
        "Conditions": [],
        "HaveCondition": 0,
        "ConditionText": '一二三'
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
        "ConditionText": '1+1=2?'
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
        "ConditionText": '1+1=2?'
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
    }],
    "RelatedModel": null
};
opt.restore = props;

$("#paper").workflow(opt);
```