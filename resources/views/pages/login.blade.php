@extends('pages.master')

@section('title')
  new new | login
@stop

@section('header')
  login
@stop

@section('menuItems')
  <a class="item" href="/">home</a>
  <a class="item" href="motive">motive</a>
  <a class="item" href="contact">contact</a>
@stop

@section('content')
  <div class="ui middle aligned center aligned grid">
    <div class="column" style="width: 450px;">
      <h2 class="ui header">
        Developer Login
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="Username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large submit button">Login</div>
        </div>
        <div class="ui error message"></div>
      </form>
    </div>
  </div>
@stop
