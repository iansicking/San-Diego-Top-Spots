$(document).ready(function ()
{
    $.getJSON("data.json", function (data)
    {
        let rows = "";
        $.each(data, function (i, site)
        {
            rows += `
                <tr>
                    <td>${site.name}</td>
                    <td>${site.description}</td>
                    <td><a href="https://www.google.com/maps?q=${site.location}" target="_blank" class="button-style">Open in Google Maps</a></td>
                </tr>
            `;
        });

        $("#data-table").html(rows);
    })
});


