$('#select_type').change(function() {
    $.getJSON('/productSubType', 'typeName=' + $('#select_type').find(":selected").text() ,processTypes);
    
    function processTypes(data) {
        $('#select_subtype').find('option').remove()
        for( var i = 0; i < data.length; i++){
            $('#select_subtype').append('<option value="' + data[i] + '">' + data[i] +'</option>');
        }
    }
});