function areaPedidos(containerPedidos, areaInformacao, funcao){

    var iconTipoPedido  = $("#mostrar-oculta");
    $(".primeiro-pedido").on("click", function(){
      $(this).each(function(){
          var pedidoCapturado = {
              "nome" : $(this).find(".info-nome").text(),
              "data" : $(this).find(".info-hora").text(),
              "numeroPedido" : $(this).find(".info-numero").text(),
              "atendente" : $(this).find(".info-atend").text()
          };

          if(iconTipoPedido.hasClass("fa fa-chevron-up")) {
              iconTipoPedido.removeClass();
              iconTipoPedido.addClass("fa fa-chevron-down");
          }

          areaInformacao.nome.innerHTML = pedidoCapturado.nome;
          areaInformacao.hora.innerHTML = pedidoCapturado.data;
          areaInformacao.numeroPedido.innerHTML = pedidoCapturado.numeroPedido;
          areaInformacao.atendente.innerHTML = pedidoCapturado.atendente;
      });
        containerPedidos.forEach(function(campos){
            campos.style.display= 'none'; });

        areaInformacao.container.style.display = 'initial';
        areaInformacao.pedidoClicado.style.display = 'initial';

    });


    // Quando Clicar Na Barra Referente a Area do Pedido
    var tipoPedido = document.querySelector(".titulo-pedidos");

    tipoPedido.addEventListener("click", function(){

        if(iconTipoPedido.hasClass("fa fa-chevron-down")){
            iconTipoPedido.removeClass();
            iconTipoPedido.addClass("fa fa-chevron-up");
        }

        areaInformacao.container.style.display = 'none';
        areaInformacao.pedidoClicado.style.display = 'none';

        console.log($(".title-text").text());
        var tituloPedido = $(".title-text").text();

        if(tituloPedido == "Pendentes") {
            funcao(containerPedidos);
            containerPedidos[0].style.display = 'initial';
        } else if(tituloPedido == "Análise") {
            funcao(containerPedidos);
            containerPedidos[1].style.display = 'initial';

        }else if(tituloPedido == "Prontos"){
            funcao(containerPedidos);
            containerPedidos[2].style.display = 'initial';

        }else if(tituloPedido =="Aceitos") {
            funcao(containerPedidos);
            containerPedidos[3].style.display = 'initial';

        }else if(tituloPedido == "Concluídos"){
            funcao(containerPedidos);
            containerPedidos[4].style.display = 'initial';

        }else if(tituloPedido == "Recusados"){
            funcao(containerPedidos);
            containerPedidos[5].style.display = 'initial';

        } else if(tituloPedido == "Cancelados"){
            funcao(containerPedidos);
            containerPedidos[6].style.display = 'initial';
        }




    });







}