<?php

namespace App\Data;

class LawData
{

	private string $title;

	private \DateTimeImmutable $publishedAt;

	private string $state;

	public function getTitle(): string
	{
		return $this->title;
	}

	public function setTitle(string $title): LawData
	{
		$this->title = $title;
		return $this;
	}

	public function getPublishedAt(): \DateTimeImmutable
	{
		return $this->publishedAt;
	}

	public function setPublishedAt(\DateTimeImmutable $publishedAt): LawData
	{
		$this->publishedAt = $publishedAt;
		return $this;
	}

	public function getState(): string
	{
		return $this->state;
	}

	public function setState(string $state): LawData
	{
		$this->state = $state;
		return $this;
	}


}