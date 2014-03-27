//Food

ModPE.setFoodItem(322,"apple_golden", 0,3,"Golden Apple");

ModPE.setFoodItem(52,"record_chirp",0,3,"Clown Fish");

ModPE.setFoodItem(55,"record_far",0,4,"Peach");

ModPE.setFoodItem(330,"door_iron",0,5,"Apple Pie");

ModPE.setFoodItem(333,"boat",0,5,"Cooked Sheep");

ModPE.setFoodItem(398,"carrot_on_a_stick",0,3,"Raw Sheep");

ModPE.setFoodItem(396,"carrot_golden",0,7,"Melon Ice Cream");

ModPE.setFoodItem(419,"diamond_horse_armor",0,5,"Apple Juice");

ModPE.setFoodItem(418,"gold_horse_armor",0,5,"Fried Egg");

//Spawn Eggs

ModPE.setItem(399,"nether_star",0,"Apple Cow Spawn Eggs");

ModPE.setItem(33,"record_11",0,"Ender Cow Spawn Eggs");

ModPE.setItem(372,"nether_wart",0,"Golden Cow Spawn Eggs");

ModPE.setItem(386,"book_writable",0,"Mooshroom Spawn Eggs");

ModPE.setItem(370, "ghast_tear", 0, "Golden ApplenCow Spawn Eggs");

ModPE.setItem(388, "emerald", 0, "Cow Man Spawn Eggs");

ModPE.setItem(371, "gold_nugget", 0, "Sheep (Modded) Spawn Eggs");

ModPE.setItem(375, "spider_eye", 0, "Ghost Spawn Eggs");

ModPE.setItem(374, "potion_bottle_empty", 0, "Delicious Cow Spawn Eggs");

//Items

ModPE.setItem(369,"blaze_rod",0,"Blaze Rod");

ModPE.setItem(377,"blaze_powder",0,"Blaze Powder");

//Craft Recipe

Item.addCraftRecipe(396, 1, 0, [360,1,0,79,1,0]);

Item.addCraftRecipe(330, 1, 0, [353,1,0,260,1,0,344,1,0]);

Item.addCraftRecipe(51, 1, 0,[369,1,0,377,1,0]);

Item.addCraftRecipe(419, 1, 0,[260,1,0,353,1,0]);

//All news mobs

var EnderCow; //Spawn
var AppleCow; //Spawn
var GoldenCow; //Spawn
var Mooshroom; //Spawn
var GoldenAppleCow; //Spawn
var CowMan; //Spawn
var Sheep; //Spawn
var Ghost; //Spawn
var DeliciousCow;
var SnowCow;
var CreepyCow;

function newLevel()
{
clientMessage(ChatColor.YELLOW + "Welcome on Mo'Mobs mod!!!");
clientMessage(ChatColor.GREEN + "Mod make by @GamerEndermen");
}
function useItem(x,y,z,itemId,blockId,side) 
{ 
if(itemId==33) 
{ 
EnderCow = Level.spawnMob(x,y+1,z,11,"mob/Ender_Cow.png"); 
Entity.setHealth(EnderCow, 40);
}
if(itemId==399) 
{
AppleCow = Level.spawnMob(x,y+1,z,11,"mob/apple_cow.png"); 
Entity.setHealth(AppleCow, 15);
}
if(itemId==372) 
{
GoldenCow = Level.spawnMob(x,y+1,z,11,"mob/golden_cow.png"); 
Entity.setHealth(GoldenCow, 20);
}
if(itemId==386) 
{
Mooshroom = Level.spawnMob(x,y+1,z,11,"mob/mooshroom.png"); 
Entity.setHealth(Mooshroom, 20);
}
if(itemId==370) 
{
GoldenAppleCow = Level.spawnMob(x,y+1,z,11,"mob/golden_cow.png"); 
Entity.setHealth(GoldenAppleCow, 30);
}
if(itemId==388) 
{
CowMan =
Level.spawnMob(x,y+1,z,11,"mob/Cow_Man.png");
Entity.setHealth(CowMan, 25);
Entity.setRenderType(CowMan,3);
}
if(itemId==371)
{
Sheep =
Level.spawnMob(x,y+1,z,13,"mob/sheep.png");
Entity.setHealth(Sheep, 10);
}
if(itemId==375) 
{
Ghost = Level.spawnMob(x,y+1,z,32,"mob/ghost.png"); 
Entity.setHealth(Ghost, 30);
}
if(itemId==374) 
{
DeliciousCow = Level.spawnMob(x,y+1,z,11,"mob/delicious_cow.png");
Entity.setHealth(DeliciousCow, 15);
}
if(itemId==71) 
{
SnowCow = Level.spawnMob(x,y+1,z,11,"mob/snow_cow.png");
Entity.setHealth(SnowCow, 20);
}
if(itemId==71) 
{
CreepyCow = Level.spawnMob(x,y+1,z,33,"mob/creepy_cow.png");
Entity.setHealth(CreepyCow, 20);
Entity.setRenderType(CreepyCow,7);
} 
}
function deathHook (attacker, victim) 
{ 
if(victim==EnderCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,332,2,0);
}
if(victim==AppleCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,260,1,0);
}
if(victim==Mooshroom)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,40,1,0);
}
if(victim==Mooshroom)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,39,1,0);
}
if(victim==GoldenAppleCow)
{ 
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,322,1,0);
}
if(victim==CowMan) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,303,1,0);
}
if(victim==Sheep)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,398,2,0);
}
if(victim==Ghost) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,369,1,0);
}
if(victim==Ghost) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,377,1,0);
}
if(victim==DeliciousCow) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,396,2,0);
}
if(victim==SnowCow) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,79,2,0);
}
if(victim==CreepyCow) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,289,2,0);
}
if(victim==CreepyCow) 
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,46,1,0);
}
}
function entityRemovedHook(entity)
{
if(Entity.getEntityTypeId(entity)==81)
{
setPosition(getPlayerEnt(), Entity.getX(entity), Entity.getY(entity)+4, Entity.getZ(entity));
}
}

function getSurface(x, z){

var i = 0;

for(var y = 1; y <= 128; y++){

if(Level.getTile(x, y, z) == 0){

i = y;
break;

}

}

return i;

}

function spawnMobs(){

var x = Math.floor((Math.random()*256)+1);
var z = Math.floor((Math.random()*256)+1);
var y = getSurface(x, z);

EnderCow = Level.spawnMob(x,y,z,11,"mob/Ender_Cow.png"); 
Entity.setHealth(EnderCow, 40);
AppleCow = Level.spawnMob(x,y,z,11,"mob/apple_cow.png"); 
Entity.setHealth(AppleCow, 15);
GoldenCow = Level.spawnMob(x,y,z,11,"mob/golden_cow.png"); 
Entity.setHealth(GoldenCow, 20);
Mooshroom = Level.spawnMob(x,y,z,11,"mob/mooshroom.png"); 
Entity.setHealth(Mooshroom, 20);
GoldenAppleCow = Level.spawnMob(x,y,z,11,"mob/golden_cow.png");
Entity.setHealth(GoldenAppleCow, 30);
CowMan = Level.spawnMob(x,y+1,z,32,"mob/Cow_Man.png");
Entity.setHealth(CowMan, 25);
Entity.setRenderType(CowMan,3);
Sheep =
Level.spawnMob(x,y+1,z,13,"mob/sheep.png");
Entity.setHealth(Sheep,10);
Ghost =
Level.spawnMob(x,y+1,z,32,"mob/ghost.png");
Entity.setHealth(Ghost,30);
DeliciousCow = Level.spawnMob(x,y+1,z,11,"mob/delicious_cow.png");
Entity.setHealth(DeliciousCow, 15);
SnowCow = Level.spawnMob(x,y+1,z,11,"mob/snow_cow.png");
Entity.setHealth(SnowCow, 20);
CreepyCow = Level.spawnMob(x,y+1,z,33,"mob/creepy_cow.png");
Entity.setHealth(CreepyCow, 20);
Entity.setRenderType(CreepyCow,7);
}

var t = 7000;

function modTick(){

if(t > 0){

t--;

}else if(t == 0){
 
spawnMobs();
t = 7000;

}

}
function procCmd(cmd)
{
var command = cmd.split(" ");
  
if(command[0] == "cows")
{
addItemInventory(33,1);
addItemInventory(399,1);
addItemInventory(372,1);
addItemInventory(386,1);
addItemInventory(370,1);
addItemInventory(371,1);
addItemInventory(388,1);
addItemInventory(375,1);
}
}
function attackHook(attacker, victim)
{
if(victim==EnderCow)
{
var EnderCowTeleport = Math.floor((Math.random()*5)+1);
	switch(EnderCowTeleport)
	{
		case 1:
		setPosition(victim, getPlayerX(),getPlayerY()+1, getPlayerZ()+9);
		break;
		
		case 2:
		setPosition(victim, getPlayerX(),getPlayerY()+1, getPlayerZ()-9);
		break;
	}
}
}
