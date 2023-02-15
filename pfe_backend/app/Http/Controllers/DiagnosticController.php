<?php

namespace App\Http\Controllers;

use App\Models\Diagnostic;
use App\Models\User;
use Illuminate\Http\Request;

class DiagnosticController extends Controller
{
    public function save(Request $request){
        $this->validate($request,[
            "image"=>"string|required",
            "name"=>"required|string|unique:diagnostics",
            "A"=>"required|numeric",
            "B"=>"required|numeric",
            "C"=>"required|numeric",
            "D"=>"required|numeric",
            "E"=>"required|numeric",
        ]);
        $user = User::where("uid",$request->uid)->get()->first();
        $request->request->add(["user_uid"=>$user->uid]);
        $diagnostic = Diagnostic::create($request->only(["user_uid","image","name", "A","B","C","D","E"]));
        return response()->json(["diagnostic"=>$diagnostic]);
    }
    public function all(Request $request){
        $diagnostics = Diagnostic::where("user_uid",$request->uid)->get();
        return response()->json(["diagnostics"=>$diagnostics]);
    }
}
