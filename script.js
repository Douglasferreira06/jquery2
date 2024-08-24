// $(document).ready(function() {
//     let lista1 = $("#lista1");
//     lista1.find(".item2").hide(); // Esconder item2 na lista1
//     console.log("Lista 1:", lista1); // Log para verificar se a lista foi selecionada corretamente

//     let lista2 = $("#lista2");
//     lista2.find(".item5").css("color", "blue"); // Mudar a cor do item5 na lista2
//     lista2.find(".item3").css("position", "relative"); // Certificar que item3 tem position relativo para a animação funcionar
//     lista2.find(".item3").animate({ left: "100px" }, 2000); // Mover o item3 na lista2 50px para a direita em 2 segundos
//     lista2.find(".item3").animate({ left: "-5px" }, 3000);
// });



// $(document).ready(() => {
//     function slideInfinito() {
//         $("#lista1").slideUp(2000).slideDown(3000, slideInfinito);
//     }
    
//     slideInfinito();
// });


// $(document).ready(function slideInfinito(){

//     $("#lista1").slideUp(2000).slideDown(1000,slideInfinito )

//     slideInfinito();
// })

// let lista1 = $("#lista1")
// lista1.prepend("<li> novo teste</li>")

// function adiconar(){
//     let lista1 = $("#lista1")
//     lista1.append("<li> cu de galinha</li>")
    
//     $("#lista1").find(".item" ).css("color","red")
//     $("#lista2").find("li").remove(".item1, .item2")
//     $("#lista1").find("li").eq(4).text(" lista de compras");
//     $("#lista2").find("li").eq(2).css("color" ,"blue")
// }

// adiconar();
// $ ("#lista1").find("[key=2]").remove();


// function incluir (){
//     let rect =$(".rect")
//     let endereco =("vila verona")
//     rect.append("","",  endereco)
//     rect.before("douglas brito")
//    rect.after("ferreira")
    
    
// }   

//     incluir();

// function slide (){
//     let lista = $("#lista1")
//     lista.slideUp(2000).slideDown(4000)

// }
// slide();

// function slide() {
//     let lista = $("#lista1");
//     let isHidden = lista.width() === 0;

//     if (isHidden) {
//         lista.animate({ width: "100%" }, 2000); // Desliza para mostrar
//     } else {
//         lista.animate({ width: "0" }, 2000); // Desliza para esconder
//     }
// }

$(document).ready(function() {
    // Animação de expansão ao passar o mouse sobre #lista1
    $("#lista1").mouseenter(function() {
        $(this).animate({ width: "100%", opacity: "1" }, 2000); // Expande e aumenta a opacidade ao passar o mouse
    });

    // Ação ao passar o mouse sobre #lista1
    $("#lista1").mouseenter(function() {
        $(this).css("opacity", "1");
    });

    // Verifica se o #lista1 está visível
    if ($("#lista1").is(":visible")) {
        console.log("#lista1 está visível");
    }
});



