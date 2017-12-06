@extends('pages.master')

@section('scripts')
  <script src="{{ url('/js/contact.js')}}"></script>
@stop

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
      <h6 class="text-muted">Plug them in</h6>
    </div>
    <div class="card form-body mx-auto">
      <div class="card-body">
        <div class="form-group">
          <input id="plugName" type="text" class="form-control" placeholder="Your Name">
        </div>
        <div class="form-group">
          <input id="artistName" type="text" class="form-control" placeholder="Artist Name">
        </div>
        <button id="submitArtist" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="text-center pt-4">
      <a href="https://www.instagram.com/bryanbrotonel/" target="_blank">@bryanbrotonel</a>
      <br>
      <a href="mailto:hello@bryanbrotonel.me">hello@bryanbrotonel.me</a>
    </div>
  </div>
@stop
