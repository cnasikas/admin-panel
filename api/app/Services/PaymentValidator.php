<?php

namespace Inc\Services\Validation;

use Inc\Services\Validation\Validation;

class PaymentValidator extends Validation{

	protected $rules = [
		'amount' => ['required', 'numeric'],
		'paid_at' => ['required', 'date']
	];

}
