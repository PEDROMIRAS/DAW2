<?php
namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Pelicula;

#[Route('/peliculas/api')]
class PeliculasRestController extends AbstractController
{
    #[Route('/', name: 'lista_peliculas', methods: ['GET'])]
    public function lista_peliculas(SerializerInterface $serializer, EntityManagerInterface $entityManager): Response
    {
        $repositorio = $entityManager->getRepository(Pelicula::class);
        $peliculas = $repositorio->findAll();

        if (count($peliculas) > 0) {
            $respuesta = [
                'ok' => true,
                'peliculas' => $peliculas
            ];
        } else {
            $respuesta = [
                'ok' => false,
                'error' => 'No se han encontrado películas'
            ];
        } 
        return new Response($serializer->serialize($respuesta, "json"), 200, ['Content-Type' => 'application/json']);
    }

    #[Route('/{id}', name: 'busca_pelicula', methods: ['GET'])]
    public function busca_pelicula($id, SerializerInterface $serializer, EntityManagerInterface $entityManager): Response
    {
        $repositorio = $entityManager->getRepository(Pelicula::class);
        $pelicula = $repositorio->find($id);

        if ($pelicula) {
            $respuesta = [
                'ok' => true,
                'pelicula' => $pelicula
            ];
        } else {
            $respuesta = [
                'ok' => false,
                'error' => 'No se han encontrado película'
            ];
        } 
        return new Response($serializer->serialize($respuesta, "json"), 200, ['Content-Type' => 'application/json']);
    }

    #[Route('/', name: 'nueva_pelicula', methods: ['POST'])]
    public function nueva_pelicula(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager): Response
    {
        $pelicula = new Pelicula();
        // Nota: Si envías JSON en el body, asegúrate de procesar el contenido correctamente
        $pelicula->setTitulo($request->get('titulo'));
        $pelicula->setAnyo($request->get('anyo'));

        $entityManager->persist($pelicula);
        $entityManager->flush();

        $respuesta = [
            'ok' => true,
            'pelicula' => $pelicula
        ];
        
        return new Response($serializer->serialize($respuesta, "json"), 201, ['Content-Type' => 'application/json']);
    }

    #[Route('/{id}', name: 'borra_pelicula', methods: ['DELETE'])]
    public function borra_pelicula($id, SerializerInterface $serializer, EntityManagerInterface $entityManager): Response
    {
        $repositorio = $entityManager->getRepository(Pelicula::class);
        $pelicula = $repositorio->find($id);

        if ($pelicula) {
            $entityManager->remove($pelicula);
            $entityManager->flush();
            $respuesta = [
                'ok' => true,
                'pelicula' => $pelicula
            ];
        } else {
            $respuesta = [
                'ok' => false,
                'error' => 'Pelicula no encontrada'
            ];
        }
        return new Response($serializer->serialize($respuesta, "json"), 200, ['Content-Type' => 'application/json']);
    }

    #[Route('/{id}', name: 'modifica_pelicula', methods: ['PUT'])]
    public function modifica_pelicula($id, Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager): Response
    {
        $repositorio = $entityManager->getRepository(Pelicula::class);
        $pelicula = $repositorio->find($id);

        if ($pelicula) {
            $pelicula->setTitulo($request->get('titulo'));
            $pelicula->setAnyo($request->get('anyo'));
            $entityManager->flush();
            $respuesta = [
                'ok' => true,
                'pelicula' => $pelicula
            ];    
        } else {
            $respuesta = [
                'ok' => false,
                'error' => 'Pelicula no encontrada'
            ];        
        }
        return new Response($serializer->serialize($respuesta, "json"), 200, ['Content-Type' => 'application/json']);
    }
}