function parseEnum(_enum: any) {
    const allValues: (string | number)[] = Object.values(_enum);
    const properties: string[] = allValues.slice(0, allValues.length / 2) as string[];
    const values: (string | number)[] = allValues.slice(allValues.length / 2);
    const enumObj: Record<string, number | string> = {};

    properties.forEach((prop, index) => {
        enumObj[prop] = values[index];
    });

    return enumObj;
}

function getEnumNamesAndValues<T extends (number | string)>(_enum: any) {
    const obj = parseEnum(_enum);
    return Object.keys(obj).map(n => ({name: n, value: obj[n] as T}));
}

function getEnumNames(_enum: any) {
    if (Object.keys(_enum).length > 0)
        return Object.keys(_enum) as string[];
    return Object.keys(parseEnum(_enum)) as string[];
}

function getEnumValues<T extends (number | string)>(_enum: any) {
    if (Object.keys(_enum).length > 0)
        return Object.values(_enum) as T[];
    return Object.values(parseEnum(_enum)) as T[];
}

export {
    parseEnum,
    getEnumNamesAndValues,
    getEnumNames,
    getEnumValues
}
