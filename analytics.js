// analytics.js

// 1. Carrega a biblioteca do Google Analytics no navegador
var script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JQTR766PBR';
document.head.appendChild(script);

// 2. Configura a fila do dataLayer e ativa o ID de medição
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-JQTR766PBR');
