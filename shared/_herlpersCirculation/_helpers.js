

export const formatdate = (DateObject) => {
    return DateObject.getDate()+"-"+DateObject.getMonth()+"-"+DateObject.getFullYear()
}

export const splitfunction = (e) => {
    return e
        .split("(")[1]
        .split(")")[0]
        .replace(/^"(.*)"$/, "$1");
}
