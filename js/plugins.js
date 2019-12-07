// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"logo","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"false","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.11 Players can now craft their own items in-game\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Synthesis","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Cooking","Weapon Command":"Forging","Armor Command":"Armorworking","Finish Command":"Finish","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"Crafted Items","Crafted Weapons":"Crafted Weapons","Crafted Armors":"Crafted Armors","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"false","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been synthesized yet.","Ingredients Text":"Ingredients","Amount Text":"Quantity","Amount Format":"false","Quantity Text Size":"20","---Sound---":"","Default SE":"8-BitPC_SE_enmey_damage5","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.04 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"30","---Parameters---":"","Parameters Command":"Parameters","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elements","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---States---":"","States Command":"States","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Attributes","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","---XParam Names---":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"YEP_X_ActorVariables","status":true,"description":"v1.05 (Requires YEP_StatusMenuCore.js) Allows you to\ndisplay variables for each actor.","parameters":{"---General---":"","Command Name":"Skills/Favor","---Columns---":"","Global Column 1":"","Global Column 2":"","Global Column 3":"","Global Column 4":"","Hidden Variables":"","---MV 1.5.0---":"","Global Column 1 1.5.0":"[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\"]","Global Column 2 1.5.0":"[]","Global Column 3 1.5.0":"[]","Global Column 4 1.5.0":"[]","Hidden Variables 1.5.0":"[]"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.01 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[22]Available (%1)\",\"Completed Text\":\"\\\\i[191]Completed (%1)\",\"Failed Text\":\"\\\\i[31]Failed (%1)\",\"All Text\":\"\\\\i[18]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"My \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].<br>\\\\nWithout this I might forget what I <br>\\\\nneed to complete before the day I must<br>\\\\nchoose a profession!\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[4]%1\",\"Completed Objective\":\"\\\\i[3]%1\",\"Failed Objective\":\"\\\\i[3]%1\",\"Unclaimed Reward\":\"\\\\i[3]%1\",\"Claimed Reward\":\"\\\\i[3]%1\",\"Denied Reward\":\"\\\\i[3]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[99]Apprentice with Tolkien\",\"Type\":\"Main Quests\",\"Difficulty\":\"?\",\"From\":\"Tolkien\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"Tolkien is the only blacksmith of Quin-Song, and is in need of an apprentice. I should spend at least one day more under him to help myself decide if it's for me or not.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Apprentice under \\\\\\\\\\\\\\\\c[4]Tolkien\\\\\\\\\\\\\\\\c[0] at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Blacksmithing Blueprints\\\\\\\\\\\\\\\\i[145]\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"He's a bit of a...well an ogre, but he's mastered his craft and has a lot to offer should I choose to apprentice under him.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"{\"Title\":\"\\\\i[152]Apprentice with Menke\",\"Type\":\"Main Quests\",\"Difficulty\":\"?\",\"From\":\"Menke\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"Menke is the owner of Fine silks and cloths, a master weaver who plans to pass down his craft to his own chidren. He seems willing to teach me a few things however, and I should be sure to apprentice at least one day with him.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Apprentice under \\\\\\\\\\\\\\\\c[4]Menke\\\\\\\\\\\\\\\\c[0] at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Clothing Blueprints\\\\\\\\\\\\\\\\i[152]\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"Menke can be a bit...strong when it comes to his fashion choices, but he has a lot to teach. Plus his twins are adorable and it gives me an excuse to pick flowers with them.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 3":"{\"Title\":\"\\\\i[9]Apprentice with Lieza\",\"Type\":\"Main Quests\",\"Difficulty\":\"?\",\"From\":\"Lieza\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Lieza\\\\\\\\\\\\\\\\c[0] has been farming just outside the village gates for at least a millenia. If anyone knows anything about growing food, it's her.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Apprentice under \\\\\\\\\\\\\\\\c[4]Lieza\\\\\\\\\\\\\\\\c[0] at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Potato Seeds x2\\\\\\\\\\\\\\\\i[9]<br>\\\\\\\\n\\\\\\\\\\\\\\\\i[3]Carrot Seeds x2\\\\\\\\\\\\\\\\i[9]<br>\\\\\\\\n\\\\\\\\\\\\\\\\i[3]Tomato Seeds x2\\\\\\\\\\\\\\\\i[9]<br>\\\\\\\\n\\\\\\\\\\\\\\\\i[3]Grape Seeds x2\\\\\\\\\\\\\\\\i[9]<br>\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"With puns and determination, Lieza seems determined to make a farmer out of me. I should at the very least give her a day to try.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 4":"{\"Title\":\"\\\\i[69]Apprentice with Suki\",\"Type\":\"Main Quests\",\"Difficulty\":\"?\",\"From\":\"Suki\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Suki\\\\\\\\\\\\\\\\c[0] (mom) may have been a great warrior back in her day, but those days are far behind her. Today she spends her days cooking at the town's tavern.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Apprentice under \\\\\\\\\\\\\\\\c[4]Suki\\\\\\\\\\\\\\\\c[0] at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Cooking Recipes\\\\\\\\\\\\\\\\i[9]\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"While mother wants me to apprentice under \\\\\\\\\\\\\\\\c[4]Genko\\\\\\\\\\\\\\\\c[0], she wouldn't be opposed to having me apprentice under her so I can take over the family tavern one day.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 5":"{\"Title\":\"\\\\i[19]Help Misha with Manuscript\",\"Type\":\"Character Quests\",\"Difficulty\":\"?\",\"From\":\"Misha\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Misha\\\\\\\\\\\\\\\\c[0] (dad)Has been preaching peace for as long as anyone can remember. A trained diplomat, he is ready to impart his knowledge onto someone.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Help father(\\\\\\\\\\\\\\\\c[4]Misha\\\\\\\\\\\\\\\\c[0]) at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"The joy of knowing your father loves you.\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"While it may not be the most exciting prospect, father has been mentioning working on a manuscript for a long time. It wouldn't hurt to assist him. Maybe if he can help with my charisma I can win over Shiori?\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 6":"{\"Title\":\"\\\\i[29]Say hi!\",\"Type\":\"Character Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Village of Qin-Song\",\"Location\":\"Quin-Song\",\"Description\":\"[\\\"\\\\\\\"Why not be a good neighbor? Be sure to say hi to everyone in town!\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Suki\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Misha\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Tobi\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Shiori\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Sachi\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Menke\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Sara\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Jet\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Lieza\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Tolkien\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Talk to \\\\\\\\\\\\\\\\c[4]Genko\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\",\\\"6\\\",\\\"7\\\",\\\"8\\\",\\\"9\\\",\\\"10\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"The joy of having seen all the text and lore hidden in this game!\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"I've grown up around these people, the least I can do is wish them a good morning!\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 7":"{\"Title\":\"\\\\i[404]Apprentice with Genko\",\"Type\":\"Main Quests\",\"Difficulty\":\"?\",\"From\":\"Genko\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Genko\\\\\\\\\\\\\\\\c[0] was a soldier in general Drake's army a long time ago. While mother can no longer train me, he certainly can.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Apprentice under \\\\\\\\\\\\\\\\c[4]Genko\\\\\\\\\\\\\\\\c[0] at least one day.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Skills\\\\\\\\\\\\\\\\i[1]\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"Genko has very strong beliefs about the war far away. If I can handle hearing that through the entirety of being trained then maybe I can manage to be the warrior mother wants me to be.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 8":"{\"Title\":\"\\\\i[497]Find Lost Toy\",\"Type\":\"Character Quests\",\"Difficulty\":\"Easy\",\"From\":\"Jet & Sara\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Sara\\\\\\\\\\\\\\\\c[0] has lost her favorite doll! Help Jet be a good big brother and help him find it!\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Find \\\\\\\\\\\\\\\\c[4]Sara's\\\\\\\\\\\\\\\\c[0] doll.\\\\\\\"\\\",\\\"\\\\\\\"Deliver the doll to \\\\\\\\\\\\\\\\c[4]Jet\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Flowers x1\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"These two are adorable, if I can I should help them out.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 9":"{\"Title\":\"\\\\i[237]Catch Bugs\",\"Type\":\"Character Quests\",\"Difficulty\":\"Easy\",\"From\":\"Jet & Sara\",\"Location\":\"Quin-Song Village\",\"Description\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Sara\\\\\\\\\\\\\\\\c[0] needs you to catch 5 \\\\\\\\\\\\\\\\c[2]Bug\\\\\\\\\\\\\\\\c[0] (\\\\\\\\\\\\\\\\v[34] of 5 caught)\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Catch 5 \\\\\\\\\\\\\\\\c[2]Bug\\\\\\\\\\\\\\\\c[0]\\\\\\\"\\\",\\\"\\\\\\\"Deliver the \\\\\\\\\\\\\\\\c[2]Bugs\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\c[4]Sara\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[246]Flowers x1\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"Let me be a good person as my final act as a child.\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"true","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.05 Revamps the shop menu appearance and provides the\nframework for many new shop options.","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.49 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.19 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1.0","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.020","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon Image Index":"0","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.03 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_BattleBgmControl","status":true,"description":"v1.01 Assign BGM's to certain troops. Make BGM's change\nduring battle when certain enemies reach different HP values.","parameters":{}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.01 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 has reached Level %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Acquired Skill","Skill Text Plural":"Acquired Skills","Skill List Width":"200"}},
{"name":"YEP_EventChasePlayer","status":true,"description":"v1.07 When a player is in the proximity of a certain event,\nthe event will start chasing or fleeing from the player.","parameters":{"Sight Lock":"300","See Player":"true","Alert Timer":"120","Alert Balloon":"1","Alert Sound":"Attack1","Alert Common Event":"0","Return After":"true","Return Wait":"180"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false"}}
];
