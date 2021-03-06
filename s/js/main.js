/*
 *   JQuery's flavor of the onload event is called 'ready'
 */
$().ready(function(){

    var pageWidth = $(window).innerWidth();
    var headingWidth = $("#heading").outerWidth();
    var halfPage = pageWidth / 2;
    var halfHeading = headingWidth / 2;

    var targetLeft = halfPage - halfHeading;

    /* NOTES:
     * Find the document/page element/tag that has the ID "Heading",
     * and call its animate function/method passing,
     * in two anonymous (nameless) objects,
     * the first object has one property named 'left' that has a *value* of '38.3%',
     * the second object has two properties, *duration* and *easing*,
     * that have the values 'slow' and 'swing' respectively.
     */

    $("#heading").animate(
        {
            right: targetLeft
        },
        {
            duration: "slow",
            easing: "swing"
        }
    );
    $(document).on("click", ".addRow", function(event){

        event.preventDefault();

        var original=$(this).closest("tr");

        var newRow=original.clone();

        original.after(newRow);
        original.removeClass("active");

        var inning=original.find(".inning").html();
        inning=parseInt(inning);
        inning++;
        newRow.find(".inning").html(inning);

        /*********************
         *  clear old values
         *********************/
        newRow.find(".total").html(""); // its a span so use .html()
        newRow.find(".points").val(""); // its an input so use .val()
        newRow.find(".fouls").val("");  // its an input so use .val()

    });

});

