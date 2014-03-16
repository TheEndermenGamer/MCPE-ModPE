//Base PE by TheEndermenGamer All right reserved


//Nametag

Entity.setNameTag(MobName,"Phrase");

//ModPE Item

ModPE.setItem(ID,"ID_Name",0,"Name");

//ModPE Food

ModPE.setFoodItem(ID,"ID_name",0,Hearts,"Name");

//Crafting Recipe

ModPE.addCfraftRecipe(ID, Count, Damage, [ID, 0, ID, 0, ID, 0]);//Note:To put more put ID, 0 ;)

//Command for give custom items

function procCmd(cmd)
{
var command = cmd.split(" ");
  
if(command[0] == "give")
{
addItemInventory(ID,Count);

//Custom Block

Block.defineBlock (ID,"Custom Name",
[["name_name",0],
["name_name",0],
["name_name",0], 
["name_name",0], 
["name_name",0],
["name_name",0]]);
Block.setDestroyTime(ID,0.5);
//You can find block texture name on http://zhuoweizhang.net/mcpetexturenames/

//Custom Mob

var test;//Mob name

function useItem(x,y,z,itemId,blockId,side) 
{
if(itemId==1)//Exemple if you click with stone its spawn mob
{ 
test = Level.spawnMob(x,y+1,z,11,"mob/char.png");//Id of mob (11) and texture (mob/char.png)
Entity.setHealth(test,40);//Mob name and Number of hearts
