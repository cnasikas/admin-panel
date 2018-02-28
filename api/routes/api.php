<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/* Projects */

Route::resource('projects', 'ProjectsController', array('except' => array('create', 'edit')));

/* Finances */

Route::resource('projects.payments', 'ProjectsPaymentsController', array('except' => array('create', 'edit', 'show')));
Route::resource('projects.credentials', 'ProjectsCredentialsController', array('except' => array('create', 'edit', 'show')));

/* Notes */

Route::resource('notes', 'NotesController', array('except' => array('create', 'edit')));

/* Contacts */

Route::resource('contacts', 'ContactController', array('except' => array('create', 'edit')));
