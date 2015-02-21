/*
If anyone share you need to put forum link or the link of my channel of Youtube <https://www.youtube.com/channel/UCk9mM0GhKVfu0Se_8NX6Miw>
EnderGamer Script (C) GNC copyright
Copyright (C) <2014>  <EnderGamer>

This work is licensed under the Creative Commons Attribution- NonCommercial 4.0 International License. To view a copy
of this license, visit http://creativecommons.org/licenses/by-nc/4.0/ or send a letter to Creative Commons, 444 Castro
Street, Suite 900, Mountain View, California, 94041, USA.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* ******* OreGen Mod By UltraGamingYT ******* */

//Swords

ModPE.setItem(476,"spider_eye",0,"Meteor Sword",1);
Player.addItemCreativeInv(476, 1);

ModPE.setItem(500,"blaze_rod",0,"Uranium Sword",1);
Player.addItemCreativeInv(500, 1);

//Ores 

ModPE.setItem(511,"record_11",0,"Meteor Ore");

ModPE.setItem(504, "diamond_horse_armor", 0, "Uranium Ore");

//Ingots

ModPE.setItem(502,"iron_horse_armor",0,"Meteor Ingot");

ModPE.setItem(503, "gold_horse_armor", 0, "Uranium Ingot");

//Crafts

Item.addShapedRecipe(476, 1, 0, [
" m ",
" m ",
" t "
], 
["m", 502, 0, "t", 280, 0]);

Item.addShapedRecipe(500, 1, 0, [
" m ",
" m ",
" t "
], 
["m", 503, 0, "t", 280, 0]);

Item.addShapedRecipe(25, 1, 0, [
"mmm",
"mmm",
"mmm"
], 
["m", 502, 0]);

//Furnace

//Meteor Ore -> Meteor Ingot

Item.addFurnaceRecipe(511,502);

Item.addFurnaceRecipe(504,503);

//BLOCKS

//Meteorite

Block.defineBlock(23, "Meteorite", ["cauldron_top", 0], 1, 0, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 10);
Player.addItemCreativeInv(23, 1);

//Meteorite Block

Block.defineBlock(25, "Meteorite Block", ["command_block", 0], 1, 0, 0);
Block.setDestroyTime(25, 2.5);
Block.setExplosionResistance(25, 10);
Player.addItemCreativeInv(25, 1);

//Uranium

Block.defineBlock(29, "Uranium", ["jukebox_top", 0], 1, 0, 0);
Block.setDestroyTime(29, 2.5);
Block.setExplosionResistance(29, 10);
Player.addItemCreativeInv(29, 1);

//Mine
function attackHook(attacker,victim)
{
if(getCarriedItem()==476)
{
Entity.setFireTicks(victim,10);
}
if(getCarriedItem()==500)//Explosive Sword
{
explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 5);
Player.setHealth(20);
}
}
function destroyBlock(x, y, z, side){
var game= Level.getGameMode();
if(game==0){
var id= getTile(x, y, z);
if(id==23){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*4+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 511, num, 0);
}
if(id==29){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*2+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 504, num, 0);
}}
else if(game==1){
}
}
function newLevel()
{
print("Wait for generation.");
print("Wait for generation..");
print("Wait for generation...");
clientMessage(ChatColor.YELLOW+"OreGen:");
clientMessage(ChatColor.GREEN+"By: UltraGamingYT");
}
var loaded=false; 
var ores=[
 	{id:23,minY:0,maxY:50,rarity:30},
 	];
 function leaveGame(){
 	loaded=false;
 	}
 function modTick(){
 	var cx=Math.round(Player.getX()/16);
 	var cz=Math.round(Player.getZ()/16);
 	if(!loaded && Level.getTile(parseInt(Player.getX()),parseInt(Player.getY())-2,parseInt(Player.getZ()))!=0)
 		loaded=true;
 	if(loaded){
 		for(var i=0;i<ores.length;i++){
 			for(var x=-1;x<1;x++){
 				for(var z=-1;z<1;z++){
 					if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
 						Generate(cx+x,cz+z,ores[i].id,ores[i].minY,ores[i].maxY,ores[i].rarity);
 					}
 				}
 			}
 		for(var x=-1;x<1;x++){
 			for(var z=-1;z<1;z++){
 				if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
 					Level.setTile((cx+x)*16,1,(cz+z)*16,4);
 				}
 			}
 		}
 	}
 function Generate(cx,cz,id,minY,maxY,rarity){
 	for(var x=cx*16;x<(cx+1)*16-1;x++){
 		for(var z=cz*16;z<(cz+1)*16-1;z++){
 			for(var y=minY;y<maxY;y++){
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y,z)==1)
 					Level.setTile(x,y,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x+1,y,z)==1)
 					Level.setTile(x+1,y,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y+1,z)==1)
 					Level.setTile(x,y+1,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y,z+1)==1)
 					Level.setTile(x,y,z+1,id);
 				}
 			}
 		}
 	}
