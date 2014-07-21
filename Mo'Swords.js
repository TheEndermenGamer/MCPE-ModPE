//Mo Sword Mod By EnderGamer

//Other

var ores_sword = 350;

var oreIds = [21, 14, 16, 15, 56];

var oreNames = ["Lapis Lazuli", "Gold", "Coal", "Iron", "Diamond"];

//Items

ModPE.setItem(476,"spider_eye",0,"Explosive Sword",1);

ModPE.setItem(478,"iron_horse_armor",0,"Flamme Sword",1);

ModPE.setItem(475,"diamond_horse_armor",0,"Life Sword",1);

ModPE.setItem(335,"spider_eye_fermented",0,"Lava Sword",1);

ModPE.setItem(479,"lead",0,"Water Sword",1);

ModPE.setItem(380,"cauldron",0,"Master Sword",1);

ModPE.setItem(350,"record_cat",0,"Ore Sword",1);

//Crafts

Item.addCraftRecipe(476, 1, 0, [46,1,0,46,1,0,280,1,0]);

Item.addCraftRecipe(478, 1, 0, [259, 1, 0,259, 1, 0,280, 1, 0]);

Item.addCraftRecipe(475, 1, 0, [26, 1, 0,26, 1, 0,280, 1, 0,]);

Item.addCraftRecipe(335, 1, 0, [331, 1, 0,331, 1, 0,280, 1, 0]);

Item.addCraftRecipe(479, 1, 0, [22, 1, 0,22, 1, 0,280, 1, 0]);

Item.addCraftRecipe(380, 1, 0, [49, 1, 0,49, 1, 0,280, 1, 0]);

Item.addCraftRecipe(350, 1, 0, [265, 1, 0,265, 1, 0,280,1,0]);
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
clientMessage(ChatColor.GREEN + "Mo'Sword Mod' !!!");
clientMessage(ChatColor.RED + "Mod make by @GamerEndermen");
}
function attackHook(attacker,victim)
{
if(getCarriedItem()==476)//Explosive Sword
{
explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
}
if(getCarriedItem()==478)//Flammes Sword
{
Entity.setFireTicks(victim,50);
}
if(getCarriedItem()==475&&Entity.getHealth(Player.getEntity()) <= 19)//Heal Sword
{
Player.setHealth(Entity.getHealth(Player.getEntity())+1);
}
if (getCarriedItem()==335) //Lava Sword
{
setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),10);
}
if (getCarriedItem()==479) //Water Sword
{
setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),8);
}
if (getCarriedItem()==380) //Master Sword
{
Entity.setHealth(victim,1);
}
}
function procCmd(cmd)
{
var command = cmd.split(" ");
  
if(command[0] == "swords")
{
addItemInventory(476,1);
addItemInventory(478,1);
addItemInventory(475,1);
addItemInventory(335,1);
addItemInventory(479,1);
addItemInventory(350,1);
addItemInventory(380,1);
}
}
