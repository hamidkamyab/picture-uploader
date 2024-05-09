<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Gallery::all();
        return response()->json(['data'=>$data],Response::HTTP_OK);
    }


    public function upload(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => [
                'required',
                File::image()
                    ->min(50)
                    ->max(12*1024)
            ]
        ]);

        if($validator->fails()){
            return response()->json(['msg'=>$validator->messages(),'status'=>400],Response::HTTP_BAD_REQUEST);
        }

        $gallery = new Gallery();
        $dateNow = time();
        $file = $request->file('image');
        $fileName = $dateNow . '_' . $file->getClientOriginalName();
        $destinationPath = 'galleries';
        $file->move($destinationPath, $fileName);

        $gallery->image =  $fileName;
        $gallery->save();
        return response()->json(['data'=>$fileName],Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
