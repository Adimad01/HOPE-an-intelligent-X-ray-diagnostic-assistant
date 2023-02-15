<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\Firebase\Firebase;

class FirebaseSignInSignUp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $firebase = new  Firebase;
        $auth = $firebase->getAuth();
        $request->request->add(['auth'=>$auth]);
        return $next($request);
    }
}
