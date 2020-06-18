

export const formatdate = (DateObject) => {
    return DateObject.getDate()+"-"+DateObject.getMonth()+"-"+DateObject.getFullYear()
}

export const splitfunction = (e) => {
    return e
        .split("(")[1]
        .split(")")[0]
        .replace(/^"(.*)"$/, "$1");
}
export const FullDate = (str) =>{
    const parts = str.slice(0, -1).split('T');
    const dateComponent = parts[0];
    const timeComponent = parts[1];

    //console.log(dateComponent);
    //console.log(timeComponent);
    return dateComponent
}