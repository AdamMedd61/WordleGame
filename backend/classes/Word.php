<?php
class Word {
    private $text;

    public function __construct($text) {
        $this->text = strtoupper(trim($text));
    }

    public function getText() {
        return $this->text;
    }
}

?>