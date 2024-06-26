<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File as FileRule;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Gallery::orderBy('id','DESC')->get();
        return response()->json(['images'=>$data],Response::HTTP_OK);
    }


    public function upload(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => [
                'required',
                FileRule::image()
                    ->min(50)
                    ->max(12*1024)
            ]
        ]);

        if($validator->fails()){
            return response()->json(['msg'=>$validator->messages(),'status'=>400],Response::HTTP_OK);
        }

        $gallery = new Gallery();
        $dateNow = time();
        $file = $request->file('image');
        $fileName = $dateNow . '_' . $file->getClientOriginalName();
        $destinationPath = 'galleries';
        $file->move($destinationPath, $fileName);

        $gallery->image =  $fileName;
        $gallery->save();
        return response()->json(['image'=>$fileName,'status'=>200],Response::HTTP_OK);
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
        $image = Gallery::findOrFail($id);
        $fileName = $image->image;
        $result = File::delete('galleries/'.$fileName);
        $image->delete();
        if($result){
            return response()->json(['status'=>200],Response::HTTP_OK);
        }else{
            return response()->json(['status'=>400],Response::HTTP_OK);
        }
    }
}
