(function ($) {

    var hoteamflow = $.hoteamflow;

    //配置基础路径（配置全局）
    hoteamflow.config.basePath = "";

    //配置节点样式（配置全局）
    $.extend(true, hoteamflow.config.rect, {
        attr: {
            r: 8,
            fill: "270-#fff-#d7d7d7",
            stroke: '#ccc',
            "stroke-width": 1,
            "stroke-width-active": 2,
            "stroke-active": '#0099cc'
        }
    });

    //配置连线样式（配置全局）
    $.extend(true, hoteamflow.config.path, {
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

    //配置验证事件(配置到全局)
    hoteamflow.config.event.validate = function (pid, props) {
    
        console.log({
            pid: pid,
            props: props
        });
        var list = [];
        for (var i in this.path) {
            list.push({
                key: i,
                value: "天空中会亮的星 \r\n 星星星星"
            });
        }

        return list;
    };

    //配置工具栏节点(配置到实例)
    // $.extend(true, hoteamflow.config.tools.states, {
    //     select: {
    //         showType: 'image',
    //         type: 'select',
    //         name: {
    //             text: '<<select>>'
    //         },
    //         text: {
    //             text: '选择'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/select.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "select",
    //         props: {}
    //     },
    //     line: {
    //         showType: 'image',
    //         type: 'line',
    //         name: {
    //             text: '<<line>>'
    //         },
    //         text: {
    //             text: '连线'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/line.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "path"
    //         // ,props: {
    //         //     "LinkID": "LINEb0baa3eed45d4cd7b5ba48480a6cc588",
    //         //     "StartNodeID": "StartNode",
    //         //     "StartX": 304,
    //         //     "StartY": 73,
    //         //     "EndNodeID": "NODE43a1ec2fb4a143fcb915183b4b0c890d-SNode",
    //         //     "EndX": 303,
    //         //     "EndY": 194,
    //         //     "DisplayType": 0,
    //         //     "FirstLength": 0,
    //         //     "Conditions": [],
    //         //     "HaveCondition": 0,
    //         //     "ConditionText": null
    //         // }
    //     },
    //     flowSwitch: {
    //         showType: 'image',
    //         type: 'flowSwitch',
    //         name: {
    //             text: '<<flowSwitch>>'
    //         },
    //         text: {
    //             text: '分支',
    //             start: '分支开始',
    //             end: '分支结束'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowSwitch.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "relaterect",
    //         props: {
    //             text: {
    //                 name: 'text',
    //                 label: '显示',
    //                 value: '',
    //                 editor: function () {
    //                     return new hoteamflow.editors.textEditor();
    //                 },
    //                 value: '开始'
    //             },
    //             temp1: {
    //                 name: 'temp1',
    //                 label: '文本',
    //                 value: '',
    //                 editor: function () {
    //                     return new hoteamflow.editors.inputEditor();
    //                 }
    //             },
    //             temp2: {
    //                 name: 'temp2',
    //                 label: '选择',
    //                 value: '',
    //                 editor: function () {
    //                     return new hoteamflow.editors.selectEditor([{
    //                         name: 'aaa',
    //                         value: 1
    //                     }, {
    //                         name: 'bbb',
    //                         value: 2
    //                     }]);
    //                 }
    //             }
    //         }
    //     },
    //     flowAnd: {
    //         showType: 'image',
    //         type: 'flowAnd',
    //         name: {
    //             text: '<<flowAnd>>'
    //         },
    //         text: {
    //             text: '并行与',
    //             start: '分支开始',
    //             end: '分支结束'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowAnd.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "relaterect"
    //         // ,props: {
    //         //     "NodeID": "StartNode",
    //         //     "NodeType": "StartNode",
    //         //     "NodeText": "并行与",
    //         //     "ExtendProperty": null,
    //         //     "CenterX": 300,
    //         //     "CenterY": 78,
    //         //     "ImagePath": "./workflow-editor/img/tools/StartNode.png",
    //         //     "PluginList": []
    //         // }
    //     },
    //     flowOr: {
    //         showType: 'image',
    //         type: 'flowOr',
    //         name: {
    //             text: '<<flowOr>>'
    //         },
    //         text: {
    //             text: '并行或',
    //             start: '分支开始',
    //             end: '分支结束'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowOr.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "relaterect"
    //         // ,props: {
    //         //     // text: {
    //         //     //     name: 'text',
    //         //     //     label: '显示',
    //         //     //     value: '',
    //         //     //     editor: function () {
    //         //     //         return new hoteamflow.editors.textEditor();
    //         //     //     },
    //         //     //     value: '开始'
    //         //     // },
    //         //     // temp1: {
    //         //     //     name: 'temp1',
    //         //     //     label: '文本',
    //         //     //     value: '',
    //         //     //     editor: function () {
    //         //     //         return new hoteamflow.editors.inputEditor();
    //         //     //     }
    //         //     // },
    //         //     // temp2: {
    //         //     //     name: 'temp2',
    //         //     //     label: '选择',
    //         //     //     value: '',
    //         //     //     editor: function () {
    //         //     //         return new hoteamflow.editors.selectEditor([{
    //         //     //             name: 'aaa',
    //         //     //             value: 1
    //         //     //         }, {
    //         //     //             name: 'bbb',
    //         //     //             value: 2
    //         //     //         }]);
    //         //     //     }
    //         //     // }
    //         // }
    //     },
    //     flowExecute: {
    //         showType: 'image',
    //         type: 'flowExecute',
    //         name: {
    //             text: '<<flowExecute>>'
    //         },
    //         text: {
    //             text: '执行'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowExecute.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "rect"
    //         // ,props: {
    //         //     text: {
    //         //         name: 'text',
    //         //         label: '显示',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.textEditor();
    //         //         },
    //         //         value: '开始'
    //         //     },
    //         //     temp1: {
    //         //         name: 'temp1',
    //         //         label: '文本',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.inputEditor();
    //         //         }
    //         //     },
    //         //     temp2: {
    //         //         name: 'temp2',
    //         //         label: '选择',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.selectEditor([{
    //         //                 name: 'aaa',
    //         //                 value: 1
    //         //             }, {
    //         //                 name: 'bbb',
    //         //                 value: 2
    //         //             }]);
    //         //         }
    //         //     }
    //         // }
    //     },
    //     flowAudit: {
    //         showType: 'image',
    //         type: 'flowAudit',
    //         name: {
    //             text: '<<flowAudit>>'
    //         },
    //         text: {
    //             text: '评审'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowAudit.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "rect"
    //         // ,props: {
    //         //     "NodeID": "StartNode",
    //         //     "NodeType": "StartNode",
    //         //     "NodeText": "评审",
    //         //     "ExtendProperty": null,
    //         //     "CenterX": 300,
    //         //     "CenterY": 78,
    //         //     "ImagePath": "./workflow-editor/img/tools/StartNode.png",
    //         //     "PluginList": []
    //         // }
    //     },
    //     flowCheck: {
    //         showType: 'image',
    //         type: 'flowCheck',
    //         name: {
    //             text: '<<flowCheck>>'
    //         },
    //         text: {
    //             text: '签收'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowCheck.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "rect"
    //         // ,props: {
    //         //     "NodeID": "StartNode",
    //         //     "NodeType": "StartNode",
    //         //     "NodeText": "签收",
    //         //     "ExtendProperty": null,
    //         //     "CenterX": 300,
    //         //     "CenterY": 78,
    //         //     "ImagePath": "./workflow-editor/img/tools/StartNode.png",
    //         //     "PluginList": []
    //         // }
    //     },
    //     flowBusiness: {
    //         showType: 'image',
    //         type: 'flowBusiness',
    //         name: {
    //             text: '<<flowBusiness>>'
    //         },
    //         text: {
    //             text: '业务'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/FlowBusiness.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "rect"
    //         // ,props: {
    //         //     text: {
    //         //         name: 'text',
    //         //         label: '显示',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.textEditor();
    //         //         },
    //         //         value: '开始'
    //         //     },
    //         //     temp1: {
    //         //         name: 'temp1',
    //         //         label: '文本',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.inputEditor();
    //         //         }
    //         //     },
    //         //     temp2: {
    //         //         name: 'temp2',
    //         //         label: '选择',
    //         //         value: '',
    //         //         editor: function () {
    //         //             return new hoteamflow.editors.selectEditor([{
    //         //                 name: 'aaa',
    //         //                 value: 1
    //         //             }, {
    //         //                 name: 'bbb',
    //         //                 value: 2
    //         //             }]);
    //         //         }
    //         //     }
    //         // }
    //     },
    //     validate: {
    //         showType: 'image',
    //         type: 'validate',
    //         name: {
    //             text: '<<validate>>'
    //         },
    //         text: {
    //             text: '验证'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/verification.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "validate"
    //         // ,callback: function (currentNode, flowProps) {
    //         //     debugger;
    //         //     console.log(flowProps);
    //         // }
    //     },
    //     "delete": {
    //         showType: 'image',
    //         type: 'delete',
    //         name: {
    //             text: '<<delete>>'
    //         },
    //         text: {
    //             text: '删除'
    //         },
    //         img: {
    //             src: './workflow-editor/img/tools/delete.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "delete"
    //         // ,callback: function (currentNode, flowProps) {
    //         //     debugger;
    //         //     if (currentNode) {
    //         //         var type = currentNode.getId().substring(0, 4);
    //         //         if (type === "rect") {
    //         //             currentNode.remove();
    //         //         } else if (type === "path") {
    //         //             currentNode.remove();
    //         //         }
    //         //     }
    //         // }
    //     },
    //     "load": {
    //         showType: 'image',
    //         type: 'load',
    //         name: {
    //             text: '<<load>>'
    //         },
    //         text: {
    //             text: '加载'
    //         },
    //         img: {
    //             src: './images/load.png',
    //             width: 16,
    //             height: 16
    //         },
    //         nodeType: "custom"
    //     }
    // });

})(jQuery);