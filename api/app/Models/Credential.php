<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Credential extends Model {

	protected $table = 'credentials';

	protected $guarded = array('id');

  public function project()
  {
      return $this->belongsTo('App\Models\Project', 'project_id');
  }
}
