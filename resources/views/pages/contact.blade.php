@extends('pages.master')

@section('title')
  new new | contact
@stop

@section('header')
  contact
@stop

@section('content')
  <div class="col-centered">
    <div class="text-center mb-4">
      <h3>Know any artists?</h3>
      <h5 class="text-muted">Plug them in</h5>
    </div>
    <div class="card form-body mx-auto">
      <form class="card-body" action="">
        <div class="form-group">
          <input id="userName" type="text" class="form-control" placeholder="Your Name">
        </div>
        <div class="form-group">
          <input id="artistName" type="text" class="form-control" placeholder="Artist Name">
        </div>
        <div class="form-group">
          <input id="artistName" type="text" class="form-control" placeholder="SoundCloud">
        </div>
        <div class="form-group">
          <input id="artistName" type="text" class="form-control" placeholder="Instagram">
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
@stop
