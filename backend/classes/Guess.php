<?php
class Guess {
    private $text;
    private $correctWord;
    private $result = []; 

    public function __construct($text, $correctWord) {
        $this->text = strtoupper(trim($text));
        $this->correctWord = strtoupper(trim($correctWord));
        $this->evaluate();
    }

    private function evaluate() {
        $letters = str_split($this->text);
        $correctLetters = str_split($this->correctWord);

        foreach ($letters as $i => $char) {
            if ($char === $correctLetters[$i]) {
                $this->result[$i] = 'correct';
            } elseif (in_array($char, $correctLetters)) {
                $this->result[$i] = 'present';
            } else {
                $this->result[$i] = 'absent';
            }
        }
    }

    public function getResult() {
        return $this->result;
    }

    public function getText() {
        return $this->text;
    }

    public function isCorrect() {
        return $this->text === $this->correctWord;
    }
}

?>