$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        const taskText = $('#taskInput').val();
        $('#taskList').append(`<li>${taskText}</li>`);
        $('#taskInput').val('');
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
