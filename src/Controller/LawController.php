<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/lex", name: "law.")]
class LawController extends AbstractController
{

	#[Route("/lcr-23")]
	public function lcr(): Response
	{
		return $this->render('law/lcr.html.twig');
	}

}