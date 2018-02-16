<?php

namespace Inc\Services\Validation;

use Inc\Services\Validation\Validation;

class UserRegistrationValidator extends Validation{

	protected $rules = [
		'username' =>['required', 'min:3', 'max:50'],
		'password' =>['required', 'min:3']

	];

}