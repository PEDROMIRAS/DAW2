<?php

namespace App\Controller;

use App\Entity\Libro;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;


final class LibroController extends AbstractController
{
    // IMPORTANTE: Esta ruta va PRIMERO para que no choque con /{isbn}
    #[Route('/libro/nuevo', name: 'libro_nuevo')]
    public function nuevo(Request $request, EntityManagerInterface $manager): Response
    {
        $libro = new Libro();

        $formulario = $this->createFormBuilder($libro)
            ->add('isbn', TextType::class, ['label' => 'ISBN (Alfanumérico)'])
            ->add('titulo', TextType::class)
            ->add('autor', TextType::class)
            ->add('paginas', IntegerType::class)
            //Cambiado a ChoiceType con las 5 editoriales españolas
            ->add('editorial', ChoiceType::class, [
                'label' => 'Editorial',
                'choices' => [
                    'Planeta' => 'planeta',
                    'Alfaguara' => 'alfaguara',
                    'Anaya' => 'anaya',
                    'Santillana' => 'santillana',
                    'Espasa' => 'espasa',
                ],
                'placeholder' => 'Selecciona una editorial...'
            ])
            ->add('save', SubmitType::class, array('label' => 'Enviar'))
            ->getForm();

        $formulario->handleRequest($request);

        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $manager->persist($libro);
            $manager->flush();

            // Redirigimos a la página de inicio o éxito
            return $this->redirectToRoute('inicio');
        }

        return $this->render('libro/nuevo.html.twig', array(
            'formulario' => $formulario->createView()
        ));
    }

    #[Route('/libro/editar/{isbn}', name: 'editar_libro')]
    public function editar(Request $request, EntityManagerInterface $manager, $isbn): Response
    {
        $repositorio = $manager->getRepository(Libro::class);
        $libro = $repositorio->findOneBy(['isbn' => $isbn]);
        //findOneBy permite cargar los datos en el formulario para ver que se desea editar

        $formulario = $this->createFormBuilder($libro)
            //->add('id', HiddenType::Class)
            ->add('isbn', TextType::class, ['label' => 'ISBN (Alfanumérico)'])
            ->add('titulo', TextType::class)
            ->add('autor', TextType::class)
            ->add('paginas', IntegerType::class)
            //Cambiado a ChoiceType con las 5 editoriales españolas
            ->add('editorial', ChoiceType::class, [
                'label' => 'Editorial',
                'choices' => [
                    'Planeta' => 'planeta',
                    'Alfaguara' => 'alfaguara',
                    'Anaya' => 'anaya',
                    'Santillana' => 'santillana',
                    'Espasa' => 'espasa',
                ],
                'placeholder' => 'Selecciona una editorial...'
            ])
            ->add('save', SubmitType::class, array('label' => 'Editar'))
            ->getForm();

            $formulario->handleRequest($request);

        if ($formulario->isSubmitted() && $formulario->isValid()) {
            //perist() no es necesario porque ya existe en la BBDD
           // $manager->persist($libro);
            $manager->flush();

            // Redirigimos a la página de inicio o éxito
            return $this->redirectToRoute('inicio');
        }

        return $this->render('libro/editar.html.twig', array(
            'formulario' => $formulario->createView()
        ));
    }

    private $libros = array(
        array("isbn" => "A111B3", "titulo" => "El juego de Ender", "autor" => "Orson Scott Card", "paginas" => 350),
        array("isbn" => "B222C4", "titulo" => "1984", "autor" => "George Orwell", "paginas" => 328),
        array("isbn" => "C333D5", "titulo" => "El resplandor", "autor" => "Stephen King", "paginas" => 688),
        array("isbn" => "D444E6", "titulo" => "Cien años de soledad", "autor" => "Gabriel García Márquez", "paginas" => 471),
        array("isbn" => "E555F7", "titulo" => "Fahrenheit 451", "autor" => "Ray Bradbury", "paginas" => 176),
        array("isbn" => "F666G8", "titulo" => "Crónicas marcianas", "autor" => "Ray Bradbury", "paginas" => 336),
    );

    //Al ir después, no interceptará la URL "/libro/nuevo"
    #[Route('/libro/{isbn}', name: 'ficha_libro')]
    public function ficha($isbn): Response
    {
        $resultado = array_filter($this->libros, 
            function($libro) use ($isbn) {
                return $libro["isbn"] == $isbn;
            }
        );
        
        return $this->render('libro/ficha_libro.html.twig', [
            'libro' => count($resultado) > 0 ? array_shift($resultado) : null
        ]);
    }
}