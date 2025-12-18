# EXCALIBURIAN!! Developer Menu

## Overview
A comprehensive developer menu plugin for EXCALIBURIAN!! that provides extensive game modification and debugging capabilities. This menu gives you access to all the most powerful equipment, stat modifications, and game state controls.

## Activation
- **F10** - Opens the developer menu (works in both test and deployed versions)

## Features

### Basic Functions
- **1. Give 1000 Gold** - Adds 1000 gold to party
- **2. Give 10000 Gold** - Adds 10000 gold to party  
- **3. Full Heal Party** - Restores all HP/MP for all party members
- **4. Add 1000 EXP to All** - Gives 1000 experience to all party members
- **5. Give All Items** - Adds 10x of basic consumable items (IDs 1-27)
- **8. Give Key Items** - Adds progression items like keys, chalice, holy water
- **9. Set Max Level** - Sets all party members to level 50 (max level)
- **C. Add 10000 EXP to All** - Gives 10000 experience to all party members

### Advanced Modifications
- **6. Toggle No Clip** - Walk through walls and obstacles
- **7. Toggle Encounters** - Disable/enable random encounters  
- **D. Toggle Damage Buff** - 10x damage multiplier for party (3x healing boost)

### Equipment Menus

#### E. Get Legendary Weapon
**Ultimate Tier:**
- **Excaliburn (ID: 36)** - 255 ATK, flaming sword with fire elemental damage
- **Atgeir (ID: 39)** - 255 ATK, Black Knight's poleaxe with silence/blind effects
- **Excalibur (ID: 35)** - 200 ATK, Alexander's legendary sword

**Legendary Tier:**
- **Muramasa (ID: 27)** - 195 ATK, Dark Knight exclusive blade
- **Masamune (ID: 28)** - 195 ATK, Dark Knight exclusive blade  
- **Dragon Sword (ID: 26)** - 180 ATK, extra damage vs dragons
- **Dragon Spear (ID: 25)** - 171 ATK, dragon killer spear
- **Dragon Claw (ID: 34)** - 150 ATK, increased critical hit rate

**Special Weapons:**
- **Death Harp (ID: 33)** - May instantly defeat all enemies
- **Great Crossbow (ID: 23)** - 152 ATK, powerful ranged weapon
- **Blood Sword (ID: 37)** - Drains HP from enemies to heal user

#### F. Get Legendary Armor
**Body Armor:**
- **Judgment Armor (ID: 23)** - 72 DEF, Alexander's legendary armor
- **Dragon Mail (ID: 22)** - 71 DEF, made from dragon scales
- **Mithril Armor (ID: 21)** - 56 DEF, magical mithril silver

**Helmets:**
- **Tarnhelm (ID: 32)** - 38 DEF, Alexander's legendary helm
- **Dragon Helm (ID: 31)** - 37 DEF, dragon scale helmet
- **Mithril Helm (ID: 30)** - 25 DEF, magical helmet

**Shields:**
- **Aegis (ID: 9)** - 30 DEF, Alexander's legendary shield
- **Dragon Shield (ID: 8)** - 26 DEF, dragon scale protection
- **Mithril Shield (ID: 7)** - 18 DEF, mithril protection

**Game-Breaking Accessories:**
- **Mercury Shoes (ID: 38)** - +255 Agility (maximum speed)
- **Magic Pendant (ID: 34)** - Makes all spells cost 0 MP
- **Emerald (ID: 42)** - Resists all status ailments
- **Carbuncle (ID: 43)** - 33% chance to counter physical attacks
- **Lapis Lazuli (ID: 44)** - 33% chance to reflect magic attacks
- **Topaz (ID: 47)** - Increases critical hit rate by 33%
- **Magic Ring (ID: 37)** - +7 INT/RES and silence resistance

### Utility Functions

#### A. Add Specific Item
**Consumables:**
- **1. Herb** - HP healing item
- **2. Potion** - Full HP restore
- **3. World Tree Fruit** - MP restore
- **4. Baby Leech** - Cure poison
- **8. Phoenix Tail** - Revive fallen party member
- **9. Unicorn Horn** - Party-wide healing

**Stat Enhancement Items:**
- **10. Health Nut** - Permanent +HP increase
- **11. Magic Nut** - Permanent +MP increase
- **12. Strength Nut** - Permanent +ATK increase
- **13. Resilience Nut** - Permanent +DEF increase
- **14. Wisdom Nut** - Permanent +WIS increase
- **15. Agility Nut** - Permanent +AGI increase
- **16. Luck Nut** - Permanent +LUK increase

#### B. Fast Travel
**Preset Locations:**
- **1. Alexandria** - Starting city (Map 170)
- **2. Midura** - Town (Map 1)
- **3. Elfame** - Town (Map 2)
- **4. Palscea** - Town (Map 3)
- **5. Framheim** - Town (Map 4)
- **6. Vangaria** - Town (Map 5)
- **7. Custom Map ID** - Enter any map ID with coordinates

#### 0. Game Info
Displays comprehensive game state information:
- Current Map ID
- Player coordinates (X, Y)
- Gold amount
- Total playtime
- Number of party members  
- No-Clip status (ON/OFF)
- Random Encounters status (ON/OFF)
- Damage Buff status (ON/OFF with multiplier)
- **Custom Battle**: Enter any Troop ID to fight specific enemy groups
- **Toggle Encounters**: Disable/enable random encounters while walking

### System Tools
- **No-Clip Mode**: Walk through walls and obstacles (toggle on/off)
- **Speed Control**: Adjust game speed (2x, 4x, or normal speed)
- **Game Information**: Display current status:
  - Current map ID and player position
  - Average party level
  - Total playtime
  - Gold amount
  - Save/battle/win counts

### Save/Load System
- **Quick Save**: Instantly save current game state to slot 0
- **Quick Load**: Reload the last quick save

## EXCALIBURIAN!! Specific Features

The dev menu includes several features specifically tailored for EXCALIBURIAN!!:

### Character Management
- All 12 main heroes can be recruited instantly:
  1. Alex (Hero)
  2. Brian (Warrior) 
  3. Carol (Mage)
  4. Daisy (Priest)
  5. Enryuu (Monk)
  6. Falcon (Thief)
## Technical Implementation
- **Plugin File:** `DevMenuTest.js`
- **Activation:** F10 keydown event listener
- **Game Modifications:** Function overrides for:
  - `Game_Player.canPass()` - No-clip functionality
  - `Game_Player.makeEncounterCount()` - Encounter disable
  - `Game_Action.makeDamageValue()` - Damage buff system
  - `Game_Action.makeValue()` - Healing buff system
- **UI System:** Prompt-based menus for Steam compatibility
- **Error Handling:** Try-catch blocks for robust operation

### System Variables
The plugin uses these system variables to track states:
- `$gameSystem._devNoClip`: No-clip mode status
- `$gameSystem._devNoEncounters`: Random encounter disable status
- `$gameSystem._devDamageBuff`: 10x damage multiplier status

## Installation
1. Plugin is already installed in `/js/plugins/DevMenuTest.js`
2. Plugin is enabled in `plugins.js`
3. Press F10 in-game to activate

## Notes
- All legendary equipment represents the most powerful items in EXCALIBURIAN!!
- Damage buff affects both damage output (10x) and healing effectiveness (3x)
- No-clip allows walking through any terrain or obstacles
- Fast travel provides instant map navigation
- Item IDs correspond to the game's internal data structure
- Menu works in both test mode and Steam deployed versions

---
**Created by:** AI Assistant  
**For:** EXCALIBURIAN!! by Majd Rouhana  
**Engine:** RPG Maker MV  
**Plugin Version:** DevMenuTest v1.0.0
1. **Testing Only**: Use primarily for testing and development
2. **Backup Saves**: Always backup important save files before using
3. **Release Builds**: Disable in final release versions
4. **Switch Management**: Be careful with story-critical switches

### Potential Issues
- **Story Progression**: Activating certain switches may skip important story events
- **Game Balance**: Giving max items/levels can break game difficulty
- **Save Corruption**: Always test saves after using dev functions

## Keyboard Shortcuts

- **F10**: Open developer menu (default, configurable)
- **Ctrl+Enter**: Alternative menu activation
- **Arrow Keys**: Navigate menu options
- **Enter**: Select/activate option
- **Escape**: Close menu

## Advanced Usage

### Switch/Variable IDs
To effectively use the switch and variable editors, reference the game's data:
- Switches 1-200+: Various story and system flags
- Variables 1-50+: Numeric values for counters, timers, etc.

### Map IDs for Teleportation
Common map IDs in EXCALIBURIAN!!:
- Map 1-30: Various towns and dungeons
- Map 170: Alexandria (starting location)
- Check the game's Map files for complete list

### Troop IDs for Battle Testing
- Troop 1-50: Common enemies (slimes, goblins, etc.)
- Troop 100+: Boss encounters and special battles
- Troop 185: Default test battle configuration

## Troubleshooting

### Menu Won't Open
1. Ensure you're in test mode (F9 from editor)
2. Check if `enableInRelease` is set to true if needed
3. Verify no other plugins are conflicting with input

### Functions Not Working
1. Make sure notifications are enabled to see error messages
2. Some functions require specific game states to work properly
3. Restart the game if systems become unstable

### Save Issues
1. Quick save/load uses slot 0 - ensure it's available
2. Regular save system should work normally
3. Create backup saves before extensive testing

## Version History

### v1.0.0 (2025-12-18)
- Initial release
- Complete feature set for EXCALIBURIAN!!
- Integration with existing plugin system
- Comprehensive documentation