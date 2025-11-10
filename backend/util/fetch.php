<?php

    function fetchData($url){
    
        $request = file_get_contents($url);
    
        return json_decode($request);

    }


       
?>