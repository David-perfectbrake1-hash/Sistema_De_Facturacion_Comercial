// 02-marcoTeorico.js

// Esperamos a que toda la página HTML haya cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionamos el botón que dice "Calcular"
    let boton = document.getElementById('btn-calc-tema1');

    // Le decimos al botón: "Cuando te hagan clic, ejecuta esta función"
    boton.addEventListener('click', function() {

        // Obtenemos el valor que escribió el usuario en el input de precio
        // parseFloat convierte el texto "800" en número 800
        let precio = parseFloat(document.getElementById('precio-tema1').value);

        // Obtenemos el valor de la tasa de IVA (por defecto viene 15)
        let tasa = parseFloat(document.getElementById('tasa-tema1').value);

        // Validación: si el usuario dejó vacío o escribió letras, avisamos y salimos
        if (isNaN(precio) || isNaN(tasa)) {
            alert("Por favor, ingresa valores numéricos válidos.");
            return; // Detiene el código aquí para no calcular errores
        }

        // Hacemos los cálculos matemáticos
        let iva = precio * (tasa / 100);   // Ej: 800 * 0.15 = 120
        let total = precio + iva;          // Ej: 800 + 120 = 920

        // Seleccionamos la caja donde se mostrarán los resultados
        let cajaResultados = document.getElementById('res-tema1');

        // Escribimos el resultado dentro de esa caja usando HTML básico
        cajaResultados.innerHTML = `
            <table class="resultado-tabla">
                <tbody>
                    <tr><td>Base Imponible:</td><td>$${precio.toFixed(2)}</td></tr>
                    <tr><td>IVA (${tasa}%):</td><td>$${iva.toFixed(2)}</td></tr>
                    <tr><td><strong>Total a pagar:</strong></td><td><strong>$${total.toFixed(2)}</strong></td></tr>
                </tbody>
            </table>
    
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed #dee2e6; 
            color: #0d6efd; font-size: 0.9rem;">
        💡      <strong>Flujo paso a paso:</strong>
                <br>
                Paso 1 (Calcular IVA): 
                $${precio.toFixed(2)} × ${(tasa / 100).toFixed(2)} = $${iva.toFixed(2)}
                <br>
                Paso 2 (Sumar Total): 
                $${precio.toFixed(2)} + $${iva.toFixed(2)} = $${total.toFixed(2)}
            </div>
            `;
    });

    // ====== CÁLCULO TEMA 2: PRODUCTOS TARIFA 0% ======
    let botonTema2 = document.getElementById('btn-calc-tema2');

    botonTema2.addEventListener('click', function() {
    // Obtener el valor del producto con tarifa 0%
    let precio = parseFloat(document.getElementById('precio-tema2').value);

    // Validación de datos
    if (isNaN(precio) || precio < 0) {
        alert("Por favor, ingresa un precio válido mayor o igual a 0.");
        return;
    }

    // Cálculos matemáticos (El IVA es fijado en 0)
    let tasa = parseFloat(document.getElementById('tasa-tema2').value); // Leerá 0 automáticamente;
    let iva = precio * (tasa / 100); // Dará siempre 0
    let total = precio + iva;

    // Seleccionar la caja de resultados del Tema 2
    let cajaResultados2 = document.getElementById('res-tema2');

    // Inyectar la estructura usando la tabla
    cajaResultados2.innerHTML = `
        <table class="resultado-tabla">
            <tbody>
                <tr><td>Subtotal (Tarifa 0%):</td><td>$${precio.toFixed(2)}</td></tr>
                <tr><td>IVA (0%):</td><td>$${iva.toFixed(2)}</td></tr>
                <tr>
                    <td><strong>Total a pagar:</strong></td>
                    <td><strong>$${total.toFixed(2)}</strong></td>
                </tr>
            </tbody>
        </table>
        
        <div style="margin-top: 12px; padding-top: 8px; 
        border-top: 1px dashed #dee2e6; color: #0d6efd; font-size: 0.9rem;">
            💡 <strong>Flujo paso a paso (Bienes Esenciales):</strong>
            <br>
            Paso 1 (Calcular IVA): $${precio.toFixed(2)} × 0.00 = $${iva.toFixed(2)}
            <br>
            Paso 2 (Sumar Total): $${precio.toFixed(2)} + $${iva.toFixed(2)} = $${total.toFixed(2)}
            <br>
            <small style="color: #6c757d; display: block; margin-top: 4px;">
                *Nota: 
                Aunque el impuesto es $0.00, 
                este valor se debe reportar obligatoriamente al SRI.
            </small>
        </div>
    `;
});
});