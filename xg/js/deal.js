var startTime = new Date('2017-05-17 14:10:00').getTime();
$(function () {
    $('#start_btn').click(function () {
        $('#task_time').text('2017-05-17 14:10:00');

        setInterval(function () {
            startTime += 1000;
            var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
            $('#task_time').text(ts);
            listView(ts);
        }, 1000);
    });
});

function listView(time) {
    //var len=ykxljs.length;
    if (ykxljs[0][2] == time) {
        $('#ykxljs').append(
            '<tr><td>' + ykxljs[0][0] + 
            '</td><td>' + ykxljs[0][1] + 
            '</td><td>' + ykxljs[0][2] + 
            '</td><td>' + ykxljs[0][3] + 
            '</td></tr>');
        ykxljs.splice(0, 1);
    }
    if (ykssjs[0][2] == time) {
        $('#ykssjs').append(
            '<tr><td>' + ykssjs[0][0] + 
            '</td><td>' + 
            '</td><td>' + 
            '</td><td>' + ykssjs[0][5] +
            '</td><td>' + ykssjs[0][1] +
            '</td><td>' + ykssjs[0][2] + 
            '</td><td>' + 
            '</td><td>' + 
            '</td></tr>');
        ykssjs.splice(0, 1);
    }

}
