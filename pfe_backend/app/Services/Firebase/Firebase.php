<?php
namespace App\Services\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;
class Firebase{
    private Factory $factory;
    private Auth $auth;
    public function __construct(){
        $this->factory = (new Factory)->withServiceAccount(__DIR__.'/Firebase.json');
        $this->auth = $this->factory->createAuth();
    }
    public function getAuth():Auth{
        return $this->auth;
    }
}
