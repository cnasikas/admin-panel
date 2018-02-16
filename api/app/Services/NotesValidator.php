<?php

namespace Inc\Services\Validation;

use Inc\Services\Validation\Validation;

class NotesValidator extends Validation{

	protected $rules = [
		'content' =>['required']
	];

}
