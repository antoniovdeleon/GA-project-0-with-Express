

// Tip constructor
function Tip(comm, desc) {
  this.comm = comm;
  this.desc = desc;

  this.items = localStorage.getItem("tips");
  this.key = "tips";
}

function SaveRender() {

}
// Tip prototype
Tip.prototype = new SaveRender();
Tip.prototype.constructor = Tip;


// Saving to localStorage
SaveRender.prototype.saveToLs = function(obj) {
  if (this.items) {
    items_json = JSON.parse(this.items);
  } else {
    items_json = [];
  }

  items_json.push(obj);

  localStorage.setItem(this.key, JSON.stringify(items_json));
}


// Template render function
SaveRender.prototype.renderTemplate = function(source, target) {
  var items_json = JSON.parse(this.items);
  var templateTip = _.template($(source).html());

  $(target).append(templateTip(this));
}


// delete post
$(document).on('click', '.delete-tip', function(){
 $(this).parents(".tip-container").remove();
});


// saving users input
$("#save-tip").on("click", function() {
  var temp = new Tip($("#comm").val(), $("#desc").val());
  console.log(temp);
  temp.renderTemplate("#template-source", "#target");
  temp.saveToLs(temp);
})

// clear out input fields on modal
$('#save-tip').on('hidden', function () {
    $('input').val('');
});


// Page load with the template
function pageLoad() {
  var items_json = JSON.parse(localStorage.getItem("tips"));
  var templateTip = _.template($("#template-source").html());


  _.each(items_json, function(ad) {
    $("#target").append(templateTip(ad));
  });
}

// calling pageload
pageLoad();

// clear localStorage
localStorage.clear()



// $(function(){
//     var postController = {
//       //template compiler
//       template: _.template($(template_source).html());

//       //pass each post object through the template and append to view
//       render: function(postObj){
//         var $postHtml = $(postController.template(postObj));
//         $("#newTip").append($postHtml);
//       },
//       all: function(){
//          // send GET request to server to get all tips
//       $.get('/tip', function(data) {
//         var allTips = data;
        
//         // iterate through each phrase
//         _.each(allTips, function(tip) {
//           postController.render(tip);
//         });
        
//         // add event-handers for updating/deleting
//         postController.addEventHandlers();
//       });
//       }
      
//     }
// });









