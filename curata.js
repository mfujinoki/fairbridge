$(document).ready(function(){
    $.date = function(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    
    var date = month + "/" + day + "/" + year.toString().substr(2,2);
    
    return date;
};

    $.topic = function(stringObject){
        var pos = stringObject.indexOf('/');
        if (pos > -1)
            return stringObject.substr(0,pos);
        else
            return stringObject;
    }
    $.fileName = function(stringObject){
        var pos = stringObject.indexOf('/');
        if (pos > -1)
            return stringObject.substr(pos+1,stringObject.length-pos);
        else
            return stringObject;
    }
    /* Populate document library */
    $("#all").click(function(){
        getDocuments("all");
    });
    $("#prasa").click(function(){
        getDocuments("prasa");
    });
    $("#prhta").click(function(){
        getDocuments("prhta");
    });
    $("#governor").click(function(){
        getDocuments("governor");
    });
    $("#promesa").click(function(){
        getDocuments("promesa");
    });
    $("#pob").click(function(){
        getDocuments("pob");
    });
    $("#cofina").click(function(){
        getDocuments("cofina");
    });
    $("#upr").click(function(){
        getDocuments("upr");
    });
    $("#gdb").click(function(){
        getDocuments("gdb");
    });
    $("#prepa").click(function(){
        getDocuments("prepa");
    });

	var currentPage = $(location).attr('pathname');
    if (currentPage == '/pages/bonds'){
        $.getJSON('https://e96mspfwij.execute-api.us-west-2.amazonaws.com/Production/bondrecords',function(data){
            var infoHTML = '';
            infoHTML += '<table class="bondsTable" align="center" width="100%">';
            infoHTML += '<caption>Puerto Rico Bond activity</caption><tr/>';
            infoHTML += '<thead>';
            infoHTML += '<tr>';
            infoHTML += '<th>CUSIP</th>';
            infoHTML += '<th>ISSUER</th>';
            infoHTML += '<th>CPN</th>';
            infoHTML += '<th>MATURITY</th>';
            infoHTML += '<th>DESCRIPTION</th>';
            infoHTML += '<th>CURRENT<br/>PRICE</th>';
            infoHTML += '<th>PREVIOUS<br/>PRICE</th>';
            infoHTML += '<th>CHANGE</th>';
            infoHTML += '</tr>';
            infoHTML += '</thead>'
            
            $.each(data, function(i,item){
                
                if (item != null)
                {
                    infoHTML += '<tbody>';
                    var GDB = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74517');
                    }); 
                    infoHTML += '<tr><td class="category"><a href="/topic/profile/gdb/">GDB</a></td></tr>';
                    $.each(GDB, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                });

                    var POB = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('29216');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/pob/">POB</a></td></tr>';
                    $.each(POB, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });

                    var PREPA = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74526');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/prepa/">PREPA</a></td></tr>';
                    $.each(PREPA, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });
                    
                    var GO = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74514');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/gdb/">GO</a></td></tr>';
                    $.each(GO, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });

                    var COFINA = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74529');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/cofina/">COFINA</a></td></tr>';
                    $.each(COFINA, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });

                    var PRASA = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74516');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/prasa/">PRASA</a></td></tr>';
                    $.each(PRASA, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });

                    var PRHTA = $.grep(item,function(h){
                        return h.CUSIP.value.toString().includes('74519');
                    }); 
                    infoHTML += '<tr><td>&nbsp;</td></tr><tr><td class="category"><a href="/topic/profile/prhta/">PRHTA</a></td></tr>';
                    $.each(PRHTA, function(header,data){
                            infoHTML += '<tr><td>' + data.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + data.ISSUER.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + $.date(data.MATURITY.value) + '</td>'; 
                            infoHTML += '<td>' + data.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td class="right-align">' + Number(data.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td class="right-align">' + Number(data.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            if(Number(data.change.value) >= 0)
                                infoHTML += '<td class="right-align-positive">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                            else
                                infoHTML += '<td class="right-align-negative">' + Number(data.change.value).toFixed(3) + '</td></tr>'; 
                    });
                    infoHTML += '<tr><td>&nbsp;</td></tr></tbody>';
                }
            });
            infoHTML += '</table>';
            $('#BondsData').html(infoHTML);
            
        });
    }
    else if(currentPage == '/pages/documents')
    {
        getDocuments("all");
    }
});
function getDocuments(topic)
{
    var url = "https://s3-us-west-2.amazonaws.com/fairbridge/";
    var prefix = '';
    switch(topic)
    {
        case "all": 
            break;
        case "prasa": 
            prefix = "PRASA";
            break;
        case "prhta":
            prefix = "PRHTA";
            break;
        case "governor":
            prefix = "GOVERNOR";
            break;
        case "promesa":
            prefix = "PROMESA";
            break;
        case "pob":
            prefix = "POB";
            break;
        case "cofina":
            prefix = "COFINA";
            break;
        case "upr":
            prefix = "UPR";
            break;
        case "gdb":
            prefix = "GDB";
            break;
        case "prepa":
            prefix = "PREPA";
            break;
        default:
            break;
    }
    $.get(' https://b88ufu1kef.execute-api.us-west-2.amazonaws.com/Production/fairbridge?list-type=2&prefix=' + prefix,function(data){
        var infoHTML = '';
        infoHTML += '<table class="bondsTable" align="right" width="80%">';
        infoHTML += '<caption>Document Library</caption><tr/>';
        infoHTML += '<thead>';
        infoHTML += '<tr>';
        infoHTML += '<th>Document Name</th>';
        infoHTML += '<th>Topic</th>';
        infoHTML += '<th>Date</th>';
        infoHTML += '</tr>';
        infoHTML += '</thead>';
        infoHTML += '<tbody>';
        $(data).find("Contents").each(function() {
            if(Number($(this).find("Size").text()) > 0)
            {
                infoHTML += '<tr><td><a target="_blank" href="'+ url + $(this).find("Key").text() + '">' + $.fileName($(this).find("Key").text()) + '</a></td>';
                infoHTML += '<td>' + $.topic($(this).find("Key").text()) + '</td>';
                infoHTML += '<td>' + $.date($(this).find("LastModified").text()) + '</td></tr>';
            }
        });
        infoHTML += '</tbody></table>';
        $('#documents').html(infoHTML);
        
    },"xml");
}