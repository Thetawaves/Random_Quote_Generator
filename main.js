$(document).ready(function () {
    var quote, author;
    function getQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $("#mod p").html(quote);
                $('#mod h2').html(author);
            }
        });
    }
    
    $("#new-quote").on("click", function () {
        getQuote();
    });
    
    getQuote();
    
    $('#twitter').on('click', function () {
        window.open('https://twitter.com/intent/tweet?text=' + quote + '%20' + author);
    });
});
    
