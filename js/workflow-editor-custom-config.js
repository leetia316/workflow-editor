(function ($) {

    var workflow = $.workflow;

    //配置基础路径（配置全局）
    workflow.config.basePath = "";

    //配置节点样式（配置全局）
    $.extend(true, workflow.config.rect, {
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
    $.extend(true, workflow.config.path, {
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
    workflow.config.event.validate = function (pid, props) {
    
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


})(jQuery);