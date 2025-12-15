<?php
function validarArtefacto($artefacto) {

    // Validar campos críticos
    if (empty($artefacto['nombre_artefacto'])) {
        return false;
    }

    if (empty($artefacto['localizacion_actual'])) {
        return false;
    }

    // Si todo está bien
    return true;
}
?>
