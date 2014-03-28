//Mo Sword Mod By EnderGamer

//Other

var ores_sword = 36;

var oreIds = [21, 14, 16, 15, 56];

var oreNames = ["Lapis Lazuli", "Gold", "Coal", "Iron", "Diamond"];

//Items

ModPE.setItem(34,"record_blocks",0,"Explosive Sword");

ModPE.setItem(69,"record_mall",0,"Flammes Sword");

ModPE.setItem(70,"record_mellohi",0,"Life Sword");

ModPE.setItem(117,"brewing_stand",0,"Lava Sword");

ModPE.setItem(72,"record_stal",0,"Water Sword");

ModPE.setItem(380,"cauldron",0,"Master Sword");

ModPE.setItem(36,"record_cat",0,"Ore Sword");

ModPE.overrideTexture("images/items-opaque.png", "http://i.imgur.com/AdUGd7H.jpg");

//Crafts

Item.addCraftRecipe(36, 1, 0, [266,1,0,280,1,0,265,1,0]);

//Code

function useItem(x,y,z,itemId,blockId,side) 
{
if(itemId == ores_sword) 
{
bestValue = -1;
for(var i = 0;i <= y;i++)
{
var bestXYZ;
var tile = getTile(x, i, z);
if (tile == oreIds[0]) 
{
if (bestValue < 0)
{
bestValue = 0;
bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
}
} 
else if (tile == oreIds[1]) 
{
if (bestValue < 1) 
{
bestValue = 1;
bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
}
}
else if (tile == oreIds[2]) 
{
if (bestValue < 2) 
{
bestValue = 2;
bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
}
} 
else if (tile == oreIds[3]) 
{
if (bestValue < 3) 
{
bestValue = 3;
bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
}
} 
else if (tile == oreIds[4]) {;
bestValue = 4;
bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
break;
}
}
if(bestValue == -1)
{
clientMessage(ChatColor.RED + "No ores found");
} 
else 
{
clientMessage(ChatColor.GREEN + "Found " + oreNames[bestValue] + " " + bestXYZ);
}
}
}
function newLevel()
{
clientMessage(ChatColor.GREEN + "Welcome on Mo'Sword Mod' !!!");
clientMessage(ChatColor.RED + "Mod make by @GamerEndermen");
}
function attackHook(attacker,victim)
{
if(getCarriedItem()==456)//Null
{
preventDefault();
setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),35,15);
Level.destroyBlock(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),false);
setPosition(victim,0,-100,0)
}
if(getCarriedItem()==34)//Explosive Sword
{
explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
}
if(getCarriedItem()==69)//Flammes Sword
{
Entity.setFireTicks(victim,50);
}
if(getCarriedItem()==70&&Entity.getHealth(Player.getEntity()) <= 19)//Heal Sword
{
Player.setHealth(Entity.getHealth(Player.getEntity())+1);
}
if (getCarriedItem()==117) //Lava Sword
{
setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),10);
}
if (getCarriedItem()==72) //Water Sword
{
setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),8);
}
if (getCarriedItem()==380) //Master Sword
{
Entity.setHealth(victim,0);
}
}
function procCmd(cmd)
{
var command = cmd.split(" ");
  
if(command[0] == "swords")
{
addItemInventory(34,1);
addItemInventory(69,1);
addItemInventory(70,1);
addItemInventory(72,1);
addItemInventory(117,1);
addItemInventory(380,1);
addItemInventory(36,1);
}
}
