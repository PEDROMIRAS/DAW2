<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class InicioController extends AbstractController
{
    #[Route('/inicio', name: 'inicio')]
    public function inicio(): Response
    {
        return $this->render('inicio/inicio.html.twig');
        return new Response('');
    }
}
