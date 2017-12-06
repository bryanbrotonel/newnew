@extends('pages.master')

@section('scripts')
  <script src="{{ url('/js/login.js')}}"></script>
@stop

@section('title')
  new new | login
@stop

@section('content')
  <div class="col-centered">
    <div class="text-center mb-4">
      <h3>Developer Login</h3>
    </div>
    <div class="card form-body mx-auto">
      <div class="card-body">
        <div class="form-group">
          <input id="email" type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <input id="password" type="password" class="form-control" placeholder="Password">
        </div>
        <button id="loginButton" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
@stop
