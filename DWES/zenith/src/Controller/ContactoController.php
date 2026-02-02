<?php

namespace App\Controller;

use App\Entity\Contacto;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ContactoController extends AbstractController
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

    #[Route('/contacto/{codigo<\d+>}', name: 'ficha_contacto')]
    public function ficha($codigo){
        $resultado = array_filter($this->contactos,
        function($contacto) use ($codigo)
        {
            return $contacto["codigo"] == $codigo;
        });

        if (count($resultado) > 0)
            return $this->render('contacto/ficha_contacto.html.twig', array(
            'contacto' => array_shift($resultado)
        ));
        else
            return $this->render('contacto/ficha_contacto.html.twig', array(
            'contacto' => NULL
        ));
    }

    #[Route('/contacto/insertar', name: 'insertar_contacto')]
    public function insertar(EntityManagerInterface $entityManager): Response
    {
        $contacto = new Contacto();
        $contacto->setNombre('Pedro');
        $contacto->setTelefono('636595608');
        $contacto->setEmail('zenith@prueba.es');

        $entityManager->persist($contacto);
        $entityManager->flush();

        return new Response('Contacto insertado con id ' . $contacto->getId());
    }

    #[Route('/contacto', name: 'buscar_contacto')]
    public function buscar($texto)
    {
        $resultado = array_filter($this->contactos,
            function($contacto) use ($texto)
            {
                return stripos($contacto["nombre"], $texto) !== FALSE;
            }
        );
        $respuesta = "";
        if (count($resultado) > 0)
        {
            foreach ($resultado as $contacto)
                $respuesta .= "<ul><li>" . $contacto["nombre"] . "</li>" .
                "<li>" . $contacto["telefono"] . "</li>" .
                "<li>" . $contacto["email"] . "</li></ul>";
            return new Response("<html><body>" . $respuesta . "</body></html>");
        }
        else
            return new Response("No se han encontrado contactos");
    }
}