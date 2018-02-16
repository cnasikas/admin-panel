<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayment extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
    Schema::create('payments', function (Blueprint $table) {
      $table->increments('id');
      $table->timestamp('paid_at')->nullable()->default(NULL);
      $table->decimal('amount', 10, 2);
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
		Schema::drop('payments');
	}

}
