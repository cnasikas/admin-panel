<?php

namespace Inc\Services\Validation;

use Inc\Services\Validation\Validation;

class ProjectRegistrationValidator extends Validation{

	protected $rules = [
		'title' =>['required'],
		'url' =>['url'],
    'amount' => ['numeric'],
		'tax' => ['numeric'],
		'hours' => ['numeric'],
    'completed' => ['boolean'],
    'paid' => ['boolean'],
    'receipt' => ['boolean'],
    'completed_at' => ['date'],

	];

}
