
<!-- 1º LUGAR: No link que descarrega a biblioteca do Google -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JQTR766PBR"></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // 2º LUGAR: Na linha de instrução para ativar a sua conta
  gtag('config', 'G-JQTR766PBR');
</script>


// analytics.js

// 1. Carrega dinamicamente o script oficial do Google Analytics
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-JQTR766PBR';
    document.head.appendChild(gaScript);

    // Inicializa a fila global dataLayer e a função gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };

    window.gtag('js', new Date());
    window.gtag('config', 'G-JQTR766PBR');
})();

// 2. Função acionada pelo clique do botão
function enviarGPS() {
    var btn = document.getElementById('btnEnviar');
    var status = document.getElementById('status');
    var resultado = document.getElementById('resultado');

    status.className = "text-sm font-medium p-3 rounded-lg bg-blue-100 text-blue-700";
    status.innerText = "Obtendo localização...";
    btn.disabled = true;

    if (!navigator.geolocation) {
        status.className = "text-sm font-medium p-3 rounded-lg bg-red-100 text-red-700";
        status.innerText = "Geolocalização não suportada pelo navegador.";
        btn.disabled = false;
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;

            document.getElementById('lat').innerText = lat;
            document.getElementById('lng').innerText = lng;
            resultado.classList.remove('hidden');

            // Envia o evento ao Google Analytics
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'envio_localizacao_gps', {
                    'latitude': lat.toString(),
                    'longitude': lng.toString()
                });
            }

            status.className = "text-sm font-medium p-3 rounded-lg bg-green-100 text-green-700";
            status.innerText = "✓ Coordenadas enviadas ao Analytics!";
            btn.disabled = false;
        },
        function (erro) {
            status.className = "text-sm font-medium p-3 rounded-lg bg-red-100 text-red-700";
            status.innerText = "Erro ao obter localização: " + erro.message;
            btn.disabled = false;
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}
