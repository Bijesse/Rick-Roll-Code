//Task 1: Console the year in which the song "Beat it" was relased 
//console.log(library.music.eighties.Michael_Jackson[1].year);

//Task 2: Console the name of the song Lady Gaga released in 2006 
//console.log(library.music.two_thousands.Lady_Gaga[0].song);
//console.log("hello");


$( document ).ready(function() {
//Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
   //$("#output").html(library.music.twenty_tens.Adele[0].song);
//Task 4: (project) Create a site that can display songs from an artist specified by a user search.
$("#submitButton").click(function()
{
    var artistSelection = $("#dropDown").val();
    console.log(artistSelection);
    
        var jackoLen = library.music.eighties[artistSelection].length;
        console.log(jackoLen);
        var i = 0;
        for (i; i < jackoLen; i ++)
        {
        //$("#outputForm").append(library.music.eighties.Michael_Jackson[0].song);
        console.log(library.music.eighties[artistSelection][i].song);
        $("#outputForm").append('<br>' + library.music.eighties[artistSelection][i].song + '</br>');
        }
            
           // $("#outputForm").html(library.music.eighties.Michael_Jackson)
           // );
    
    
    
    //$("#outputForm").html(artistSelection);
}
);
});
