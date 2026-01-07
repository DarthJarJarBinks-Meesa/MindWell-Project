import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { CheckCircle2, RotateCcw, Award } from "lucide-react";
import { Link } from "wouter";

// Simple mock sudoku grid generator (just a static valid one for prototype)
// In a real app, this would use a generator algorithm seeded by date.
const SOLUTION = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// Mask some cells
const INITIAL_MASK = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]; // 1 = hidden (for prototype simplicity, let's just make it playable)

// Let's make a simpler game: "Word Scramble" or "Mini Sudoku 4x4" to be robust without complex logic.
// Let's do a 4x4 Sudoku for the prototype.

const SOLUTION_4X4 = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 3, 4, 1],
  [4, 1, 2, 3]
];

// 0 means empty
const PUZZLE_4X4_SEEDED = [
  [1, 0, 0, 4],
  [0, 4, 1, 0],
  [0, 3, 4, 0],
  [4, 0, 0, 3]
];

export default function DailyPuzzle() {
  const [grid, setGrid] = useState<number[][]>(PUZZLE_4X4_SEEDED);
  const [complete, setComplete] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem("mindwell_streak");
    if (savedStreak) setStreak(parseInt(savedStreak));
  }, []);

  const handleCellChange = (row: number, col: number, val: string) => {
    if (complete) return;
    const num = parseInt(val);
    if (isNaN(num) || num < 1 || num > 4) return; // Only 1-4

    const newGrid = [...grid.map(r => [...r])];
    newGrid[row][col] = num;
    setGrid(newGrid);

    // Check completion
    let isCorrect = true;
    for(let r=0; r<4; r++) {
      for(let c=0; c<4; c++) {
        if (newGrid[r][c] !== SOLUTION_4X4[r][c]) isCorrect = false;
      }
    }

    if (isCorrect) {
      setComplete(true);
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("mindwell_streak", newStreak.toString());
      // Confetti effect would go here
    }
  };

  return (
    <div className="container-width py-12 max-w-3xl mx-auto">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl font-serif font-bold text-primary">Daily Brain Boost</h1>
        <p className="text-muted-foreground">{format(new Date(), 'EEEE, MMMM do, yyyy')}</p>
        <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold">
          <Award className="h-4 w-4 mr-2" />
          Current Streak: {streak} Days
        </div>
      </div>

      <Card className="border-none shadow-xl bg-white/50 backdrop-blur">
        <CardContent className="p-8 flex flex-col items-center">
          
          <div className="mb-6 flex justify-between w-full items-center">
            <h2 className="font-bold text-lg">Mini Sudoku (4x4)</h2>
            <Button variant="ghost" size="sm" onClick={() => { setGrid(PUZZLE_4X4_SEEDED); setComplete(false); }}>
              <RotateCcw className="h-4 w-4 mr-2" /> Reset
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-2 bg-primary p-2 rounded-lg border-4 border-primary">
            {grid.map((row, rIdx) => (
              row.map((cell, cIdx) => {
                const isFixed = PUZZLE_4X4_SEEDED[rIdx][cIdx] !== 0;
                return (
                  <div key={`${rIdx}-${cIdx}`} className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded flex items-center justify-center text-2xl font-bold">
                    {isFixed ? (
                      <span className="text-primary">{cell}</span>
                    ) : (
                      <input 
                        type="number" 
                        min="1" 
                        max="4"
                        value={cell === 0 ? '' : cell}
                        onChange={(e) => handleCellChange(rIdx, cIdx, e.target.value)}
                        className="w-full h-full text-center bg-transparent outline-none text-accent focus:bg-accent/10"
                        disabled={complete}
                      />
                    )}
                  </div>
                );
              })
            ))}
          </div>

          {complete && (
            <div className="mt-8 text-center animate-bounce">
              <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-xl mb-2">
                <CheckCircle2 className="h-6 w-6" />
                Puzzle Completed!
              </div>
              <p className="text-muted-foreground">Great job keeping your brain active today.</p>
            </div>
          )}

          <div className="mt-8 bg-muted/50 p-4 rounded-lg text-sm text-center max-w-md">
            <p><strong>How to play:</strong> Fill the grid so that every row, column, and 2x2 box contains the digits 1 through 4.</p>
          </div>

        </CardContent>
      </Card>
      
      <div className="mt-12 text-center">
        <Link href="/resources">
          <Button variant="outline">Browse More Brain Health Resources</Button>
        </Link>
      </div>
    </div>
  );
}
