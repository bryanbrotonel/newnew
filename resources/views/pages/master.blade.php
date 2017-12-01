<!doctype html>
<html lang="{{ app()->getLocale() }}">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- jQuery --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    {{-- Firebase JavaScript --}}
    <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
    {{-- Semantic UI JS --}}
    <script src="{{ url('/semantic/dist/components/sidebar.min.js') }}"></script>
    {{-- Homebrewed JS --}}
    <script src="{{ url('/js/main.js') }}"></script>
    {{-- Semantic UI CSS --}}
    <link href="{{ url('/semantic/dist/semantic.min.css') }}" rel="stylesheet" type="text/css" />
    {{-- Homebrewed CSS --}}
    <link href="{{ url('/css/styles.css') }}" rel="stylesheet" type="text/css" />
    <title>
      @yield('title')
    </title>
  </head>

  <body>
    <div class="ui vertical inverted sidebar menu">
      <div class="item"><h1>new new</h1></div>
      @yield('menuItems')
    </div>

    <div class="pusher">
    <div class="ui container">
      <div class="topHeader">
        <div class="ten wide centered column">
          <div class="ui secondary menu medium">
            <div class="item"><h1>new new</h1></div>
            @yield('menuItems')
          </div>
        </div>
        <div class="ui mobile only padded grid">
          <div class="three column row">
            <div class="column toc item">
              <i class="icon sidebar"></i>
            </div>
            <div class="column textCenter">
              <a href="/">
                <h3>new new</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    @yield('content')
  </div>
</div>

    <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="motive" class="item">About</a>
            <a href="contact" class="item">Contact</a>
            <a href="login" class="item">Login</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Credits</h4>
          <div class="ui inverted link list">
            <a href="https://laravel.com/" target="_blank" class="item">Laravel</a>
            <a href="https://semantic-ui.com/" target="_blank" class="item">Semantic UI</a>
            <a href="https://icons8.com/" target="_blank" class="item">Icons 8</a>
            <a href="https://google.ca/" target="_blank" class="item">Images from Google</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">New New</h4>
          <p>A place where we shed light on new artists.</p>
        </div>
      </div>
    </div>
  </div>
  </body>

</html>
