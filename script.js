var horarioInicio;
    var horarioParada;
    var historico = [];

    function iniciarHorario() {
      horarioInicio = new Date().toLocaleTimeString();
      document.getElementById("horario-inicio").innerHTML = horarioInicio;
    }

    function pararHorario() {
      horarioParada = new Date().toLocaleTimeString();
      document.getElementById("horario-parada").innerHTML = horarioParada;

      var nome = document.getElementById("nome").value;
      var registro = nome + " - " + horarioInicio + " - " + horarioParada;
      historico.push(registro);

      atualizarHistorico();
    }

    function atualizarHistorico() {
      var historicoHtml = "";

      for (var i = 0; i < historico.length; i++) {
        historicoHtml += "<li>" + historico[i] + "</li>";
      }

      document.getElementById("historico").innerHTML = historicoHtml;
    }