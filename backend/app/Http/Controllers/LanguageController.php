<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Language;

class LanguageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }
    public function alldata()
    {
       $data=Language::all();
       return response($data);
    }
}
