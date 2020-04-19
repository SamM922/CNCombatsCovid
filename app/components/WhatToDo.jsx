const React = require('react');
const Style = require('./WhatToDo.css')
const Navbar = require('./Navbar.jsx');
const WhatToDoItem = require('./WhatToDoItem.jsx')

class WhatToDo extends React.Component {

render(){
  return (
    <div>
      <Navbar/>
      <WhatToDoItem 
        title="Wizarding World" 
        cost="Cost: Free!"
        link="https://www.wizardingworld.com/" 
        linktext="Enter the Wizarding World" 
        desc="The Wizarding World website is the place to be for Harry Potter fans. It has many well-designed and fun features for both casual and hardcore fans. 
        These features include a Sorting Hat experience and original articles from the author of the Harry Potter series, J. K. Rowling. Dive further in to the 
        universe of Harry Potter!"
      />
      <WhatToDoItem 
        title="Minecraft" 
        cost="Cost: $26.95"
        link="https://www.minecraft.net/en-us/" 
        linktext="Minecraft Official Website" 
        desc="Minecraft is one of the most well known and best selling games in the world. Minecraft is a sandbox game where virtually anything is possible in a 
        world made entirely of blocks. You can play in Survival mode, where you have to find and make food, shelter, and other resources to battle against monsters 
        and survive. You can also play in Creative mode, where you have access to infinite amounts every block in the game and it is much easier to build whatever 
        you want. There are also multiplayer servers, the largest of which is mc.hypixel.net. There are infinte possibilities in the world of Minecraft!" 
      />
      <WhatToDoItem 
        title="2048" 
        cost="Cost: Free!"
        link="https://play2048.co/" 
        linktext="Play 2048" 
        desc="2048 is a simple math game where you merge number tiles to try and create the largest numbers possible. This game is very simple but also very difficult, 
        one wrong move could ruin your game. See if you can merge all the way up to 2048!" 
      />
    </div>
  );
  }
}
module.exports = WhatToDo;