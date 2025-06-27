 let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    Tie: 0
  };
  updateScoreElement();
  function resetScore(){
    score = {
      wins: 0,
      losses: 0,
      Tie: 0
    };
    localStorage.removeItem('score');
    updateScoreElement();
  }
 
  // playermove fuction which takes the playerMove as an argument
    function playerGame( playerMove ){
    const computerMove=pickComputerMove();
              let result = '';
              // if playermove is choosen a scissors
                      if(playerMove === "Scissors"){
                            if(computerMove === 'Rock')
                            {
                            result='You Lose';
                            }
                            else if(computerMove==='Paper')
                            {
                            result='You win';
                            }
                            else if(computerMove==='Scissors')
                            {
                            result='Tie';
                            }
                           }
                      // if playerMove is choosen a rock
                      else if(playerMove ==="Rock")
                      { 
                              if(computerMove==='Rock')
                              {
                              result='Tie';
                              }
                              else if(computerMove==='Paper')
                              {
                              result='You lose';
                              }
                              else if(computerMove==='Scissors')
                              {
                              result='You win';
                              }
                              
                      } else if(playerMove ==="Paper"){
                                if(computerMove==='Rock'){
                                result='You win';
                                }
                                else if(computerMove==='Paper'){
                                result='Tie';
                                }
                                else if(computerMove==='Scissors'){
                                result='You lose';
                                }
                              }
                              if(result === 'You win') {
                                  score.wins+=1;
                              } else if(result === 'You lose') {
                                  score.losses+=1;
                              } else if(result === 'Tie') {
                                  score.Tie+= 1;
                              }
                              localStorage.setItem('score',JSON.stringify(score));

                              updateScoreElement();

                              document.querySelector('.js-result').innerHTML = result;
                              
                              document.querySelector('.js-moves').innerHTML = `
                                      You
                                      <img class='move-icon' src="images/${playerMove}-emoji.png" alt="paper">
                                      <img class='move-icon' src="images/${computerMove}-emoji.png" alt="rock">
                                      Computer
                              `;
        }
        
        function updateScoreElement(){
          document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.Tie}`;
        }
      
        function pickComputerMove() {
        let computerMove = '';
        const randomNumber = Math.random(); // Generates a random number between 0 and 1
                  if (randomNumber >= 0 && randomNumber < (1 / 3)) {
                  computerMove = 'Rock';
                  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                  computerMove = 'Paper';
                  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                  computerMove = 'Scissors';
                  }
        return computerMove;
        }