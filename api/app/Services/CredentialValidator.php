<?php

namespace Inc\Services\Validation;

use Inc\Services\Validation\Validation;

class CredentialValidator extends Validation{

	protected $rules = [
		'title' =>['required'],
		'username' =>['required'],
		'password' =>['required'],
		'access_url' =>['required', 'url']

	];

}
