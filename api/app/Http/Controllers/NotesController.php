<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Note;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Routing\Controller as BaseController;

class NotesController extends BaseController {

	protected $note;
	protected $response;
	protected $hasher;
	protected $validator;

	public function __construct(Note $note,
		\Response $response,
		\Illuminate\Hashing\BcryptHasher $hasher,
		\Inc\Services\Validation\NotesValidator $validator){

		$this->note = $note;
		$this->response = $response;
		$this->hasher = $hasher;
		$this->validator = $validator;

	}


	public function index()
	{
		return $this->note->orderBy('updated_at', 'desc')->get();
	}



	public function store()
	{
		$input = Input::json();

		$this->validator->with($input->all())->validate();

		$this->note->fill($input->all())->save();

		return $this->note;
	}



	public function show($id)
	{

		return $this->note->find($id);
	}



	public function update($id)
	{

		$input = Input::json();

		$this->validator->with($input->all())->validate();

		$this->note->find($id)->fill($input->all())->save();

		return $this->note->find($id);

	}



	public function destroy($id)
	{
    $note = $this->note->find($id);
    $note->delete();
    return $note;
	}


}
