<?php

namespace Inc\Services\Validation;

use Illuminate\Validation\ValidationException;
use Validator;

abstract class Validation{

	protected $rules = array();
	protected $messages = array();
	protected $input = array();

	public function with(array $input){

		$this->input = $input;

		return $this;

	}

	public function validate(){

		$this->validator = Validator::make($this->input, $this->rules, $this->messages);

    if($this->validator->fails())
			throw new ValidationException($this->validator);
	}

}
