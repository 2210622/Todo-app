$(document).ready(function(){
  
  $('#createform').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      if (todo == null) {
        return
      }

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload()
          
        }
      });

      return false;

  });

  $('li').on('click', function(){
      // var item = $(this).text().replace(/ /g, "-");
      var item = $(this).text().trim().replace(/ /g, "-");
      // var item = e.target.textContent.replace(/ /g, "-");  
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

  $('#deleteallform').on('submit', function(){

      $.ajax({
        type: 'POST',
        url: '/todo/delete/all',
        success: function(){
          //do something with the data via front-end framework
          location.reload();
          
        }
      });

      return false;

  });

    $('.edit-button').on('click', function(){
      // var item = $(this).text().replace(/ /g, "-");
      var item = this.value.trim().replace(/ /g, "-");
      // var item = e.target.textContent.replace(/ /g, "-");
      $.ajax({
        type: 'GET',
        url: '/todo/' + item + '/edit',
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
          location.href ='/todo/' + item + '/edit';
        }
      });
  });
  
    $('.form-btn').click(function(){
      $(this).next().toggleClass('show-form');
    })
  });
