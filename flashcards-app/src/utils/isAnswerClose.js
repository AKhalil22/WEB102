// Import: fuse.js
import Fuse from 'fuse.js';

// Function: Check correctness of user's answer | threshold: 0.0 = Exact match -> 1.0 = Match everything
export function isAnswerClose(userGuess, correctAnswer, threshold = 0.8) {
    // Init: New Fuse object
    const fuse = new Fuse([correctAnswer], {
        includeScore: true,
        threshold: threshold,
    });

    // Check User's answer against correctAnswer (input array)
    const result = fuse.search(userGuess)

    // Return: True if match as well as score if better the threshold (lower than it) 
    return result.length > 0 && result[0].score <= threshold
}