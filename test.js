console.log("Thrive JC Loaded!")

//var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1KsK7AFR-Iv13KCB23WaQMigcLlUyaz4rZ_5wD_FywW0/edit?usp=sharing'

//function init() {
  //Tabletop.init( {
    //key: '1KsK7AFR-Iv13KCB23WaQMigcLlUyaz4rZ_5wD_FywW0',
    //callback: function(data, tabletop) {
      // DISPLAY THE DATA HERE

//      var jsonData = JSON.stringify(data,"",4)

  //    var tbl_body = document.createElement("tbody");
          //var odd_even = false;
    //      $.each(data, function() {
      //        var tbl_row = tbl_body.insertRow();
              //tbl_row.className = odd_even ? "odd" : "even";
        //      $.each(this, function(k , v) {
          //        var cell = tbl_row.insertCell();
            //      cell.append(document.createTextNode(v.toString()));
            //  })
              //odd_even = !odd_even;
  //        })
    //      $("#table_id").append(tbl_body);


//      console.log(data)
  //  },
    //simpleSheet: true } )
//}



//$(document).ready( function () {
  //  $('#table_id').DataTable();
//} );


$(document).ready(function ()
      {
          var table = $('#table_id').DataTable();
    //      $('#table_id').on('search.dt', function (e,settings)
      //    {
        //      table.search(this.value).draw();
          //});

      });



window.addEventListener('DOMContentLoaded', init);
