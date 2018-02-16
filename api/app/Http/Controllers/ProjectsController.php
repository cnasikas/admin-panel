<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Routing\Controller as BaseController;

class ProjectsController extends BaseController {

	protected $project;
	protected $response;
	protected $hasher;
	protected $validator;
	protected $dt;

	public function __construct(Project $project,
		\Response $response,
		\Illuminate\Hashing\BcryptHasher $hasher,
		\Inc\Services\Validation\ProjectRegistrationValidator $validator,
		\Carbon\Carbon $dt){

		$this->project = $project;
		$this->response = $response;
		$this->hasher = $hasher;
		$this->validator = $validator;
		$this->dt = $dt;

	}


	public function index()
	{
		return $this->project->with('payments', 'credentials')->orderBy('created_at', 'desc')->get();
	}



	public function store()
	{
		$input = Input::json();

		$this->validator->with($input->all())->validate();

		$this->project->fill($input->all())->save();

    return $this->project;
	}



	public function show($id)
	{

		return $this->project->with('credentials', 'payments')->get()->find($id);
	}



	public function update($id)
	{
		$input = Input::except('credentials', 'payments');

		$this->validator->with($input)->validate();

		$project = $this->project->find($id)->fill($input);

		if (Input::has('update_complete_timestamp') && $input['update_complete_timestamp'])
		{
		    $project->completed_at = $this->dt->now()->toDateTimeString();
		}

		$this->project = $project;

		$this->project->save();

		return $this->project->with('credentials', 'payments')->find($id);
	}



	public function destroy($id)
	{
    $project = $this->project->find($id);
    $project->delete();
		return $project;
	}


}
