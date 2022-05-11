/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function CambioUnidades (unidad, valor)
{
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.unid_metro.value= "";
        document.lasUnidades.unid_pulgada.value= "";
        document.lasUnidades.unid_pie.value= "";
        document.lasUnidades.unid_yarda.value= "";
    }else if (unidad === "metro") {
        document.lasUnidades.unid_pulgada.value = valor *39.3701;
        document.lasUnidades.unid_pie.value = valor *3.28984;
        document.lasUnidades.yarda. value= valor *1.89361;
    }
}