/*
If anyone share you need to put forum link or the link of my channel of Youtube <http://www.youtube.com/theendermengamer>
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

/* ******* More Loots Mod By TheEndermenGamer ******* */

Player.addItemCreativeInv(201,1,0);

function newLevel()
{
clientMessage(ChatColor.GREEN + "Mo'Loots Mod !");
clientMessage(ChatColor.WHITE + "Mod make by " + ChatColor.LIGHT_PURPLE + "@GamerEndermen");
}
//Loots

ModPE.setFoodItem(401, "rotten_flesh",0,-2, "Rotten Flesh");

ModPE.setFoodItem(335,"spider_eye_fermented",0,-5,"Fermented Spider Eye");

ModPE.setFoodItem(476,"spider_eye",0,-3,"Spider Eye");

//Crafts

//Fermented Spider Eye

Item.addShapedRecipe(335, 1, 0, [
	" mu ", 
	" su ", 
	" ey "], [ 
	"mu", 39,0,
	"su", 353,0,
	"ey", 476,0]);

//Slime Block	
Item.addShapedRecipe(201, 1, 0, [
	"ssss", 
	"ssss", 
	"ssss"], [ 
	"ssss", 341,0]);
	
//Block Slime

Block.defineBlock(201,"Slime Block", 
			[["dragon_egg", 0], ["dragon_egg", 0]]);
		Block.setShape(201, 0, 0, 0, 1, 4/4, 1);

function modTick() 

{ 
  x = getPlayerX(); 
  y = getPlayerY(); 
  z = getPlayerZ(); 
  if(getTile(x, y-2, z) ==201)
{ 
setVelY(getPlayerEnt(), 1.00); 
Player.setHealth(20);
} 
}  
function deathHook (attacker, victim) {

if (Entity.getEntityTypeId(victim) == 32) {
	preventDefault();
	var random2 = Math.floor((Math.random()*4)+1);
	if(random2 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 401, 1, 0);
	} else if(random2 == 2 || random2 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 401, 1, 0);
	}
}

if (Entity.getEntityTypeId(victim) == 37) {
	preventDefault();
	var random3 = Math.floor((Math.random()*4)+1);
	if(random3 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 341, 1, 0);
	} else if(random3 == 2 || random3 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 341, 1, 0);
	}
}

if (Entity.getEntityTypeId(victim) == 35) {
	preventDefault();
	var random3 = Math.floor((Math.random()*4)+1);
	if(random3 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 476, 1, 0);
	} else if(random3 == 2 || random3 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 476, 1, 0);
	}
}
if (Entity.getEntityTypeId(victim) == 15) {
	preventDefault();
	var random3 = Math.floor((Math.random()*8)+1);
	if(random3 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 388, 1, 0);
	} else if(random3 == 2 || random3 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 388, 1, 0);
	}
}
if (Entity.getEntityTypeId(victim) == 38) {
	preventDefault();
	var random3 = Math.floor((Math.random()*5)+1);
	if(random3 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 264, 1, 0);
	} else if(random3 == 2 || random3 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 264, 1, 0);
	}
}
}
