$(document).ready(function(){
	$.getJSON('https://c2yg1xtufa.execute-api.us-west-2.amazonaws.com/Test/bondrecords',function(data){
		var infoHTML = '';
        infoHTML += '<table class="bondsTable" align="center" width="100%">';
        infoHTML += '<tr>';
        infoHTML += '<th>Category</th>';
        infoHTML += '<th>Issuer</th>';
        infoHTML += '<th>Cpn</th>';
        infoHTML += '<th>Maturity</th>';
        infoHTML += '<th>Description</th>';
        infoHTML += '<th>Daily Volume</th>';
        infoHTML += '<th>Low Price</th>';
        infoHTML += '<th>Avg Price</th>';
        infoHTML += '<th>High Price</th>';
        infoHTML += '</tr>';
        $.each(data, function(i,item){
            
            if (item != null)
            {
            	
            $.each(item, function(header,data){
            	infoHTML += '<tr><td>' + data.Category.value + '</td>'; 
                infoHTML += '<td>' + data.Issuer.value + '</td>';  
                infoHTML += '<td>' + data.Coupon.value + '</td>';  
                infoHTML += '<td>' + data.Maturity.value + '</td>';
                infoHTML += '<td>' + data.Description.value + '</td>'; 
                infoHTML += '<td>' + data.Volume.value + '</td>'; 
                infoHTML += '<td>' + data.LowPrice.value + '</td>'; 
                infoHTML += '<td>' + data.AvgPrice.value + '</td>'; 
                infoHTML += '<td>' + data.HighPrice.value + '</td></tr>'; 
                });
         	}
    	 });
        infoHTML += '</table>';
        $('#BondsData').html(infoHTML);
    });
});