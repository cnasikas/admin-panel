<?php

namespace App\Http\Controllers;

use App\Models\Credential;
use App\Models\Project;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class ProjectsCredentialsController extends BaseController {

	protected $credential;
	protected $response;
	protected $hasher;
	protected $validator;

	public function __construct(Credential $credential,
    Project $project,
		\Response $response,
		\Illuminate\Hashing\BcryptHasher $hasher,
		\Inc\Services\Validation\CredentialValidator $validator){

		$this->project = $project;
		$this->credential = $credential;
		$this->response = $response;
		$this->hasher = $hasher;
		$this->validator = $validator;

	}


	public function index($projectId)
	{
		return $this->project->find($projectId)->credentials()->get();
	}



	public function store($projectId)
	{
		$input = Input::json();
		$this->validator->with($input->all())->validate();
		$this->credential->fill($input->all());
		$this->credential->project_id = $projectId;
		$this->credential->save();

		return $this->credential;
	}


	public function update($projectId, $credentialId)
	{
		$input = Input::json();
		$this->validator->with($input->all())->validate();
		$this->credential->find($credentialId)->fill($input->all())->save();

    return $this->credential->find($credentialId);
	}



	public function destroy($projectId, $credentialId)
	{
    $credential = $this->credential->find($credentialId);
    $credential->delete();
		return $credential;

	}


}
