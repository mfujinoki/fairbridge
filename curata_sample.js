$(document).ready(function(){

        $.getJSON('https://YourAPIURL.execute-api.us-west-2.amazonaws.com/Test/my-resource',function(data){
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
                    $.each(item, function(header,record){
                            infoHTML += '<tr><td>' + record.CUSIP.value + '</td>'; 
                            infoHTML += '<td>' + record.ISSUER.value + '</td>';  
                            infoHTML += '<td>' + Number(record.COUPON.value).toFixed(2) + '</td>';
                            infoHTML += '<td>' + record.MATURITY.value + '</td>'; 
                            infoHTML += '<td>' + record.DESCRIPTION.value + '</td>';  
                            infoHTML += '<td>' + Number(record.Todays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td>' + Number(record.Yesterdays_Price.value).toFixed(3) + '</td>'; 
                            infoHTML += '<td>' + Number(record.change.value).toFixed(3) + '</td></tr>'; 
                });

                    infoHTML += '<tr><td>&nbsp;</td></tr></tbody>';
                }
            });
            infoHTML += '</table>';
            $('#BondsData').html(infoHTML);
            
        });
});