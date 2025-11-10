<?php
class Game {
    private $word;
    private $attempts;
    private $maxAttempts = 6;
    private $guesses = [];

    public function __construct($word) {
        $this->word = $word;
        $this->attempts = 0;
    }

    public function makeGuess($guessText) {

        $guess = new Guess($guessText, $this->word->getText());
        $this->guesses[] = $guess;
        $this->attempts++;

        return $guess;
    }

    public function isGameOver() {
        return $this->attempts >= $this->maxAttempts || $this->isWordGuessed();
    }

    public function isWordGuessed() {
        foreach ($this->guesses as $guess) {
            if ($guess->isCorrect()) return true;
        }
        return false;
    }

    public function getGuesses() {
        return $this->guesses;
    }

    public function getRemainingAttempts() {
        return $this->maxAttempts - $this->attempts;
    }
}

?>