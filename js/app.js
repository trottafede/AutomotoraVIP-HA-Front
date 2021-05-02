// Mi código JavaScript:

var appSales = new Vue({
  el: "#appSales",
  data: {
    valorDolar: 0,
  },
});

$.ajax({
  url: "https://ha.edu.uy/api/rates",
  success: function (datos) {
    appSales.valorDolar = datos.uyu;
  },
});
