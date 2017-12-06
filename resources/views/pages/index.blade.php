@extends('pages.master')

@section('scripts')
  <script src="{{ url('/js/index.js')}}"></script>
@stop


@section('title')
  new new
@stop

@section('content')
  <div>
    <ul id="postList" class="list-unstyled">
    </ul>
  </div>
@stop
