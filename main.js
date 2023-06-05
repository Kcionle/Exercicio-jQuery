$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nova-tarefa').val();
        adicionarTarefa(nomeTarefa);
        $('#nova-tarefa').val('');
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    function adicionarTarefa(nomeTarefa) {
        const novoItem = $('<li></li>').text(nomeTarefa);
        $('#lista-tarefas').append(novoItem);
    }
});