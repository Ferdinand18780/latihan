let score= JSON.parse(localStorage.getItem('score')) 
    || {  
        Win:0,
        Lose:0,
        Tie:0
      };

    document.body.querySelector('.score-elem').innerHTML= `Win: ${score.Win}, Lose: ${score.Lose}, Tie:${score.Tie}`;

    
    /*
      if (!score){
      score={  
        Win:0,
        Lose:0,
        Tie:0
      }
    }; */
    
    function rock_paper_scisor(playermove){
      let computer2='';
      let result2='';
      const ComputerPick2= Math.random();
      if (ComputerPick2 >=0 && ComputerPick2<=1/3){
        computer2='rock';
      }
      else if (ComputerPick2 >=1/3 && ComputerPick2<=2/3){
        computer2='paper';
      }
      else{
        computer2='scissors';
      }

      if (playermove==='rock'){
        if (computer2==='paper'){
        result2='You lose';
        }
        else if(computer2 === 'scissors'){
          result2='You win';
        }
        else{
          result2='Tie';
        }
      }

      else if (playermove==='paper'){
        if (computer2==='paper'){
          result2='Tie';
        }
        else if(computer2 === 'scissors'){
          result2='You lose';
        }
        else{
          result2='You win';
        }
      }

      else if (playermove==='scissors'){
        if (computer2==='paper'){
          result2='You win';
        }
        else if(computer2 === 'scissors'){
          result2='Tie';
        }
        else{
          result2='You lose';
        }
      }
      if (result2==='You win'){
        score.Win+=1
      }
      else if (result2==='You lose'){
        score.Lose+=1
      }
      else{
        score.Tie+=1
      }

      localStorage.setItem('score', JSON.stringify(score));

      
      document.body.querySelector('.win-lose').innerHTML= `${result2}`;
      document.body.querySelector('.player-pick').innerHTML= `
      You
    <img class="player-move" src="${playermove}-emoji.png" alt="batu">
    <img class="computer-move" src="${computer2}-emoji.png" alt="gunting">
    Computer
      `;
      document.body.querySelector('.score-elem').innerHTML= `Win: ${score.Win}, Lose: ${score.Lose}, Tie:${score.Tie}`;
      console.log(document.body.querySelector('.player-pick'))
      
    }


    function remove(){
      score.Win=0;
      score.Lose=0;
      score.Tie =0;
      localStorage.removeItem('score');
      document.body.querySelector('.score-elem').innerHTML= `Win: ${score.Win}, Lose: ${score.Lose}, Tie:${score.Tie}`;
    }