// 1. Ensure that the javascript only runs after the DOM is ready
// 2. Add an event listener to the textarea
// 3. Count the number of characters in the textarea
// 4. Display the number of the chars below the textarea
// 5. If the char count is less than or equal to 140 chars, also display Tweetable
// 6. If the char count is between 141 and 160 chars, display Textable
// 7. If the char count is more than 160 chars, display Just Send an Email

$(document).ready(function (){
    $("textarea").keyup(function () {
        var test = $(this).val().length;
        $('.char-count').text(test);
            if(test<140) {
                $('.response').text("Tweetable");
            } else if(test<160) {
                $('.response').text("Textable");
            } else {
                $('.response').text("Just Send an Email!!!");
}

});



});