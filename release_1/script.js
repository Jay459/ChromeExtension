$(function()
{
    chrome.storage.local.get(["key"],function(param) 
    {
        if(param.key)
        {
            $("#display").text("Hello " + param.key);
        }
    });
    $("#button").click(function()
    {
        $("#display").text("Hello " + $("#input").val());
        name = $("#input").val();
        chrome.storage.local.set({key : name});
        $("#input").val("");
    });
});