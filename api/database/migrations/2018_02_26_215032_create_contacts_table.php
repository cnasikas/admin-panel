<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name')->charset('utf8');
            $table->string('last_name')->charset('utf8')->nullable()->default(NULL);
            $table->string('company')->charset('utf8')->nullable()->default(NULL);
            $table->string('job_title')->charset('utf8')->nullable()->default(NULL);
            $table->string('email')->charset('utf8')->nullable()->default(NULL)->index();
            $table->string('phone')->charset('utf8')->nullable()->default(NULL);
            $table->string('address')->charset('utf8')->nullable()->default(NULL);
            $table->string('website')->charset('utf8')->nullable()->default(NULL);
            $table->longText('notes')->charset('utf8')->nullable()->default(NULL);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
