<?php

namespace App\Data;

class StateData
{

	private string $name;

	public function getName(): string
	{
		return $this->name;
	}

	public function setName(string $name): StateData
	{
		$this->name = $name;
		return $this;
	}


}