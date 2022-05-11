/**
 * Conversos rde uniddaes, metros, pulgada, pie y yarda
 * @method Nombre de la función
 * @param {string} unidad id de los inputs en metros yardas y pies
 * @param {number} valor B
 * @return Valor que retorna
 */
function CambioUnidades (unidad, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (unidad === "metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28984;
        document.lasUnidades.yarda.value = valor * 1.89361;
    } else if (unidad == "pulgada") {
        document.lasUnidades.unid_metro = valor * valor * 0.0254;
    }
}
function convertirGR(id){
    var grados, radianes;
    if (id== "grados") {
        grados = document.getElementById ( "grados").value;
        radianes = (grados*Math.PI)/180;

    }else if (id === "radianes"){
        radianes = document.getElementById( "radianes").value;
        grados= (radianes * 180) / Math.PI;
    }
    document.getElementById( "grados").value = grados;
    document.getElementById( "radianes").value = radianes;
}