<?php

namespace App\Controller;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Libro;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class InicioController extends AbstractController
{
    #[Route('/', name: 'inicio')]
    public function inicio(EntityManagerInterface $manager): Response
    {
        // Renderizamos la vista de inicio donde tenemos el texto por pantalla
        $repositorio = $manager->getRepository(Libro::class);
        $this->libros = $repositorio->findAll();
        return $this->render('inicio/inicio.html.twig', array('libros' => $this->libros));
    }
}