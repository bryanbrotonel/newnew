<!doctype html>
<html lang="{{ app()->getLocale() }}">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- Bootstrap UI CSS --}}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    {{-- <link rel="stylesheet" href="{{ URL::asset('assets/css/bootstrap.min.css') }}"> --}}
    <link rel="stylesheet" href="/css/app.css">
    {{-- Scripts --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    {{-- Firebase JavaScript --}}
    <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
    {{-- Google Analytics --}}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108344152-4"></script>
    {{-- Bootstrap UI JS --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    {{-- Homebrewed JS Script --}}
    <script src="/js/main.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    @yield('scripts')
    <title>
      @yield('title')
    </title>
  </head>

  <body>
    <div class="container">

      {{-- Header --}}
      <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-faded">
          <a class="navbar-brand mb-0 h1" href="/">New New</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link {{setClassForURLPath('/')}}" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link {{setClassForURLPath('motive')}}" href="motive">Motive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link {{setClassForURLPath('contact')}}" href="contact">Contact</a>
              </li>
              <li id="dashboardLink" class="nav-item" style="display:none;">
                <a class="nav-link {{setClassForURLPath('dashboard')}}" href="dashboard">Dashboard</a>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <button id="logoutButton" type="button" class="btn btn-danger" style="display:none;">Log Out</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {{-- Body --}}

      <div class="body mx-auto">
        @yield('content')
      </div>

      {{-- Footer --}}

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p>New New is a platform where we shed light on new artists</p>
              <p>Curated by <a target="_blank" href="http://bryanbrotonel.me">Bryan Brotonel</a></p>
            </div>
            <div class="col-sm-6 text-sm-right">
              <h4>Links</h4>
              <ul class="list-unstyled">
                <li> <a href="login">Login</a></li>
                <li> <a href="motive">About</a></li>
                <li> <a href="contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <p class="text-center">&copy; New New 2017</p>
        </div>
      </div>
        </div>
  </body>

</html>
