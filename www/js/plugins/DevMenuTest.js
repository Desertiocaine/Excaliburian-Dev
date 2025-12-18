/*:
 * @plugindesc DevMenuTest v1.0.0 - Simple test version
 * @author AI Assistant
 * 
 * @help DevMenuTest.js
 * Simple test plugin to verify the dev menu is working.
 * Press F10 to show an alert.
 */

(function() {
    'use strict';
    
    // Plugin loading confirmation
    console.log('DevMenuTest plugin is loading...');
    
    // Main dev menu function
    function showDevMenu() {
        var menuText = "=== DEVELOPER MENU ===\n\n";
        menuText += "1. Give 1000 Gold\n";
        menuText += "2. Give 10000 Gold\n";
        menuText += "3. Full Heal Party\n";
        menuText += "4. Add 1000 EXP to All\n";
        menuText += "5. Give All Items\n";
        menuText += "6. Toggle No Clip\n";
        menuText += "7. Toggle Encounters\n";
        menuText += "8. Give Key Items\n";
        menuText += "9. Set Max Level\n";
        menuText += "A. Add Specific Item\n";
        menuText += "B. Fast Travel\n";
        menuText += "C. Add 10000 EXP to All\n";
        menuText += "D. Toggle Damage Buff\n";
        menuText += "E. Get Legendary Weapon\n";
        menuText += "F. Get Legendary Armor\n";
        menuText += "0. Game Info\n\n";
        menuText += "Enter option or Cancel to close:";
        
        var choice = prompt(menuText);
        
        if (choice) {
            handleDevMenuChoice(choice);
        }
    }

    function handleDevMenuChoice(choice) {
        try {
            switch (choice) {
                case '1':
                    $gameParty.gainGold(1000);
                    showMessage('Added 1000 gold!');
                    break;
                    
                case '2':
                    $gameParty.gainGold(10000);
                    showMessage('Added 10000 gold!');
                    break;
                    
                case '3':
                    $gameParty.allMembers().forEach(function(actor) {
                        actor.recoverAll();
                    });
                    showMessage('Party fully healed!');
                    break;
                    
                case '4':
                    $gameParty.allMembers().forEach(function(actor) {
                        actor.gainExp(1000);
                    });
                    showMessage('Added 1000 EXP to all characters!');
                    break;
                    
                case '5':
                    for (var i = 1; i <= 27; i++) {
                        if ($dataItems[i]) {
                            $gameParty.gainItem($dataItems[i], 10);
                        }
                    }
                    showMessage('Added all items!');
                    break;
                    
                case '6':
                    if (!$gameSystem._devNoClip) {
                        $gameSystem._devNoClip = true;
                        showMessage('No-clip enabled!');
                    } else {
                        $gameSystem._devNoClip = false;
                        showMessage('No-clip disabled!');
                    }
                    break;
                    
                case '7':
                    if (!$gameSystem._devNoEncounters) {
                        $gameSystem._devNoEncounters = true;
                        showMessage('Random encounters disabled!');
                    } else {
                        $gameSystem._devNoEncounters = false;
                        showMessage('Random encounters enabled!');
                    }
                    break;
                    
                case '8':
                    var keyItems = [20, 21, 22, 23, 24, 25];
                    keyItems.forEach(function(itemId) {
                        if ($dataItems[itemId]) {
                            $gameParty.gainItem($dataItems[itemId], 1);
                        }
                    });
                    showMessage('Added key items!');
                    break;
                    
                case '9':
                    $gameParty.allMembers().forEach(function(actor) {
                        actor.changeLevel(50, true);
                    });
                    showMessage('All characters set to max level!');
                    break;
                    
                case 'A':
                case 'a':
                    showItemMenu();
                    break;
                    
                case 'B':
                case 'b':
                    showTravelMenu();
                    break;
                    
                case 'C':
                case 'c':
                    $gameParty.allMembers().forEach(function(actor) {
                        actor.gainExp(10000);
                    });
                    showMessage('Added 10000 EXP to all characters!');
                    break;
                    
                case 'D':
                case 'd':
                    if (!$gameSystem._devDamageBuff) {
                        $gameSystem._devDamageBuff = true;
                        showMessage('Damage Buff ON! (10x damage)');
                    } else {
                        $gameSystem._devDamageBuff = false;
                        showMessage('Damage Buff OFF! (normal damage)');
                    }
                    break;
                    
                case 'E':
                case 'e':
                    showWeaponMenu();
                    break;
                    
                case 'F':
                case 'f':
                    showArmorMenu();
                    break;
                    
                case '0':
                    var info = 'GAME INFORMATION\n\n';
                    info += 'Map ID: ' + $gameMap.mapId() + '\n';
                    info += 'Player Position: (' + $gamePlayer.x + ', ' + $gamePlayer.y + ')\n';
                    info += 'Gold: ' + $gameParty.gold() + '\n';
                    info += 'Playtime: ' + $gameSystem.playtimeText() + '\n';
                    info += 'Party Members: ' + $gameParty._actors.length + '\n';
                    info += 'No-Clip: ' + ($gameSystem._devNoClip ? 'ON' : 'OFF') + '\n';
                    info += 'No Encounters: ' + ($gameSystem._devNoEncounters ? 'ON' : 'OFF') + '\n';
                    info += 'Damage Buff: ' + ($gameSystem._devDamageBuff ? 'ON (10x)' : 'OFF');
                    alert(info);
                    break;
                    
                default:
                    alert('Invalid choice! Use numbers/letters from menu.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }

    function showMessage(text) {
        if ($gameMessage && !$gameMessage.isBusy()) {
            $gameMessage.add('\\C[3][DEV] ' + text + '\\C[0]');
        } else {
            alert(text);
        }
    }

    function showWeaponMenu() {
        var weaponText = "=== LEGENDARY WEAPONS ===\n\n";
        weaponText += "ULTIMATE TIER:\n";
        weaponText += "36. Excaliburn (255 ATK - Flaming)\n";
        weaponText += "39. Atgeir (255 ATK - Black Knight)\n";
        weaponText += "35. Excalibur (200 ATK - Alexander)\n\n";
        weaponText += "LEGENDARY TIER:\n";
        weaponText += "27. Muramasa (195 ATK - Dark Knight)\n";
        weaponText += "28. Masamune (195 ATK - Dark Knight)\n";
        weaponText += "26. Dragon Sword (180 ATK - Dragon Killer)\n";
        weaponText += "25. Dragon Spear (171 ATK - Dragon Killer)\n";
        weaponText += "34. Dragon Claw (150 ATK - Critical+)\n\n";
        weaponText += "SPECIAL WEAPONS:\n";
        weaponText += "33. Death Harp (Instant Death All)\n";
        weaponText += "23. Great Crossbow (152 ATK)\n";
        weaponText += "37. Blood Sword (HP Drain)\n\n";
        weaponText += "Enter weapon ID:";
        
        var weaponId = prompt(weaponText);
        if (weaponId && !isNaN(weaponId)) {
            addSpecificWeapon(parseInt(weaponId));
        }
    }

    function showArmorMenu() {
        var armorText = "=== LEGENDARY ARMOR ===\n\n";
        armorText += "BODY ARMOR:\n";
        armorText += "23. Judgment Armor (72 DEF - Alexander)\n";
        armorText += "22. Dragon Mail (71 DEF)\n";
        armorText += "21. Mithril Armor (56 DEF)\n\n";
        armorText += "HELMETS:\n";
        armorText += "32. Tarnhelm (38 DEF - Alexander)\n";
        armorText += "31. Dragon Helm (37 DEF)\n";
        armorText += "30. Mithril Helm (25 DEF)\n\n";
        armorText += "SHIELDS:\n";
        armorText += "9. Aegis (30 DEF - Alexander)\n";
        armorText += "8. Dragon Shield (26 DEF)\n";
        armorText += "7. Mithril Shield (18 DEF)\n\n";
        armorText += "ACCESSORIES:\n";
        armorText += "38. Mercury Shoes (+255 AGI)\n";
        armorText += "34. Magic Pendant (0 MP Cost)\n";
        armorText += "42. Emerald (All Status Resist)\n";
        armorText += "43. Carbuncle (Counter Attacks)\n";
        armorText += "44. Lapis Lazuli (Reflect Magic)\n";
        armorText += "47. Topaz (+Critical Rate)\n";
        armorText += "37. Magic Ring (+INT/RES)\n\n";
        armorText += "Enter armor ID:";
        
        var armorId = prompt(armorText);
        if (armorId && !isNaN(armorId)) {
            addSpecificArmor(parseInt(armorId));
        }
    }

    function addSpecificWeapon(weaponId) {
        if ($dataWeapons[weaponId]) {
            $gameParty.gainItem($dataWeapons[weaponId], 1);
            showMessage('Added weapon: ' + $dataWeapons[weaponId].name);
        } else {
            alert('Invalid weapon ID!');
        }
    }

    function addSpecificArmor(armorId) {
        if ($dataArmors[armorId]) {
            $gameParty.gainItem($dataArmors[armorId], 1);
            showMessage('Added armor: ' + $dataArmors[armorId].name);
        } else {
            alert('Invalid armor ID!');
        }
    }

    function showItemMenu() {
        var itemText = "=== ADD SPECIFIC ITEM ===\n\n";
        itemText += "CONSUMABLES:\n";
        itemText += "1. Herb (HP heal)\n";
        itemText += "2. Potion (full HP)\n";
        itemText += "3. World Tree Fruit (MP)\n";
        itemText += "4. Baby Leech (cure poison)\n";
        itemText += "8. Phoenix Tail (revive)\n";
        itemText += "9. Unicorn Horn (party heal)\n\n";
        itemText += "STAT ITEMS:\n";
        itemText += "10. Health Nut (+HP)\n";
        itemText += "11. Magic Nut (+MP)\n";
        itemText += "12. Strength Nut (+ATK)\n";
        itemText += "13. Resilience Nut (+DEF)\n";
        itemText += "14. Wisdom Nut (+WIS)\n";
        itemText += "15. Agility Nut (+AGI)\n";
        itemText += "16. Luck Nut (+LUK)\n\n";
        itemText += "Enter item ID:";
        
        var itemId = prompt(itemText);
        if (itemId && !isNaN(itemId)) {
            var amount = prompt("How many? (1-99):");
            if (amount && !isNaN(amount)) {
                addSpecificItem(parseInt(itemId), parseInt(amount));
            }
        }
    }

    function addSpecificItem(itemId, amount) {
        if ($dataItems[itemId]) {
            $gameParty.gainItem($dataItems[itemId], amount);
            showMessage('Added ' + amount + 'x ' + $dataItems[itemId].name);
        } else {
            alert('Invalid item ID!');
        }
    }

    function showTravelMenu() {
        var travelText = "=== FAST TRAVEL ===\n\n";
        travelText += "1. Alexandria (Starting City)\n";
        travelText += "2. Midura\n";
        travelText += "3. Elfame\n";
        travelText += "4. Palscea\n";
        travelText += "5. Framheim\n";
        travelText += "6. Vangaria\n";
        travelText += "7. Custom Map ID\n\n";
        travelText += "Enter destination:";
        
        var choice = prompt(travelText);
        if (choice) {
            handleTravelChoice(choice);
        }
    }

    function handleTravelChoice(choice) {
        var mapId, x, y, direction;
        
        switch (choice) {
            case '1':
                mapId = 170; x = 1; y = 0; direction = 2;
                break;
            case '2':
                mapId = 1; x = 15; y = 15; direction = 2;
                break;
            case '3':
                mapId = 2; x = 15; y = 15; direction = 2;
                break;
            case '4':
                mapId = 3; x = 15; y = 15; direction = 2;
                break;
            case '5':
                mapId = 4; x = 15; y = 15; direction = 2;
                break;
            case '6':
                mapId = 5; x = 15; y = 15; direction = 2;
                break;
            case '7':
                var customMapId = prompt("Enter Map ID (1-300):");
                var customX = prompt("Enter X coordinate (0-50):");
                var customY = prompt("Enter Y coordinate (0-50):");
                if (customMapId && customX && customY) {
                    mapId = parseInt(customMapId);
                    x = parseInt(customX);
                    y = parseInt(customY);
                    direction = 2;
                } else {
                    return;
                }
                break;
            default:
                alert('Invalid choice!');
                return;
        }
        
        if (mapId) {
            $gamePlayer.reserveTransfer(mapId, x, y, direction, 0);
            showMessage('Traveling to Map ' + mapId + '...');
        }
    }
    
    // Key listener
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 121) { // F10
            event.preventDefault();
            showDevMenu();
        }
    });
    
    // No-clip functionality
    var _Game_Player_canPass = Game_Player.prototype.canPass;
    Game_Player.prototype.canPass = function(x, y, d) {
        if ($gameSystem._devNoClip) {
            return true;
        }
        return _Game_Player_canPass.call(this, x, y, d);
    };

    // Disable encounters when flag is set
    var _Game_Player_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
    Game_Player.prototype.makeEncounterCount = function() {
        if ($gameSystem._devNoEncounters) {
            this._encounterCount = 999;
        } else {
            _Game_Player_makeEncounterCount.call(this);
        }
    };

    // Damage buff system - boost damage by 10x if enabled
    var _Game_Action_makeDamageValue = Game_Action.prototype.makeDamageValue;
    Game_Action.prototype.makeDamageValue = function(target, critical) {
        var baseValue = _Game_Action_makeDamageValue.call(this, target, critical);
        
        // Boost damage if damage buff is on and actor is attacking
        if ($gameSystem._devDamageBuff && this.subject().isActor() && baseValue > 0) {
            baseValue = Math.floor(baseValue * 10);
        }
        
        return baseValue;
    };

    // Also boost healing if it's an actor using healing items/skills
    var _Game_Action_makeValue = Game_Action.prototype.makeValue;
    Game_Action.prototype.makeValue = function(target, critical) {
        var baseValue = _Game_Action_makeValue.call(this, target, critical);
        
        // Boost healing too if damage buff is on and actor is healing
        if ($gameSystem._devDamageBuff && this.subject().isActor() && baseValue < 0) {
            baseValue = Math.floor(baseValue * 3); // 3x healing instead of 10x
        }
        
        return baseValue;
    };

    console.log('DevMenuTest plugin loaded successfully!');
    
})();