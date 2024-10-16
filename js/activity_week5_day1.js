$(document).ready(function() {
    // cursor shows a hand for selectable cells
    $('td').not(':contains("Not Available")').css('cursor', 'pointer');
    
    // Add a click event to the activity cells
    $('td').click(function() {
        // Ignore 'Not Available' and header cells
        if ($(this).text() !== "Not Available") {
            $(this).toggleClass('highlight'); 
        }
    });
});
