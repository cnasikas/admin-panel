<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjects extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
    Schema::create('projects', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title', 100)->charset('utf8');
      $table->string('url', 100)->charset('utf8');
      $table->longText('notes')->charset('utf8')->nullable()->default(NULL);
      $table->boolean('completed')->default(0);
      $table->decimal('amount', 10, 2)->default(0.00);
      $table->decimal('tax', 10, 2)->default(0.00);
      $table->string('currency', 4)->charset('utf8')->default('EUR')->charset('utf8');
      $table->boolean('paid')->default(0);
      $table->boolean('receipt')->default(0);
      $table->timestamps();
      $table->timestamp('completed_at')->nullable()->default(NULL);
      $table->unsignedInteger('hours')->default(0);
    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('projects');
	}

}
