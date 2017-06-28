//var golbal = null;
$(function () {

    var opt = { pid: "pid" },
        props;
    //流程节点数据
    props = {
        "Name": "并行或流程",
        "DisplayName": "并行或流程",
        //"TemplateType": null,
        "Description": "",
        //"IsRun": true,
        //"FlowAdministrator": "USERINFO_System",
        //"ChangeUserByActor": true,
        //"ChangeUserByAdmin": false,
        //"ChangeUserByCreator": false,
        //"ExtendProperty": null,
        //"ChangeActorNodeList": [{ "Name": "NODE026c3bdaed0c46d0a07b3f39c944f119", "IsAllowChange": true, "IsValidateNull": true, "IsValidateCustomNull": false }, { "Name": "NODE3af3acdbcd3440bf809ac30a3700fa15", "IsAllowChange": false, "IsValidateNull": false, "IsValidateCustomNull": true }],
        "ParameterList": [{ "Name": "Result", "Value": 0 }],
        "NodeList": [{
            "NodeID": "StartNode",
            "NodeType": "StartNode",
            "NodeText": "开始",
            //"ExtendProperty": null,
            "CenterX": 300,
            "CenterY": 78,
            "ImagePath": "workflow-editor/img/StartNode.png",
            "PluginList": []
        }, {
            "NodeID": "EndNode",
            "NodeType": "EndNode",
            "NodeText": "结束",
            //"ExtendProperty": null,
            "CenterX": 293,
            "CenterY": 557,
            "ImagePath": "workflow-editor/img/EndNode.png",
            "PluginList": []
        }, {
            "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
            "NodeType": "FlowOr",
            "NodeText": "分支开始",
            //"ExtendProperty": null, 
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
        //"PluginList": [{ "Name": "SendFlowMessage", "BeforeExec": true, "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}" }],
        "RelatedModel": null
    };
    opt.restore = props;

    $("#paper").hoteamflow(opt);

    //加载流程模版
    $("#loadworkflow").click(function () {
        opt.restore = {
            "Name": "并行或流程",
            "DisplayName": "并行或流程",
            //"TemplateType": null,
            "Description": "",
            //"IsRun": true,
            //"FlowAdministrator": "USERINFO_System",
            //"ChangeUserByActor": true,
            //"ChangeUserByAdmin": false,
            //"ChangeUserByCreator": false,
            //"ExtendProperty": null,
            //"ChangeActorNodeList": [{ "Name": "NODE026c3bdaed0c46d0a07b3f39c944f119", "IsAllowChange": true, "IsValidateNull": true, "IsValidateCustomNull": false }, { "Name": "NODE3af3acdbcd3440bf809ac30a3700fa15", "IsAllowChange": false, "IsValidateNull": false, "IsValidateCustomNull": true }],
            "ParameterList": [{ "Name": "Result", "Value": 0 }],
            "NodeList": [{
                "NodeID": "StartNode",
                "NodeType": "StartNode",
                "NodeText": "开始",
                //"ExtendProperty": null,
                "CenterX": 300,
                "CenterY": 78,
                "ImagePath": "workflow-editor/img/StartNode.png",
                "PluginList": []
            }, {
                "NodeID": "EndNode",
                "NodeType": "EndNode",
                "NodeText": "结束",
                //"ExtendProperty": null,
                "CenterX": 293,
                "CenterY": 557,
                "ImagePath": "workflow-editor/img/EndNode.png",
                "PluginList": []
            }, {
                "NodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
                "NodeType": "FlowOr",
                "NodeText": "分支开始",
                //"ExtendProperty": null, 
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
                "ConditionText": '天马流星拳'
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
                "ConditionText": null
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
                "ConditionText": null
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
                "ConditionText": null
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
                "ConditionText": null
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
                "ConditionText": null
            }],
            //"PluginList": [{ "Name": "SendFlowMessage", "BeforeExec": true, "Content": "{\"MessageType\":{\"RTX\":false,\"Email\":false,\"InstantMessage\":true},\"SendUser\":{\"CURRENTUSER\":true,\"PROMOTER\":false}}" }],
            "RelatedModel": null
        };
        $("#paper").hoteamflow(opt);

    });

    //测试清除流程模版
    $("#clearworkflow").click(function () {
        $("#paper").hoteamflow("destroy");

    });
});