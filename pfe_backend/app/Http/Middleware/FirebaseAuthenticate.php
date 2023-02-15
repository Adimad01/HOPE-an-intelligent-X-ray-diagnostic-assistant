<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\Firebase\Firebase;
use Firebase\Auth\Token\Exception\InvalidToken;

class FirebaseAuthenticate
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
        $firebase = new Firebase;
        $auth = $firebase->getAuth();
        try {
            $verifiedIdToken = $auth->verifyIdToken($request->bearerToken());
            $request->request->add(['uid' => $verifiedIdToken->claims()->get('sub')]);
            return $next($request);
        } catch (InvalidToken $e) {
           return response()->json(["message"=>"Veuillez vous connecter"],401);
        } catch (\InvalidArgumentException $e) {
            return response()->json(["message"=>"Une erreur s'est produite"],401);
        }
    }
}
