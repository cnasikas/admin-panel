<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
     public function handle($request, Closure $next)
    {
        header("Access-Control-Allow-Origin: *");
        $log = $request->isMethod("OPTIONS") ? 'true' : 'false';
        Log::debug('yo');
        Log::debug($request->method());

        // ALLOW OPTIONS METHOD
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin, Authorization'
        ];
        if($request->isMethod("OPTIONS")) {
                // The client-side application can set only headers allowed in Access-Control-Allow-Headers
                return Response::make('OK', 200, $headers);
        }

        $response = $next($request);
        foreach($headers as $key => $value){
            $response->header($key, $value);
        }

        return $response;
    }
}
