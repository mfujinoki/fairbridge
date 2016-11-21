var params = '?app=39'
    //+'&query='
    //encodeURIComponent('Updated_datetime > "2012-02-03T09:00:00+0900" and Updated_datetime < "2016-02-03T10:00:00+0900" order by $id asc limit 10 offset 20') + '&' +
    //encodeURIComponent('fields[0]=$id') + '&' +
    //encodeURIComponent('fields[1]=Created_datetime') + '&' +
    //encodeURIComponent('fields[2]=Drop_down');
var url = 'https://2t48w.kintone.com/k/v1/records.json' + params;
   
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.setRequestHeader('X-Cybozu-API-Token','88zn5qdDubvvvghHrwmNm50BAYBsQVdiY9LSlJDw');
xhr.onload = function() {
    if (xhr.status === 200) {
        // success
        console.log(JSON.parse(xhr.responseText));
    } else {
        // error
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();