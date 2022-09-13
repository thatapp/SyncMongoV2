const { JsonataTransform } = require('@elastic.io/component-commons-library');


exports.getData = (value,data, json = 0) => {

    var g_data = JsonataTransform.jsonataTransform(data, { expression: JSON.stringify(value)});

    if(g_data !== undefined){
        return g_data;
    }

    return value;
}