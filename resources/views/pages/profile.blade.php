@extends('pages.master')

@section('title')
  @if(isset($artistName))
    {{$artistName}}
  @else
    Profile Page
  @endif
@stop

@section('menuItems')
  <a class="item" href="/">home</a>
  <a class="item" href="motive">motive</a>
  <a class="item" href="contact">contact</a>
@stop
