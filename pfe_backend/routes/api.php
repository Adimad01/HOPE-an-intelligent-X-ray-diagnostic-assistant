<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DiagnosticController;
use App\Http\Middleware\FirebaseAuthenticate;
use App\Http\Middleware\FirebaseSignInSignUp;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/', [AuthController::class,'welcome']);
Route::get('/bearer', [AuthController::class,'bearer'])->middleware('firebase_auth');
Route::middleware([FirebaseSignInSignUp::class])->group(function(){
    Route::post('/signup', [AuthController::class,'signUp']);
    Route::post('/signin', [AuthController::class,'signIn']);
    Route::post('/social/signin', [AuthController::class,'socialSignIn']);
    Route::post('/reset/password',[AuthController::class,'passwordReset']);
});
Route::middleware([FirebaseAuthenticate::class])->group(function(){
    Route::post('/diagnostic/save', [DiagnosticController::class,'save']);
    Route::get('/diagnostic/all',  [DiagnosticController::class,'all']);
});

