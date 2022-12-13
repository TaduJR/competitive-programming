/*
A. Domino piling
time limit per test2 seconds
memory limit per test256 megabytes
inputstandard input
outputstandard output
You are given a rectangular board of M × N squares. Also you are given an unlimited number of standard domino pieces of 2 × 1 squares. You are allowed to rotate the pieces. You are asked to place as many dominoes as possible on the board so as to meet the following conditions:

1. Each domino completely covers two squares.

2. No two dominoes overlap.

3. Each domino lies entirely inside the board. It is allowed to touch the edges of the board.

Find the maximum number of dominoes, which can be placed under these restrictions.

Input
In a single line you are given two integers M and N — board sizes in squares (1 ≤ M ≤ N ≤ 16).

Output
Output one number — the maximal number of dominoes, which can be placed.
*/
// Note: This code only runs on codeforces javascript runtime enviroment

const inputArr = readline().split(' ');
const m = inputArr[0];
const n = inputArr[1];
print(Math.trunc((m * n) / 2));
