<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model {

	protected $table = 'payments';

	protected $guarded = array('id');

  public function project()
  {
      return $this->belongsTo('App\Models\Project', 'project_id');
  }

}
