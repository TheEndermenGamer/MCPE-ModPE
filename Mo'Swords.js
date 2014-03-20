//More Sword for you!!!
//Ore sword are inspired of minevalues by tom bailey
//Other
var ores_sword = 36;
var oreIds = [21, 14, 16, 15, 56];
var oreNames = ["Lapis Lazuli", "Gold", "Coal", "Iron", "Diamond"];
//Items
ModPE.setItem(34,"record_blocks",0,"TnT Sword");
ModPE.setItem(69,"record_mall",0,"Flammes Sword");
ModPE.setItem(70,"record_mellohi",0,"Heal Sword");
ModPE.setItem(117,"brewing_stand",0,"Lava Sword");
ModPE.setItem(72,"record_stal",0,"Water Sword");
ModPE.setItem(380,"cauldron",0,"Master Sword");
ModPE.setItem(36,"record_cat",0,"Ore Sword");
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
clientMessage(ChatColor.BLUE + "For more info visit forum link or youtube");
}
function attackHook(attacker,victim)
}
if(getCarriedItem()==34)//TnT Sword
{
explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
}
if(getCarriedItem()==69)//Flammes Sword
{
Entity.setFireTicks(victim,50);
}
if(getCarriedItem()==70&&Entity.getHealth(Player.getEntity()) <= 19)//Heal Sword
{
Player.setHealth(Entity.getHealth(Player.getEntity())+2);
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
addItemInventory(380,1);
addItemInventory(117,1);
}
}
ModPE.addCraftRecipe(34, 1, 0, [46, 0, 46, 0, 280, 0]);
ModPE.addCraftRecipe(69, 1, 0, [369, 0, 369, 0, 280, 0]);
ModPE.addCraftRecipe(70, 1, 0, [26, 0, 26, 0, 280, 0]);
ModPE.addCraftRecipe(72, 1, 0, [265, 0, 263, 0, 280, 0]);
