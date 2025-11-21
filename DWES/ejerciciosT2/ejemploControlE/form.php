        
        <!-- FORMULARIO -->
        <!-- MUESTRA LOS VALORES CORRECTOS Y LOS ERRORES -->
        
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
            <div>
                <label>NOMBRE: </label> 
                <input type="text" name="nombre" <?php mostrar_value("nombre", $errores); ?> placeholder="Nombre" /> 
                <?php mostrar_error_campo("nombre", $errores)?> 
                <br/><br/>
            </div>
            <div>
                <label>APELLIDOS: </label>
                <input type="text" name="apellidos" <?php mostrar_value("apellidos", $errores); ?> placeholder="Apellidos" />
                <?php mostrar_error_campo("apellidos", $errores)?>
                <br/><br/> 
            </div>
            <div>
                <label>CONTRASEÑA: </label> 
                <input type="password" name="contrasenia" <?php mostrar_value("contrasenia", $errores); ?> placeholder="minimo 8 caracteres" />
                <?php mostrar_error_campo("contrasenia", $errores)?>
                <br/><br/>
            </div>
            <div>
                <label>TELEFONO: </label>
                <input type="number" name="telefono" <?php mostrar_value("telefono", $errores); ?> placeholder="Telefono" />
                <?php mostrar_error_campo("telefono", $errores)?>
                <br/><br/>
            </div>
            <div>
                <label>EMAIL: </label>
                <input type="email" name="email" <?php mostrar_value("email", $errores); ?> placeholder="ejemplo@dominio.com" />
                <?php mostrar_error_campo("email", $errores)?>
                <br/><br/>
            </div>
            <div>
                <label>COMENTARIO:</label>
                <textarea type="text" name="comentario" rows="4" cols="40" placeholder="Comentario"><?php mostrar_textarea('comentario'); ?></textarea>
                <br/><br/>
            </div>
            <div>
                <label>¿TIENES ORDENADOR?:</label> 
                Si <input type="radio" name="ordenador" value="si" <?php mostrar_checked("ordenador", "si"); ?>/> 
                No <input type="radio" name="ordenador" value="no" <?php mostrar_checked("ordenador", "no"); ?>/>
                <br/><br/>
            </div>
            <div>
                <label>AFICIONES: </label> 
                <label>Atletismo</label>
                <input type="checkbox" name="aficiones[]" value="atletismo" <?php mostrar_checked_array("aficiones", "atletismo"); ?> />
                <label>Futbol</label>
                <input type="checkbox" name="aficiones[]" value="futbol" <?php mostrar_checked_array("aficiones", "futbol"); ?> > 
                <label>Baloncesto</label>
                <input type="checkbox" name="aficiones[]" value="baloncesto" <?php mostrar_checked_array("aficiones", "baloncesto")?> />
                <br/><br/> 
            </div>
            <div>
                <label>Provincia:</label> 
                <select name="provincia"> 
                    <option value="Murcia" <?php mostrar_selected('provincia', 'Murcia'); ?> >Murcia</option>
                    <option value="Cartagena" <?php mostrar_selected('provincia', 'Cartagena'); ?> >Cartagena</option>
                    <option value="Sevilla" <?php mostrar_selected('provincia', 'Sevilla'); ?> >Sevilla</option>
                    <option value="Valencia" <?php mostrar_selected('provincia', 'Valencia'); ?> >Valencia</option>
                    <option value="Barcelona" <?php mostrar_selected('provincia', 'Barcelona'); ?> >Barcelona</option>
                </select>
                <br/><br/>
            </div>
            <input type="submit" name="enviar" value="ENVIAR"/>
            <input type="reset" value="BORRAR"/>
        </form>
