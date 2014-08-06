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

/* ******* CraftMobs Mod By TheEndermenGamer ******* */

function newLevel()
{
clientMessage(ChatColor.GREEN + "CraftMobs Mod !");
clientMessage(ChatColor.WHITE + "Mod make by " + ChatColor.LIGHT_PURPLE + "@GamerEndermen");
}
function deathHook (attacker, victim) {

if (Entity.getEntityTypeId(victim) == 37) {
	preventDefault();
	var random2 = Math.floor((Math.random()*4)+1);
	if(random2 == 1) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 341, 1, 0);
	} else if(random2 == 2 || random2 == 3) {
	Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 341, 1, 0);
	}
}
//Chicken
Item.addShapedRecipe(335, 1, 10, [
	" chi ",
	" egg "], [ 
	"chi", 365,0,
	"egg", 476,0]);
//Cow
Item.addShapedRecipe(335, 1, 11, [
	" beef ",
	" egg "], [ 
	"beef", 363,0,
	"egg", 476,0]);
//Pig
Item.addShapedRecipe(335, 1, 12, [
	" pork ",
	" egg "], [ 
	"pork", 319,0,
	"egg", 476,0]);
//Sheep
Item.addShapedRecipe(335, 1, 13, [
	" wool ",
	" egg "], [ 
	"wool", 35,0,
	"egg", 476,0]);
//Wolf
Item.addShapedRecipe(335, 1, 14, [
	" bone ",
	" egg "], [ 
	"bone", 352,0,
	"egg", 476,0]);
//Villager
Item.addShapedRecipe(335, 1, 15, [
	" eme ",
	" egg "], [ 
	"eme", 388,0,
	"egg", 476,0]);
//Mooshroom
Item.addShapedRecipe(335, 1, 16, [
	" mu ",
	" egg "], [ 
	"mu", 40,0,
	"egg", 476,0]);
//SilverFish
Item.addShapedRecipe(335, 1, 39, [
	" st ",
	" egg "], [ 
	"st", 1,0,
	"egg", 476,0]);
//Enderman
Item.addShapedRecipe(335, 1, 38, [
	" dia ",
	" egg "], [ 
	"dia", 264,0,
	"egg", 476,0]);
//Slime
Item.addShapedRecipe(335, 1, 37, [
	" slime ",
	" egg "], [ 
	"slime", 341,0,
	"egg", 476,0]);
//Zombie Pigman
Item.addShapedRecipe(335, 1, 36, [
	" ingot ",
	" egg "], [ 
	"ingot", 266,0,
	"egg", 476,0]);
//Spider
Item.addShapedRecipe(335, 1, 35, [
	" str ",
	" egg "], [ 
	"str", 287,0,
	"egg", 476,0]);
//Skeleton
Item.addShapedRecipe(335, 1, 34, [
	" bone ",
	" egg "], [ 
	"bone", 352,0,
	"egg", 476,0]);
//Creeper
Item.addShapedRecipe(335, 1, 33, [
	" gun ",
	" egg "], [ 
	"gun", 289,0,
	"egg", 476,0]);
//Zombie
Item.addShapedRecipe(335, 1, 32, [
	" fea ",
	" egg "], [ 
	"fea", 288,0,
	"egg", 476,0]);
	}
