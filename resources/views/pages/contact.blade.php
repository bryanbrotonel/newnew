@extends('pages.master')

@section('title')
  new new | contact
@stop

@section('header')
  contact
@stop

@section('menuItems')
  <a class="item" href="/">home</a>
  <a class="item" href="motive">motive</a>
  <a class="active item">contact</a>
@stop

@section('content')
  <div class="ui middle aligned center aligned grid">
    <div class="column" style="width: 450px;">
      <div class="ui header">
        <h2>Know any new artists?</h2>
        <h4>Plug them in.</h4>
      </div>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="name" placeholder="Your Name">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="plug icon"></i>
              <input type="text" name="artistName" placeholder="Artist Name">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="soundcloud icon"></i>
              <input type="text" name="soundcloud" placeholder="SoundCloud">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="instagram icon"></i>
              <input type="text" name="instagram" placeholder="Instagram">
            </div>
          </div>
          <div class="ui fluid large submit button">Submit</div>
        </div>
      </form>
    </div>
  </div>
@stop
