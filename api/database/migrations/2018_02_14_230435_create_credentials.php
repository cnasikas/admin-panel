<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCredentials extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
    Schema::create('credentials', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title', 100)->charset('utf8');
      $table->string('username', 100)->charset('utf8');
      $table->string('password', 100)->charset('utf8');
      $table->string('access_url', 100)->charset('utf8');
      $table->timestamps();
      $table->integer('project_id')->unsigned();
      $table->foreign('project_id')
      ->references('id')->on('projects')
      ->onDelete('cascade');
    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('credentials');
	}

}
