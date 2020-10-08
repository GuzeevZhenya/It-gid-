function ajax(url, method, functionName, dataArray) {
    let xthhp = new XMLHttpRequesto();
    xthhp.open(method, url, true);
    xthhp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xthhp.send(requestData(dataArray));

    xthhp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response);
        }
    }
}


function requestData(dataArr) {
    let out = "";
    for (let key in dataArr) {
        out += `${key} = ${dataArr[key]}&`;
    }
    console.log(out);
    return out;
}