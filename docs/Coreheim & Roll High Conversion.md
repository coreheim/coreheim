## Weapon Skill & Strength
 - For Weapon Skill, Ballistic Skill and Initiative the skills are always roll equal to or higher in Coreheim Roll High.

```
13 - ((WS * S) / 3 rounded) = Roll High Weapon Skill
```

| WS/S  | 1       | 2       | 3       | 4      | 5      | 6      |
| ----- | ------- | ------- | ------- | ------ | ------ | ------ |
| 1     | 12+     | 12+     | 12+     | 12+    | 11+    | 11+    |
| 2     | 12+     | 12+     | 11+     | 10+    | 10+    | 9+     |
| **3** | **12+** | **11+** | **10+** | **9+** | **8+** | **7+** |
| 4     | 12+     | 10+     | 9+      | 8+     | 6+     | 5+     |
| 5     | 11+     | 10+     | 8+      | 6+     | 5+     | 3+     |
| 6     | 11+     | 9+      | 7+      | 5+     | 3+     | 1+     |


| WS/S   | 6+      | 5+      | 4+      | 3+     | 2+     | 1+     |
| ------ | ------- | ------- | ------- | ------ | ------ | ------ |
| 6+     | 12+     | 12+     | 12+     | 12+    | 11+    | 11+    |
| 5+     | 12+     | 12+     | 11+     | 10+    | 10+    | 9+     |
| **4+** | **12+** | **11+** | **10+** | **9+** | **8+** | **7+** |
| 3+     | 12+     | 10+     | 9+      | 8+     | 6+     | 5+     |
| 2+     | 11+     | 10+     | 8+      | 6+     | 5+     | 3+     |
| 1+     | 11+     | 9+      | 7+      | 5+     | 3+     | 1+     |

## Ballistic Skill
- Ballistic skill is treated as though the ranged weapon has a 3 for strength by default.
- A +1 skill is useful for negating modifiers. Eg. Negating the move and fire debuff for ballistics.
- Weapons now modify the ballistic skill role.
	- Throwing knives -1 to BS rolls
	- Crossbow, Pistol, Duelling Pistol +1 to BS rolls
	- Handgun, Long Rifle +2 BS rolls

```
13 - ( Mordheim BS + 3 ) = Roll High Skill
```

| Mordheim BS         | 1   | 2   | 3   | 4   | 5   | 6   |
| ------------------- | --- | --- | --- | --- | --- | --- |
| **Roll High Skill** | 12+ | 11+ | 10+ | 9+  | 8+  | 7+  |


| Mordheim BS         | 6+  | 5+  | 4+  | 3+  | 2+  | 1+  |
| ------------------- | --- | --- | --- | --- | --- | --- |
| **Roll High Skill** | 12+ | 11+ | 10+ | 9+  | 8+  | 7+  |

Examples: 
Mercenary Marksmen (BS 4 or 9+) shooring:
- Bow: 9+
- Crossbow (effective after plus): 8+
- Rifle (effective after plus): 7+

Vermenkin (BS 3 or 10+)
- Sling 10+
- Sling + moved = 11+
- Sling + moved + cover = 12+

## Initiative 
 - While a skill can go down to a +1 which implies it always succeeds, it does not.
- A natural roll of 12 always succeeds and a natural 1 always fails.

```
13 - ( Mordheim Skill x 2 ) = Roll High Skill
```

| Mordheim Skill      | 1   | 2   | 3   | 4   | 5   | 6   |
| ------------------- | --- | --- | --- | --- | --- | --- |
| **Roll High Skill** | 11+ | 9+  | 7+  | 5+  | 3+  | 1+  |

| Mordheim Skill      | 6+  | 5+  | 4+  | 3+  | 2+  | 1+  |
| ------------------- | --- | --- | --- | --- | --- | --- |
| **Roll High Skill** | 11+ | 9+  | 7+  | 5+  | 3+  | 1+  |
# Toughness
- Toughness is instead changed to be a modifier that impacts when a unit rolls Strength to wound your unit.
- Note that while a 12 always hits, it will only crit if your Strength roll to wound is a 11+ or better.
- The net result of these changes only impacts the extremes.
	- Automatic wounds are removed because a 1 will always miss.
	- Situations where a low Strength couldn't ever wound a high Toughness target are removed because a 12 will always hit.
```
( Mordheim Toughness ) - 3 = Toughness Modifier
```

| Mordheim Toughness     | 1   | 2   | 3   | 4   | 5   | 6   |
| ---------------------- | --- | --- | --- | --- | --- | --- |
| **Toughness Modifier** | +2  | +1  | +0  | -1  | -2  | -3  |

# Leadership
- This is simply flipped to make leadership always roll high.
- 
```
14 - Mordheim Ld = Roll High Ld
```

| Mordheim Leadership              | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11   |
| -------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| **Mordheim % chance of success** | 8%  | 17% | 28% | 42% | 58% | 72% | 83% | 92% | 97%  |
| **Roll High Leadership**         | +11 | +10 | +9  | +8  | +7  | +6  | +5  | +4  | +3   |
| **d12**                          | 12+ | 11+ | 9+  | 8+  | 6+  | 4+  | 3+  | 2+  | 1+   |
| **d12 % change of success**      | 8%  | 17% | 33% | 42% | 58% | 75% | 83% | 92% | 100% |
