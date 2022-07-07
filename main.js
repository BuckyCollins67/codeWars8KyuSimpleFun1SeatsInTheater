// CodeWars problem write up
// Task
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) === 96





// Input/Output
// [input] integer nCols
// An integer, the number of theater's columns.
// Constraints: 1 ≤ nCols ≤ 1000.

// [input] integer nRows
// An integer, the number of theater's rows.
// Constraints: 1 ≤ nRows ≤ 1000.

// [input] integer col
// An integer, the column number of your own seat (with the rightmost column having index 1).
// Constraints: 1 ≤ col ≤ nCols.

// [input] integer row
// An integer, the row number of your own seat (with the front row having index 1).
// Constraints: 1 ≤ row ≤ nRows.

// [output] an integer
// The number of people who sit strictly behind you and in your column or to the left.

// PREP process

// P - Parameters - We will be getting four numbers.  The total number of columns, the total number of rows, the column I'm sitting in, and the row I'm sitting in.  The total number of columns and rows will be at least one, but no greater than 1000.  And my seat will be in that range.

// R - Return - We're trying to figure out how many people's view we'll be interfering with by exiting left and back.  A number.  The number of the row, and the number of the column multiplied together

// E - Examples - For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) === 96

// p - Pseudocode - In plain english, this code will
// 1. Count the number of rows behind my position
//      peopleBehind = nrows - row
// 2. Count the number of columns to my left (plus the one I'm in)
//      peopleToLeft = 1+ ncol - col
// 3. Multiply those two numbers together and return it
//      result = peopleBehind*peopleToLeft

function seatsInTheater(nCols, nRows, col, row){
    let peopleBehind = (nRows - row)
    let peopleToLeft = (1 + nCols - col)
    return peopleBehind*peopleToLeft
}