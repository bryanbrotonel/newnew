<?php

function setClassForURLPath($path, $class='active'){
    return Request::is($path) ? $class: '';
}

?>
