/*
If anyone share you need to put from link
TheEndermenGamer Script (C) GNC copyright
TheEndermenGamer********************Script
Copyright (C) <2014>  <TheEndermenGamer>
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>
*/
//Thanks to Arjay07 and 49Skyfox and other !!!
//If you make a video put my channel http://wWw.youtube.com/user/TheEndermenGamer
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
//Items
ModPE.setItem(369,"blaze_rod",0,"Blaze Rod");
ModPE.setItem(377,"blaze_powder",0,"Blaze Powder");
//Furnace Recipe
ModPE.addFurnaceRecipe(398,333);
ModPE.addFurnaceRecipe(344,418);
//Craft Recipe
ModPE.addCraftRecipe(396, 1, 0, [360,0,360,0,360,0,360,0]);
ModPE.addCraftRecipe(330, 1, 0, [353,0,260,0,344,0]);
ModPE.addCraftRecipe(51, 1, 0,[369,0,377,0]);
ModPE.addCraftRecipe(419, 1, 0,[260,0,353,0]);
//All news mobs
var EnderCow;
var AppleCow;
var GoldenCow;
var Mooshroom;
var GoldenAppleCow;
var CowMan;
var Sheep;
var Ghost;
var IceCreamCow;
var SnowCow;
var CreepyCow;
function newLevel()
{
clientMessage(ChatColor.YELLOW + "Welcome on Mo'Mobs Extra Pack mod !!!");
clientMessage(ChatColor.GREEN + "Mod make by @GamerEndermen");
clientMessage(ChatColor.RED + "For more info visit forum link or youtube");
}
function useItem(x,y,z,itemId,blockId,side)
{
if(itemId==71)
{
EnderCow = Level.spawnMob(x,y+1,z,11,"mob/Ender_Cow.png");
Entity.setHealth(EnderCow, 40);
AppleCow = Level.spawnMob(x,y+1,z,11,"mob/apple_cow.png");
Entity.setHealth(AppleCow, 15);
GoldenCow = Level.spawnMob(x,y+1,z,11,"mob/golden_cow.png");
Entity.setHealth(GoldenCow, 20);
Mooshroom = Level.spawnMob(x,y+1,z,11,"mob/mooshroom.png");
Entity.setHealth(Mooshroom, 20);
GoldenAppleCow = Level.spawnMob(x,y+1,z,11,"mob/golden_cow.png");
Entity.setHealth(GoldenAppleCow, 30);
CowMan =
Level.spawnMob(x,y+1,z,11,"mob/Cow_Man.png");
Entity.setHealth(CowMan, 25);
Entity.setRenderType(CowMan,3);
Sheep =
Level.spawnMob(x,y+1,z,13,"mob/sheep.png");
Entity.setHealth(Sheep, 10);
Ghost = Level.spawnMob(x,y+1,z,32,"mob/ghost.png");
Entity.setHealth(Ghost, 30);
IceCreamCow = Level.spawnMob(x,y+1,z,11,"mob/ice_cream_cow.png");
Entity.setHealth(IceCreamCow, 15);
SnowCow = Level.spawnMob(x,y+1,z,11,"mob/snow_cow.png");
Entity.setHealth(SnowCow, 20);
CreepyCow = Level.spawnMob(x,y+1,z,33,"mob/creepy_cow.png");
Entity.setHealth(CreepyCow, 20);
Entity.setRenderType(CreepyCow,7);
}
}
function deathHook (attacker, victim)
{
if (victim==EnderCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,332,2,0);
}
if(victim==AppleCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,260,1,0);
}
if (victim==Mooshroom)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,40,1,0);
}
if (victim==Mooshroom)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,39,1,0);
}
if (victim==GoldenAppleCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,322,1,0);
}
if (victim==CowMan)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,303,1,0);
}
if(victim==Sheep)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,398,2,0);
}
if (victim==Ghost)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,369,1,0);
}
if (victim==Ghost)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,377,1,0);
}
if (victim==IceCreamCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,396,2,0);
}
if (victim==SnowCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,79,2,0);
}
if (victim==CreepyCow)
{
Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),1,289,2,0);
}
if (victim==CreepyCow)
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
CowMan =
Level.spawnMob(x,y+1,z,32,"mob/Cow_Man.png");
Entity.setHealth(CowMan, 25);
Entity.setRenderType(CowMan,3);
Sheep =
Level.spawnMob(x,y+1,z,13,"mob/sheep.png");
Entity.setHealth(Sheep,10);
Ghost =
Level.spawnMob(x,y+1,z,32,"mob/ghost.png");
Entity.setHealth(Ghost,30);
IceCreamCow = Level.spawnMob(x,y+1,z,11,"mob/ice_cream_cow.png");
Entity.setHealth(IceCreamCow, 15);
SnowCow = Level.spawnMob(x,y+1,z,11,"mob/snow_cow.png");
Entity.setHealth(SnowCow, 20);
CreepyCow = Level.spawnMob(x,y+1,z,33,"mob/creepy_cow.png");
Entity.setHealth(CreepyCow, 20);
Entity.setRenderType(CreepyCow,7);
}
var t = 3000;
function modTick(){
if(t > 0){
t--;
}else if(t == 0){
spawnMobs();
t = 3000;
}
}
