$(function () {
    var hoteamflow = $.hoteamflow,
        href = window.location.href,
        states = hoteamflow.config.tools.states,
        i,
        len,
        node;


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

    $.extend(true, hoteamflow.config.tools.states, {
        select: {
            showType: 'image',
            type: 'select',
            name: {
                text: '<<select>>'
            },
            text: {
                text: '选择'
            },
            img: {
                src: './workflow-editor/img/tools/select.png',
                width: 16,
                height: 16
            },
            nodeType: "select",
            props: {}
        },
        line: {
            showType: 'image',
            type: 'line',
            name: {
                text: '<<line>>'
            },
            text: {
                text: '连线'
            },
            img: {
                src: './workflow-editor/img/tools/line.png',
                width: 16,
                height: 16
            },
            nodeType: "path"
        },
        flowSwitch: {
            showType: 'image',
            type: 'flowSwitch',
            name: {
                text: '<<flowSwitch>>'
            },
            text: {
                text: '分支',
                start: '分支开始',
                end: '分支结束'
            },
            img: {
                src: './workflow-editor/img/tools/FlowSwitch.png',
                width: 16,
                height: 16
            },
            nodeType: "relaterect",
            props: {}
        },
        flowAnd: {
            showType: 'image',
            type: 'flowAnd',
            name: {
                text: '<<flowAnd>>'
            },
            text: {
                text: '并行与',
                start: '分支开始',
                end: '分支结束'
            },
            img: {
                src: './workflow-editor/img/tools/FlowAnd.png',
                width: 16,
                height: 16
            },
            nodeType: "relaterect",
            props: {}
        },
        flowOr: {
            showType: 'image',
            type: 'flowOr',
            name: {
                text: '<<flowOr>>'
            },
            text: {
                text: '并行或',
                start: '分支开始',
                end: '分支结束'
            },
            img: {
                src: './workflow-editor/img/tools/FlowOr.png',
                width: 16,
                height: 16
            },
            nodeType: "relaterect",
            props: {}
        },
        flowExecute: {
            showType: 'image',
            type: 'flowExecute',
            name: {
                text: '<<flowExecute>>'
            },
            text: {
                text: '执行'
            },
            img: {
                src: './workflow-editor/img/tools/FlowExecute.png',
                width: 16,
                height: 16
            },
            nodeType: "rect",
            props: {}
        },
        flowAudit: {
            showType: 'image',
            type: 'flowAudit',
            name: {
                text: '<<flowAudit>>'
            },
            text: {
                text: '评审'
            },
            img: {
                src: './workflow-editor/img/tools/FlowAudit.png',
                width: 16,
                height: 16
            },
            nodeType: "rect"
        },
        flowCheck: {
            showType: 'image',
            type: 'flowCheck',
            name: {
                text: '<<flowCheck>>'
            },
            text: {
                text: '签收'
            },
            img: {
                src: './workflow-editor/img/tools/FlowCheck.png',
                width: 16,
                height: 16
            },
            nodeType: "rect",
            props: {}
        },
        flowBusiness: {
            showType: 'image',
            type: 'flowBusiness',
            name: {
                text: '<<flowBusiness>>'
            },
            text: {
                text: '业务'
            },
            img: {
                src: './workflow-editor/img/tools/FlowBusiness.png',
                width: 16,
                height: 16
            },
            nodeType: "rect",
            props: {}
        },
        validate: {
            showType: 'image',
            type: 'validate',
            name: {
                text: '<<validate>>'
            },
            text: {
                text: '验证'
            },
            img: {
                src: './workflow-editor/img/tools/verification.png',
                width: 16,
                height: 16
            },
            nodeType: "validate"
        },
        "delete": {
            showType: 'image',
            type: 'delete',
            name: {
                text: '<<delete>>'
            },
            text: {
                text: '删除'
            },
            img: {
                src: './workflow-editor/img/tools/delete.png',
                width: 16,
                height: 16
            },
            nodeType: "delete"
        }
    });

});