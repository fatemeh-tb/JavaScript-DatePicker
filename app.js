$(document).ready(function() {

    $(".selected-date").click(function() {
        getDays(0);

        $(".dates").css("display", " block");
    })



    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    let selectedDate = date;
    let selectedDay = day;
    let selectedMonth = month;
    let selectedYear = year;



    $(".mth").text(months[month] + ' ' + year);


    $(".selected-date").text(formatDate(date));


    getDays();


    // Go To Next Month
    $('.next-mth').click(function(e) {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        $(".mth").text(months[month] + ' ' + year);
        getDays();
    });


    //Go to Previous Month
    $('.prev-mth').click(function(e) {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        $(".mth").text(months[month] + ' ' + year);
        getDays();
    });



    function getDays() {

        $(".date-table").empty();


        for (i = 0; i < 7; i++) {

            $('.date-table').append("<th class='dt-head'>" + days[i] + "</th>");
        }



        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);



        var offset = firstDay.getDay();

        let dayCount = 1;
        for (i = 0; i < 5; i++) {
            $(".date-table").append("<tr class=dt-row" + i + ">");


            for (rw = 0; rw < 7; rw++) {

                if (offset == 0) {

                    $('.' + "dt-row" + i).append("<td  class='dt-days'>" + dayCount + '</td>');


                    if (dayCount >= lastDay.getDate()) {
                        break
                    }
                    dayCount++;

                } else {
                    $('.' + "dt-row" + i).append('<td>' + '</td>')
                    offset--;
                }


                // if (selectedDay == dayCount && selectedYear == year && selectedMonth == month) {
                //     $('.dt-days').addClass('selected');
                // }


                $('.dt-days').click(function(e) {
                    selectedDate = new Date(year + '-' + (month + 1) + '-' + dayCount);
                    selectedDay = dayCount;
                    selectedMonth = month;
                    selectedYear = year;

                    $(".selected-date").text(formatDate(selectedDate));

                    getDays();
                });

                $('.date-table').append('</tr>');
            }
        }

    }

    function formatDate(d) {
        let day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }

        let month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }

        let year = d.getFullYear();

        return day + ' / ' + month + ' / ' + year;
    }

});