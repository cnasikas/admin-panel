<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model {

	protected $table = 'projects';

	protected $fillable = array('title', 'url', 'notes', 'completed', 'completed_at', 'hours', 'amount', 'tax', 'currency', 'paid', 'receipt');

	public function payments()
  {
      return $this->hasMany('App\Models\Payment');
  }

  public function credentials()
  {
      return $this->hasMany('App\Models\Credential');
  }

}
