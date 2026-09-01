"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, RefreshCw, Trophy } from "lucide-react";
import { QUIZ_DATA } from "@/lib/constants";

const KnowledgeQuizSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const currentQuestion = QUIZ_DATA[currentQuestionIndex];

  const handleAnswerSelection = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <section id="quiz-result" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-md mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-primary flex items-center justify-center gap-2"><Trophy className="w-8 h-8" />Quiz Completed!</CardTitle>
              <CardDescription>Here's how you did:</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">
                {score} / {QUIZ_DATA.length}
              </p>
              <p className="text-lg text-foreground/80">
                {score / QUIZ_DATA.length >= 0.7 ? "Great job! You're an Eco-Champion!" : "Good effort! Keep learning about the 3Rs."}
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={restartQuiz} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Test Your Eco-Knowledge</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Take this quick quiz to see how well you know the 3Rs.
          </p>
        </div>

        <Card className="max-w-xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl">Question {currentQuestionIndex + 1} of {QUIZ_DATA.length}</CardTitle>
            <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswer ?? undefined}
              onValueChange={handleAnswerSelection}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;
                let itemClass = "border-border hover:border-primary/50";
                if (isAnswered) {
                  if (isCorrect) itemClass = "border-green-500 bg-green-500/10";
                  else if (isSelected && !isCorrect) itemClass = "border-red-500 bg-red-500/10";
                }

                return (
                  <Label
                    key={index}
                    htmlFor={`option-${index}`}
                    className={`flex items-center space-x-3 p-4 rounded-md border-2 transition-all cursor-pointer ${itemClass} ${isAnswered ? "cursor-not-allowed" : ""}`}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
                    <span>{option}</span>
                    {isAnswered && isSelected && (isCorrect ? <CheckCircle className="ml-auto h-5 w-5 text-green-500" /> : <XCircle className="ml-auto h-5 w-5 text-red-500" />)}
                    {isAnswered && !isSelected && isCorrect && <CheckCircle className="ml-auto h-5 w-5 text-green-500 opacity-50" />}
                  </Label>
                );
              })}
            </RadioGroup>
            {isAnswered && currentQuestion.explanation && (
              <p className={`mt-4 text-sm p-3 rounded-md ${selectedAnswer === currentQuestion.correctAnswer ? "bg-green-500/10 text-green-700" : "bg-red-500/10 text-red-700"}`}>
                {currentQuestion.explanation}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex justify-end">
            {!isAnswered ? (
              <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {currentQuestionIndex < QUIZ_DATA.length - 1 ? "Next Question" : "Show Results"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default KnowledgeQuizSection;