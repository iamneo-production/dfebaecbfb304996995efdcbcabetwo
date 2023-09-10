let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let cellsButtons = document.querySelectorAll('.btn');
let resetButton = document.querySelector('#reset');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTacToe = (index) => { 

    if (cells[index] !== '' || result.textContent.includes('wins')) return;
    
    cells[index] = currentPlayer;
    cellsButtons[index].value = currentPlayer;
    cellsButtons[index].disabled = true;

   
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `${currentPlayer} wins!`;
            return; 
        }
    }

    if (!cells.includes('')) {
        result.textContent = "It's a draw!";
        return;}

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    result.textContent = `Current Player: ${currentPlayer}`;
};

const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = 'Current Player: X';

    cellsButtons.forEach((button) => {
        button.value = '';
        button.disabled = false;
    });
};

cellsButtons.forEach((button, index) => {
    button.addEventListener('click', () => ticTacToe(index));
});

resetButton.addEventListener('click', resetGame);