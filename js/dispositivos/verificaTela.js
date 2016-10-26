$(document).ready(function(){
    function tamanhoDocumento(){
            var tamanho = window.innerWidth;
            return tamanho;
        }
        function alturaDocumento(){
            var altura = window.innerHeight;
            return altura;
        }
        function tamanhoTela(){
            var tamanhoScreen = window.screen.width;
            return tamanhoScreen;
        }
        function alturaScreen(){
            var alturaScreen = window.screen.height;
            return alturaScreen;
        }

    // Area dos Pedidos
    var containerPedidos = [
        document.querySelector(".pedidos-pendentes"),
        document.querySelector(".pedidos-analise"),
        document.querySelector(".pedidos-prontos"),
        document.querySelector(".pedidos-aceitos"),
        document.querySelector(".pedidos-concluidos"),
        document.querySelector(".pedidos-recusados"),
        document.querySelector(".pedidos-cancelados")
    ];

    // Lista de Opcoes do Menu
    var opcoesMenu = [
     document.querySelector(".pendentes"),
     document.querySelector(".analise"),
     document.querySelector(".prontos"),
     document.querySelector(".aceitos"),
     document.querySelector(".concluido"),
     document.querySelector(".recusado"),
    document.querySelector(".cancelado")
    ];

    // Objeto de Infromacoes Detalhadas do Pedido /Cliente
    var areaInformacao = {
        "container" : document.querySelector(".detalhes-pedido"),
        "pedidoClicado" : document.querySelector(".pedido-clicado"),
        "nome" : document.querySelector(".detalhe-nome"),
        "numeroPedido" : document.querySelector(".detalhe-numero"),
        "hora" : document.querySelector(".detalhe-hora"),
        "atendente" : document.querySelector(".detalhe-atend")
    };
    containerPedidos.forEach(function(campos){
        campos.style.display= 'none'; });
        containerPedidos[0].style.display = 'initial';

    var areaPedidoRodas = function(arr){
        arr.forEach(function(scope){
            scope.style.display = 'none';
        });
    }


    if (tamanhoTela() <= 1024) {
          //Executa o Script do Menu em Ate 1024px
            //$(".detalhes-pedido").hide();

           areaInformacao.container.style.display = 'none';
            menuDispositivos(tamanhoTela, containerPedidos, opcoesMenu, areaInformacao);
            areaPedidos(containerPedidos, areaInformacao, areaPedidoRodas);
        }
});