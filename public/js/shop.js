$(function () {
  $("#remove").click(function () {
    var confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm == true) {
      $("#item").hide();
      alert("Item deleted!");
    } else {
      alert("Item not deleted");
    }
  });
});
