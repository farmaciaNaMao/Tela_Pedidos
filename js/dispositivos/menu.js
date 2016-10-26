/* Executa em Dispositivos Ate 1024px */
function menuDispositivos(tamanhoTela, arr, opcoesMenu, areaInformacao) {

        document.querySelector(".lista-menu").style.display = 'none';

            //Faz Subir e Descer o Menu
            var botao = document.querySelector("#button-pedidos");
            botao.addEventListener("click", function (event) {
                if (tamanhoTela() <= 1024) {
                    event.preventDefault();
                    if ($(".lista-menu").is(":visible")) {
                        document.querySelector(".lista-menu").style.display = 'none';
                    } else {
                        document.querySelector(".lista-menu").style.display = 'block';
                        areaInformacao.container.style.display = 'none';}
                }
            });

            // Vamos Ocultar os Container De Acordo com a Resolução do Dispositvo
            var containerPedidos = document.querySelector(".pedidos");
            var tipoPedido = document.querySelector(".titulo-pedidos");

            var apareceContainerPedidos = function () {
                containerPedidos.style.display = 'initial';
            };
            var ocultaTiposPedido = function () {
               // tipoPedido.style.display = 'none';
                arr.forEach(function(campos){
                    campos.style.display = 'none';
                });
            };

            var trocaTipoPedido = function (tipoPedido, pedido, cor, texto) {
                apareceContainerPedidos();
                ocultaTiposPedido();
                $(".lista-menu").slideUp();
                tipoPedido.style.display = 'initial';
                tipoPedido.style.borderTop = '2px solid' + cor;
                $(".title-text").text(texto);
                pedido.style.display = 'initial';
            };

            opcoesMenu[0].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido, arr[0], "#D73925", "Pendentes");
            });
            opcoesMenu[1].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[1], "#F39C19", "Análise");
            });
            opcoesMenu[2].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[2], "#3F7CE9", "Prontos");
            });
            opcoesMenu[3].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[3], "#32CD32", "Aceitos");
            });
            opcoesMenu[4].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[4], "#000", "Concluídos");
            });
            opcoesMenu[5].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[5], "#000", "Recusados");
            });
             opcoesMenu[6].addEventListener("click", function () {
                trocaTipoPedido(tipoPedido,  arr[6], "#000", "Cancelados");
            });
};
