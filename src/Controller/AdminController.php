<?php

namespace App\Controller;

use App\Data\LawData;
use App\Form\LawType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/admin", name: "admin.")]
class AdminController extends AbstractController
{

	#[Route("/lex/lcr", name: "law.edit")]
	public function lawEdit(): Response
	{
		$law = (new LawData())
			->setTitle("Loi fédérale sur la circulation routière")
			->setPublishedAt(new \DateTimeImmutable("2023-10-01"))
		;

		$form = $this->createForm(LawType::class, $law);

		return $this->render('admin/law/edit.html.twig', ['form' => $form->createView()]);
	}

}