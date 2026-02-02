<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class Usuario2Controller extends AbstractController
{
    private $contactos = array(
        array("codigo" => 1, "nombre" => "Juan Pérez",
        "telefono" => "966112233", "email" => "juanp@gmail.com"),
        array("codigo" => 2, "nombre" => "Ana López",
        "telefono" => "965667788", "email" => "anita@hotmail.com"),
        array("codigo" => 3, "nombre" => "Mario Montero",
        "telefono" => "965929190", "email" => "mario.mont@gmail.com"),
        array("codigo" => 4, "nombre" => "Laura Martínez",
        "telefono" => "611223344", "email" => "lm2000@gmail.com"),
        array("codigo" => 5, "nombre" => "Nora Jover",
        "telefono" => "638765432", "email" => "norajover@hotmail.com"),
    );

    #[Route('/usuario2/{codigo<\d+>}', name: 'ficha_usuario2')]
    public function buscar($codigo): Response
    {
        $resultado = array_filter($this->contactos, 
            function($contacto) use($codigo){
                return $contacto['codigo']==$codigo;
            }
        );
        if(count($resultado)>0){
            return $this->render('usuario2/index.html.twig', array(
                'usuario' => array_shift($resultado)),
            );
        }else{
            return $this->render('usuario2/index.html.twig', array(
                'usuairo' => null,
            ));
        }
    }
}
