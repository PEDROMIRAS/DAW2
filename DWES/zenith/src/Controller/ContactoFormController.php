<?php

namespace App\Controller;

use App\Entity\Contacto;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
// Importaciones específicas para el FormBuilder
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ContactoFormController extends AbstractController
{
    #[Route('/contacto/nuevo', name: 'nuevo_contacto')]
    public function nuevo(Request $request, EntityManagerInterface $em): Response
    {
        $contacto = new Contacto();

        // Creamos el formulario directamente en el controlador 
        $formulario = $this->createFormBuilder($contacto)
            ->add('nombre', TextType::class)
            ->add('telefono', TextType::class)
            ->add('email', EmailType::class)
            ->add('save', SubmitType::class, array('label' => 'Enviar'))
            ->getForm();

        // Procesamos la petición 
        $formulario->handleRequest($request);

        if ($formulario->isSubmitted() && $formulario->isValid()) {
            // Guardamos en la base de datos de XAMPP
            $em->persist($contacto);
            $em->flush();

            return $this->redirectToRoute('inicio');
        }

        return $this->render('contacto_form/contacto_form.html.twig', array(
            'formulario' => $formulario->createView()
        ));
    }
}