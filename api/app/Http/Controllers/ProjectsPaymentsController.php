<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Routing\Controller as BaseController;

class ProjectsPaymentsController extends BaseController {

	protected $payment;
	protected $response;
	protected $hasher;
	protected $validator;
	protected $dt;

	public function __construct(Payment $payment,
    Project $project,
		\Response $response,
		\Illuminate\Hashing\BcryptHasher $hasher,
		\Inc\Services\Validation\PaymentValidator $validator,
		\Carbon\Carbon $dt){

    $this->project = $project;
		$this->payment = $payment;
		$this->response = $response;
		$this->hasher = $hasher;
		$this->validator = $validator;
		$this->dt = $dt;

	}


	public function index($projectId)
	{
		return $this->project->find($projectId)->payments()->get();
	}



	public function store($projectId)
	{
		$input = Input::json();
		$this->validator->with($input->all())->validate();
		$this->payment->fill($input->all());
		$this->payment->project_id = $projectId;

		$this->payment->save();

		return $this->payment;
	}


	public function update($projectId, $paymentId)
	{
    $input = Input::json();
		$this->validator->with($input->all())->validate();
		$this->payment->find($paymentId)->fill($input->all())->save();

    return $this->payment->find($paymentId);
	}



	public function destroy($projectId, $paymentId)
	{
    $payment = $this->payment->find($paymentId);
    $payment->delete();
		return $payment;
	}


}
