<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Services\Firebase\Firebase;
use Kreait\Firebase\Auth\SignIn\FailedToSignIn;

class AuthController extends Controller
{
    public function signUp(Request $request){
        $validations=[
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required'
        ];
        $this->validate($request,$validations);
        $userRecord=$request->auth->createUserWithEmailAndPassword($request->email,$request->password);
        $user = new User;
        $user->uid=$userRecord->uid;
        $user->email=$userRecord->email;
        $request->auth->sendEmailVerificationLink($request->email);
        $user->save();
        return response()->json("L'utilisateur a été créé avec succès");
    }
    public function signIn(Request $request){
        $this->validate($request,[
            "email"=>"required|email",
            "password"=>"required"
        ]);
        try{
            $result = $request->auth->signInWithEmailAndPassword($request->email,$request->password);
            $user=User::where("uid",$result->firebaseUserId())->firstOrFail();
            return response()->json(["id_token"=>$result->idToken(),"email"=>$request->email],200);
        }
        catch(FailedToSignIn $e){
            return response()->json($e->getMessage(),404);
        }
    }
    public function socialSignIn(Request $request){
        $user = User::firstOrCreate($request->only(["uid","email"]));
        return $user;
    }
    public function passwordReset(Request $request){
        $this->validate($request,["email"=>"required|email"]);
        $request->auth->sendPasswordResetLink($request->email);
        return response("Password reset link sent successfully",200);
    }
    public function bearer(Request $request){
        return $request->uid;
        $firebase = new  Firebase;
        $auth = $firebase->getAuth();
        dd($auth->verifyIdToken($request->bearerToken()));
        return $request->bearerToken();
    }
}
