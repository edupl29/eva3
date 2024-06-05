
let registros = [];


function validarCampo1(campo1) {
    if (campo1.length !== 5) {
        return false; 
    }
 
    const existe = registros.some(registro => registro.campo1 === campo1);
    return !existe; 
}


function validarCamposAlfanumericos(campo2, campo3, campo4, campo5) {
    const regex = /^[a-zA-Z0-9\s]+$/; 
    return campo2.match(regex) && campo3.match(regex) && campo4.match(regex) && campo5.match(regex);
}


function validarCamposNumericos(campo8, campo9) {
    return !isNaN(campo8) && !isNaN(campo9) && parseInt(campo8) >= 0 && parseInt(campo9) >= 0;
}


function validarCamposSelect(campo6, campo10, campo12) {
    return campo6 !== "" && campo10 !== "" && campo12 !== "";
}


function validarCamposRadio(campo7, campo11) {
    return campo7 !== "" && campo11 !== "";
}


function validarCamposNoVacios(campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10, campo11, campo12) {
    return campo1 !== "" && campo2 !== "" && campo3 !== "" && campo4 !== "" && campo5 !== "" && campo6 !== "" && campo7 !== "" && campo8 !== "" && campo9 !== "" && campo10 !== "" && campo11 !== "" && campo12 !== "";
}


function consultar() {
    const codigoPlanta = document.getElementById("txtcodigo").value;
    const registro = registros.find(registro => registro.campo1 === codigoPlanta);
    if (registro) {
        
        document.getElementById("txtnombre").value = registro.campo2;
        document.getElementById("txttipo").value = registro.campo3;
        document.getElementById("txtaltura").value = registro.campo4;
        document.getElementById("txtcolor").value = registro.campo5;
        document.getElementById("cbotiporiego").value = registro.campo6;
        document.getElementById("opflorsi").checked = registro.campo7 === "Sí";
        document.getElementById("opflorno").checked = registro.campo7 === "No";
        document.getElementById("txtprecio").value = registro.campo8;
        document.getElementById("cbocargo5").value = registro.campo9;
        document.getElementById("txtstock").value = registro.campo10;
        document.getElementById("txtproveedor").value = registro.campo11;
        document.getElementById("cbocargo10").value = registro.campo12;

       
        mostrarMensaje("Registro encontrado. Puede modificarlo o eliminarlo.");
    } else {
       
        limpiarFormulario();

       
        mostrarMensaje("Registro no encontrado. Puede registrarlo.");
    }
}


function registrar() {
    const codigoPlanta = document.getElementById("txtcodigo").value;
    const nombrePlanta = document.getElementById("txtnombre").value;
    const tipoPlanta = document.getElementById("txttipo").value;
    const altura = document.getElementById("txtaltura").value;
    const color = document.getElementById("txtcolor").value;
    const tipoRiego = document.getElementById("cbotiporiego").value;
    const floracion = document.querySelector('input[name="opfloracion"]:checked').value;
    const precio = document.getElementById("txtprecio").value;
    const cargo5 = document.getElementById("cbocargo5").value;
    const stock = document.getElementById("txtstock").value;
    const proveedor = document.getElementById("txtproveedor").value;
    const cargo10 = document.getElementById("cbocargo10").value;

    
    if (!validarCampo1(codigoPlanta)) {
        mostrarMensaje("El campo1 debe ser único y tener una longitud de 5 caracteres.");
        return;
    }

    if (!validarCamposAlfanumericos(nombrePlanta, tipoPlanta, color, proveedor)) {
        mostrarMensaje("Los campos de texto deben ser alfanuméricos y no estar vacíos.");
        return;
    }

    if (!validarCamposNumericos(altura, precio, stock)) {
        mostrarMensaje("Los campos de altura, precio y stock deben ser numéricos y positivos.");
        return;
    }

    if (!validarCamposSelect(tipoRiego, cargo5, cargo10)) {
        mostrarMensaje("Debe seleccionar una opción para los campos tipo select.");
        return;
    }

    if (!validarCamposRadio(floracion)) {
        mostrarMensaje("Debe seleccionar una opción para los campos de radio.");
        return;
    }

    if (!validarCamposNoVacios(codigoPlanta, nombrePlanta, tipoPlanta, altura, color, tipoRiego, floracion, precio, cargo5, stock, proveedor, cargo10)) {
        mostrarMensaje("Ninguno de los campos debe quedar vacío.");
        return;
    }

   
    registros.push({
        campo1: codigoPlanta,
        campo2: nombrePlanta,
        campo3: tipoPlanta,
        campo4: altura,
        campo5: color,
        campo6: tipoRiego,
        campo7: floracion,
        campo8: precio,
        campo9: cargo5,
        campo10: stock,
        campo11: proveedor,
        campo12: cargo10
    });

    
    mostrarMensaje("Registro agregado con éxito.");

    
    actualizarTabla();

    
    limpiarFormulario();
}


function modificar() {
    const codigoPlanta = document.getElementById("txtcodigo").value;
    const nombrePlanta = document.getElementById("txtnombre").value;
    const tipoPlanta = document.getElementById("txttipo").value;
    const altura = document.getElementById("txtaltura").value;
    const color = document.getElementById("txtcolor").value;
    const tipoRiego = document.getElementById("cbotiporiego").value;
    const floracion = document.querySelector('input[name="opfloracion"]:checked').value;
    const precio = document.getElementById("txtprecio").value;
    const cargo5 = document.getElementById("cbocargo5").value;
    const stock = document.getElementById("txtstock").value;
    const proveedor = document.getElementById("txtproveedor").value;
    const cargo10 = document.getElementById("cbocargo10").value;

    
    if (!validarCampo1(codigoPlanta)) {
        mostrarMensaje("El campo1 debe ser único y tener una longitud de 5 caracteres.");
        return;
    }

    if (!validarCamposAlfanumericos(nombrePlanta, tipoPlanta, color, proveedor)) {
        mostrarMensaje("Los campos de texto deben ser alfanuméricos y no estar vacíos.");
        return;
    }

    if (!validarCamposNumericos(altura, precio, stock)) {
        mostrarMensaje("Los campos de altura, precio y stock deben ser numéricos y positivos.");
        return;
    }

    if (!validarCamposSelect(tipoRiego, cargo5, cargo10)) {
        mostrarMensaje("Debe seleccionar una opción para los campos tipo select.");
        return;
    }

    if (!validarCamposRadio(floracion)) {
        mostrarMensaje("Debe seleccionar una opción para los campos de radio.");
        return;
    }

    if (!validarCamposNoVacios(nombrePlanta, tipoPlanta, altura, color, tipoRiego, floracion, precio, cargo5, stock, proveedor, cargo10)) {
        mostrarMensaje("Ninguno de los campos debe quedar vacío.");
        return;
    }

  
    const index = registros.findIndex(registro => registro.campo1 === codigoPlanta);

    if (index !== -1) {
        
        registros[index] = {
            campo1: codigoPlanta,
            campo2: nombrePlanta,
            campo3: tipoPlanta,
            campo4: altura,
            campo5: color,
            campo6: tipoRiego,
            campo7: floracion,
            campo8: precio,
            campo9: cargo5,
            campo10: stock,
            campo11: proveedor,
            campo12: cargo10
        };

        
        mostrarMensaje("Registro modificado con éxito.");

        
        actualizarTabla();

       
        limpiarFormulario();
    } else {
        mostrarMensaje("El registro a modificar no existe.");
    }
}


function eliminar() {
    const codigoPlanta = document.getElementById("txtcodigo").value;

   
    const index = registros.findIndex(registro => registro.campo1 === codigoPlanta);

    if (index !== -1) {
        
        registros.splice(index, 1);

        
        mostrarMensaje("Registro eliminado con éxito.");

        
        actualizarTabla();

        
        limpiarFormulario();
    } else {
        mostrarMensaje("El registro a eliminar no existe.");
    }
}

function mostrarMensaje(mensaje, esError = false) {
    const mensajesDiv = document.getElementById("mensajes");
    const alertClass = esError ? "alert-danger" : "alert-success";
    const alertHTML = `<div class="alert ${alertClass}" role="alert">${mensaje}</div>`;
    mensajesDiv.innerHTML = alertHTML;
}

function limpiarFormulario() {
    document.getElementById("txtnombre").value = "";
    document.getElementById("txttipo").value = "";
    document.getElementById("txtaltura").value = "";
    document.getElementById("txtcolor").value = "";
    document.getElementById("cbotiporiego").value = "";
    document.getElementById("opflorsi").checked = false;
    document.getElementById("opflorno").checked = false;
    document.getElementById("txtprecio").value = "";
    document.getElementById("cbocargo5").value = "";
    document.getElementById("txtstock").value = "";
    document.getElementById("txtproveedor").value = "";
    document.getElementById("cbocargo10").value = "";
}

function actualizarTabla() {
    const tablaBody = document.getElementById("tabla-body");
    tablaBody.innerHTML = "";
    registros.forEach(registro => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${registro.campo1}</td>
            <td>${registro.campo2}</td>
            <td>${registro.campo3}</td>
            <td>${registro.campo4}</td>
            <td>${registro.campo5}</td>
            <td>${registro.campo6}</td>
            <td>${registro.campo7}</td>
            <td>${registro.campo8}</td>
            <td>${registro.campo9}</td>
            <td>${registro.campo10}</td>
            <td>${registro.campo11}</td>
            <td>${registro.campo12}</td>
        `;
        tablaBody.appendChild(fila);
    });
}

actualizarTabla();

