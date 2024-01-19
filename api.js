const express = require("express");
const path = require("path");
const randomstring = require("randomstring");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const randomLink = randomstring.generate(10);
var resposta;
var parametro;

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
    const parametro = req.body.catalogo;
    resposta = parametro + randomLink;
    res.send(resposta);
});

app.get(`/${resposta}`, (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#000000">
    <title>${parametro}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display&display=swap');

        @font-face {
            font-family: 'SuaFonte';
            src: url('vogue.ttf');
            src: url('vogue.ttf') format('truetype');
            /* Adicione outros formatos (e.g., woff2, ttf) conforme necessário para compatibilidade com navegadores */
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
            font-family: 'Roboto', serif;
        }

        *::selection {
            background-color: rgba(0, 0, 0, 0.367);
        }

        html,
        body {
            width: 100vw;
            overflow-x: hidden;
        }

        p {
            font-weight: 100;
        }

        main {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            height: 100vh;
            overflow-x: hidden;
            font-weight: 400;
        }

        main h1 {
            font-size: 300%;
            text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
            font-weight: lighter;
            font-family: 'Noto Serif Display', serif;
        }

        main p {
            position: absolute;
            bottom: 10vh;
            left: 50vw;
            transform: translateX(-50%);
        }

        .filter {
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            filter: brightness(0.5);
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        }

        .filter video {
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            object-position: center top;
            height: 100vh;
            width: 100vw;
            z-index: -2;
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
        }

        .products {
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            row-gap: 25px;
            padding: 5vh;
            min-height: 100vh;
            width: 100vw;
            flex-direction: column;
            position: relative;
            z-index: 0;
        }

        .card {
            border-radius: 1px;
            height: 107vw;
            width: 87vw;
            overflow: hidden;
            position: relative;
            z-index: 1;
            outline: 1px solid rgba(255, 255, 255, 0.534);
            border-radius: 2px;
        }

        .card img {
            z-index: 0;
            width: 100%;
            min-height: 100%;
            object-fit: cover;
            transition-duration: 0.5s;
        }

        .card img:hover {
            transform: scale(1.1);
        }

        .cardInfo {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 20%;
        }

        .visible {
            animation: reveal 1.5s;
        }

        .element {
            opacity: 0;
        }

        @keyframes reveal {
            0% {
                opacity: 0;
                filter: brightness(0);
            }

            100% {
                opacity: 1;
                filter: brightness(1);
            }
        }

        a {
            color: white;
        }

        .price {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-weight: 300;
        }

        .titulo {
            position: absolute;
            height: 1em;
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            width: 95%;
            font-weight: 300;
            overflow: hidden;
            font-weight: bold;
        }

        .leftArrow {
            position: absolute;
            top: 45%;
            left: 0;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            border-radius: 0 10px 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .cadastre {
            position: absolute;
            top: 7%;
            width: 85%;
            margin: auto;
        }

        .rightArrow {
            position: absolute;
            top: 45%;
            right: 0;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            border-radius: 10px 0px 0px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .carousel {
            display: flex;
            transition-duration: 0.5s;
            transform: translateX(0);
            min-height: 100%;
        }

        .loader {
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999999999999999999999;
            height: 100vh;
            width: 100vw;
            transition-duration: 1s;
        }

        header {
            position: fixed;
            z-index: 10;
            top: 1vh;
            height: 10vh;
            width: 85vw;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-backdrop-filter: blur(15px);
            backdrop-filter: blur(15px);
            overflow: hidden;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            border: 1px solid rgba(7, 7, 7, 0.7);
        }

        header img {
            height: 10vh;
            width: 10vh;
            padding-top: 1vh;
            padding-bottom: 1vh;
            filter: drop-shadow(3px 3px 2px rgba(5, 5, 5, 1));
            z-index: 10;
            margin: auto;
            transition: all 0.5s;
        }

        .loader img {
            width: 80vw;
        }

        .buy {
            color: white;
            position: absolute;
            bottom: 2%;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px;
            background-color: goldenrod;
            border-radius: 35px;
            width: 30%;
            text-align: center;
            height: 40px;
            cursor: pointer;
        }

        .quantity {
            color: white;
            position: absolute;
            bottom: 2%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 35px;
            width: 34%;
            text-align: center;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        .plus {
            background-color: goldenrod;
            border-radius: 50%;
            height: 100%;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .plus::selection {
            background-color: transparent;
        }

        .minus {
            background-color: goldenrod;
            border-radius: 50%;
            height: 100%;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .minus::selection {
            background-color: transparent;
        }

        .send {
            height: 8vh;
            width: 8vh;
            background-color: goldenrod;
            border-radius: 50%;
            animation: walk 0.5s ease-in-out;
            align-items: center;
            justify-content: center;
            transform: translateX(-1vh);
        }

        @keyframes walk {
            0% {
                opacity: 0;
                transform: translateX(-50px);
            }

            100% {
                opacity: 1;
                transform: translateX(-1vh);
            }
        }

        @keyframes reverseWalk {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        @media screen and (min-width: 650px) {
            ::-webkit-scrollbar {
                display: none;
            }

            .card {
                width: 27vw !important;
                height: 450px !important;
                margin: auto;
            }

            #products {
                display: grid;
                margin: auto !important;
                grid-template-columns: 1fr 1fr 1fr;
            }

            header {
                width: 26vw !important;
            }

            .loader img {
                width: 45vw !important;
            }
        }

        .cookies {
            position: fixed;
            bottom: 0;
            height: 30vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid black;
            animation: surgir 0.7s ease-out;
            display: none;
        }

        .cookies h2 {
            text-align: center;
            position: absolute;
            top: 2vh;
            width: 100%;
        }

        .cookies p {
            width: 90%;
            margin: auto;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .continuar {
            text-align: center;
            color: black;
            font-weight: bolder;
            padding: 10px;
            background-color: white;
            width: 15vw;
            position: absolute;
            bottom: 2vh;
            border-radius: 3px;
            left: 50%;
            transform: translateX(-50%);
        }

        @keyframes surgir {
            0% {
                transform: translateY(100%);
            }

            100% {
                transform: translate(0);
            }
        }

        @keyframes desaparecer {
            0% {
                transform: translateY(0%);
            }

            100% {
                transform: translateY(100%);
            }
        }

        .popinfo {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            z-index: 999999999;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .pop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgb(0, 0, 0);
            height: 40vh;
            width: 60vw;
            color: white;
            border-radius: 8px;
            position: relative;
        }

        .submit {
            background-color: goldenrod;
            padding: 5px;
            border-radius: 5px;
            position: absolute;
            bottom: 10px;
        }

        .wrap {
            width: min-content;
        }

        .master {
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 10px;
            position: absolute;
            bottom: 17%;
        }

        .master input {
            height: 25px;
            padding: 5px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
        }

        .card .down {
            position: absolute;
            bottom: 2%;
            background-color: goldenrod;
            left: 27%;
            transform: translateX(-50%);
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .acesso {
            display: none;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            height: 100vh;
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
            width: 100vw;
        }

        .alerta {
            padding: 5px;
            font-weight: bolder;
            color: white;
        }

        .nocadastro {
            position: fixed;
            bottom: 5%;
            color: white;
            background-color: black;
            width: 80%;
            font-size: small;
            border: 15px solid black;
            border-radius: 5px;
            text-align: center;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/2a683e0d82.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="loader">
        <img class="logo" src="https://github.com/JhefAraujo/Clone-conecta/blob/main/logo%20escrito.png?raw=true alt="
            Logo Mallorca">
    </div>
    <header>
        <img src="https://github.com/JhefAraujo/Clone-conecta/blob/main/logo%20escrito.png?raw=true"
            alt="Logo Mallorca">
        <p style="display: none;">enviar pedido -></p>
        <div style="display: none;" class="send" onclick="sendWhatsAppMessage()"></div>
    </header>
    <main>
        <h1>${parametro}</h1>
        <a href="#products">
            <p>Clique para explorar</p>
        </a>
        <div class="filter">
            <video src="bgvideo.mp4" playsinline autoplay muted loop></video>
        </div>
    </main>
    <section class="products" id="products">
    </section>
    <div class="cookies">
        <h2>Aviso de cookies</h2>
        <p>Este site utiliza cookies para melhorar a sua experiência de navegação. Ao continuar a utilizar este site,
            você concorda com o nosso uso de cookies.</p>
        <span onclick="desaparece()" class="continuar">Ok</span>
    </div>
    <div class="popinfo">
        <div class="pop">
            <p class="cadastre">Cadastre-se abaixo para conferir os valores dos produtos.</p>
            <div class="master">
                <input autocomplete="off" type="text" placeholder="Nome" id="nome" name="nome">
                <input autocomplete="off" type="text" placeholder="Telefone" id="tel" name="tel">
                <input autocomplete="off" type="text" placeholder="E-mail" id="email" name="email">
            </div>
            <div class="submit" onclick="enviarCliente()">Enviar</div>
        </div>
        <p class="nocadastro" onclick="revelarFotos()">Clique aqui para continuar sem cadastro (limitado)
        <p>
    </div>
    <div class="acesso" id="expira">
        <div class="alerta">
            <p>Este link expirou, solicite um novo!</p>
        </div>
    </div>
    <script>
        function desaparece() {
            document.getElementsByClassName('cookies')[0].style.animation = 'desaparecer 0.7s ease-out';
            setTimeout(() => {
                document.getElementsByClassName('cookies')[0].style.display = 'none';
            }, 700);
        }

        function getCookie(nomeCookie) {
            var nome = nomeCookie + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookies = decodedCookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(nome) == 0) {
                    return cookie.substring(nome.length, cookie.length);
                }
            }
            return "";
        }

        function revelarFotos() {
            document.getElementsByClassName('popinfo')[0].style.display = 'none';
        }

        var identificado = false;
        var expirado = false;
        var pedido = [];
        var quantidade = 0;
        data = new Date();
        biscoito = getCookie('identificado');
        enviado = false;



        if (expirado == true) {
            document.getElementById('expira').style.display = 'flex';
        }

        if (biscoito != 'false') {
            document.getElementsByClassName('popinfo')[0].style.display = 'flex';
        }

        if (biscoito == 'true') {
            document.getElementsByClassName('popinfo')[0].style.display = 'none';
        }

        function enviarCliente() {
            nome = document.getElementById('nome').value;
            telefone = document.getElementById('tel').value;
            email = document.getElementById('email').value;

            formData = new FormData();
            formData.append("nome", nome);
            formData.append("telefone", telefone);
            formData.append("email", email);

            var now = new Date();
            var time = now.getTime();
            time += 172800 * 1000;
            now.setTime(time);
            document.cookie = \`nome=\${nome}; identificado=true; expires=\${now.toUTCString()}; SameSite=None; Secure\`;
            document.cookie = \`identificado=true; expires=\${now.toUTCString()}; SameSite=None; Secure\`;

            document.getElementById('products').innerHTML = '';
            enviado = true;
            fetchAndAppend();

            setTimeout(() => {
                document.getElementsByClassName('popinfo')[0].style.display = 'none';
            }, 1500);
        }

        function showQuantity(element) {
            parent = element.parentElement;
            minus = parent.children[4].children[0];
            plus = parent.children[4].children[2];
            parent.children[3].style.display = 'none';
            parent.children[4].style.display = 'flex';
            parent.children[4].children[1].innerHTML++;
            quantidade++;
            document.getElementsByTagName('header')[0].children[1].style.display = 'block';
            document.getElementsByTagName('header')[0].children[2].style.display = 'flex';
            document.getElementsByTagName('header')[0].children[0].style.margin = '0';
            document.getElementsByTagName('header')[0].children[0].src = 'mono-02.svg';
            carrinho();
        }

        function plusElem(element) {
            parentPlus = element.parentElement;
            parentPlus.children[1].innerHTML++;
            quantidade++;
            carrinho();
            titulo = parentPlus.parentElement.children[1].children[0].innerHTML;
            pedido.push({ produto: titulo, quanti: parentPlus.children[1].innerHTML })
        }

        function minusElem(element) {
            parentPlus = element.parentElement;
            parentAbsol = parentPlus.parentElement;
            parentPlus.children[1].innerHTML--;
            if (parentPlus.children[1].innerHTML == 0) {
                parentPlus.style.display = 'none';
                parentAbsol.children[3].style.display = 'block';
            }
            quantidade--;
            carrinho();
        }

        function carrinho() {
            document.getElementsByTagName('header')[0].children[2].innerHTML = quantidade;
            if (quantidade == 0) {
                document.getElementsByTagName('header')[0].children[1].style.display = 'none';
                document.getElementsByTagName('header')[0].children[2].style.display = 'none';
                document.getElementsByTagName('header')[0].children[0].style.margin = 'auto';
                document.getElementsByTagName('header')[0].children[0].src = 'https://github.com/JhefAraujo/Clone-conecta/blob/main/logo%20escrito.png?raw=true';
            }
        }
        identificado = false;
        async function fetchAndAppend() {
            url = 'https://script.google.com/macros/s/AKfycbzUAPR0RI1BkPc5n17zGMnzWam-JKpT9ICzc-0gs6_V5Q22UmLfviLLar9Me-Y2SUCSew/exec';
            response = await fetch(url);
            brute = await response.json();
            for (let i = 0; i < brute.length; i++) {
                const element = brute[i];
                imagem = element[0].split(' ');
                if (element[8] == ${parametro}) {
                    criaCard = document.createElement('div');
                    criaCard.setAttribute('class', 'card element');
                    criaCard.innerHTML = \`<div class="carousel"><img src="${
                        imagem[0]
                    }"alt=""></div>
                            <div class="cardInfo"><p class="titulo">${element[2].slice(
                                11
                            )}</p></div>\`;
                    if (biscoito == 'true' || enviado == true) {
                        criaCard.innerHTML += \`
                                            <p class="price">R$${
                                                element[6]
                                            },00</p>
                                            <p onclick="showQuantity(this)" class="buy">Eu quero!</p>
                                            <div style="display: none;" class="quantity">
                                            <div onclick="minusElem(this)" class="minus">-</div>
                                            <p class="numb"></p>
                                            <div onclick="plusElem(this)" class="plus">+</div>
                                            </div>
                                            <i class="fa-solid fa-download down" style="color: #ffffff;"></i>\`
                    }
                    else {
                        titulos = document.getElementsByClassName('titulo');
                        for (let i = 0; i < titulos.length; i++) {
                            const element = titulos[i];
                            element.style.top = '50%';
                            element.style.transform = 'translate(-50%, -50%)';
                        }
                    }
                    document.getElementById('products').appendChild(criaCard);
                    if (imagem.length > 1) {
                        criaCard.innerHTML += '<div class="leftArrow" onclick="carouselleft(this)"><i class="fa-solid fa-arrow-left fa-lg"></i></div><div class="rightArrow" onclick="carouselright(this)"><i class="fa-solid fa-arrow-right fa-lg"></i></div>'
                        criaCard.children[0].innerHTML = \`<div class="carousel">
                <img src="\${imagem[0]}"alt="">
                <img src="\${imagem[1]}"alt="">
            </div>\`

                    }
                }
            }

        }

        setTimeout(() => {
            document.getElementsByClassName('loader')[0].style.opacity = '0';
            setTimeout(() => {
                document.getElementsByClassName('loader')[0].style.display = 'none';
            }, 1000);
            document.getElementsByClassName('cookies')[0].style.display = 'block';
        }, 3000);

        fetchAndAppend();

        window.addEventListener('scroll', () => {
            produto = document.getElementsByClassName('card');
            for (let i = 0; i < produto.length; i++) {
                const element = produto[i];
                if (element.getBoundingClientRect().y < 600) {
                    element.setAttribute("class", "visible card");
                }
            }
        });
        function carouselright(element) {
            element.parentElement.children[0].style.transform = 'translateX(-100%)';
        }
        function carouselleft(element) {
            element.parentElement.children[0].style.transform = 'translateX(0)';
        }

        function sendWhatsAppMessage() {
            if (clienteIdentificado == true) {
                enviarPedido()
            }
        }

        function enviarPedido() {
            var formdata = new FormData();
            formdata.append("nome", "jhefferson manoel de araujo");
            formdata.append("cpf", "111.111.111-51");
            formdata.append("email", "teste@teste.com");
            formdata.append("telefone", "11990199155");
            formdata.append("cep", "09970240");
            formdata.append("estado", "SP");
            formdata.append("cidade", "São Paulo");
            formdata.append("endereco", "Rua Frei Caneca 558");
            formdata.append("bairro", "consolacao");
            formdata.append("caralogo", "verano");
            formdata.append("frete", "teste");
            formdata.append("valorfrete", "15");
            formdata.append("pagamento", "cartao");
            formdata.append("valorpedido", "150");
            formdata.append("produtos", "Anel teste + brinco teste");
            formdata.append("situacao", "em aberto");
            formdata.append("data", "15/01/2024");
            formdata.append("vendedor", "teste");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
                mode: 'no-cors'
            };

            fetch("https://script.google.com/macros/s/AKfycby8UCVgOuKamlDT-MRw2azfKHYo4rO7yVx7f7buQTg8qpWIrWyc2U_tW5fVWMjv8P97vA/exec", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }

        function baixarImagem(url) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'imagem.webp';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                })
                .catch(error => {
                    console.error('Erro ao baixar a imagem:', error);
                });
        }

    </script>
</body>

</html>
    `)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
