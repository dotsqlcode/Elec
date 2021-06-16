$('document').ready(function() {
    // $('#demo').daterangepicker({
    //     "autoUpdateInput": false,
    //     "showCustomRangeLabel": false,
    //     "alwaysShowCalendars": true,
    //     "startDate": "12/14/2020",
    //     "endDate": "01/01/2021",
    //     "opens": "center"
    // }, function(start, end, label) {
    //   console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    // });
    $('input[name="dates"]').daterangepicker({ startDate: moment(), endDate: moment().add(2, 'day')});
});