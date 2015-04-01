$.extend($.fn.validatebox.defaults.rules, {
    minLength: {
        validator: function (value, param) {
            return value.length >= param[0];
        },
        message: '长度不能小于 {0} 字符.'
    },
    maxLength: {
        validator: function (value, param) {
            return value.length <= param[0];
        },
        message: '长度不能大于 {0} 字符.'
    },
    SelectValid: {
        validator: function (value, param) { 
            return value != param[0];
        },
        message: '请选择选项.'
    },
    minValue:{
        validator: function(value,param){
            return value >=param[0];
        },
        message:'值不能小于{0}.'
    },
    maxValue: {
        validator: function (value, param) {
            return value <= param[0];
        },
        message: '值不能大于{0}.'
    }
});