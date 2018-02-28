<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'contacts';
    protected $fillable = ['first_name', 'last_name', 'email', 'company', 'job_title', 'phone', 'address', 'website', 'notes'];
}
