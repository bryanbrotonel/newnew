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
  <div class="ui text container" style="width: 500px">
    <h3 style="text-align: center;">Know any new artists? Plug them in.</h3>
       <div class="ui stacked padded equal width segment form">
         <div class="field">
           <div class="ui left icon input">
             <i class="user icon"></i>
             <input type="text" name="name" placeholder="Artist Name">
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
         <div class="field">
           <div class="ui large submit button">Submit</div>
         </div>
       </div>
  </div>
@stop
