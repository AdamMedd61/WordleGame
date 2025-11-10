<?php
class Renderer {
    public static function renderGuess($guess) {
        $letters = str_split($guess->getText());
        $result = $guess->getResult();

        echo "<div class='guess'>";
        foreach ($letters as $i => $char) {
            $class = $result[$i];
            echo "<span class='letter $class'>$char</span>";
        }
        echo "</div>";
    }
}

?>