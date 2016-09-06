const PHYSICAL = "Physical";
const SPIRIT = "Spirit";
const MARKSMANSHIP = "Marksmanship";
const ELEMENTAL = "Elemental";
const SHADOW = "Shadow";
const NATURE = "Nature";
const HOLY = "Holy";
const PRIMAL = "Primal";

const DAMAGE = "Damage";
const ENHANCE = "Enhance";
const WEAKEN = "Weaken";
const HEAL = "Heal";

const skillsByType = {
  [DAMAGE]: [],
  [ENHANCE]: [],
  [WEAKEN]: [],
  [HEAL]: []
};

function skill(name, attribute, type) {
  skillsByType[type].push({
    name: name,
    attribute: attribute,
    type: type
  });
}

skill('Ambush', PHYSICAL, DAMAGE);
skill('Distract', PHYSICAL, ENHANCE);
skill('Bash', PHYSICAL, DAMAGE);
skill('Taunt', PHYSICAL, WEAKEN);
skill('Final Resistance', PHYSICAL, ENHANCE);
skill('Wipeout', PHYSICAL, DAMAGE);
skill('Invincible', PHYSICAL, ENHANCE);
skill('Frenzy', PHYSICAL, ENHANCE);
skill('Mighty Strike', PHYSICAL, DAMAGE);
skill('Revenge', PHYSICAL, ENHANCE);
skill('Lacerate', PHYSICAL, DAMAGE);
skill('Outcry', PHYSICAL, WEAKEN);
skill('First Aid', PHYSICAL, HEAL);
skill('Slice and Dice', PHYSICAL, ENHANCE);
skill('False-Edge Strike', PHYSICAL, DAMAGE);
skill('Steady Battle Line', PHYSICAL, ENHANCE);
skill('Target Focus', PHYSICAL, ENHANCE);
skill('Gust', PHYSICAL, ENHANCE);
skill('Slay', PHYSICAL, DAMAGE);
skill('Threat Alert', PHYSICAL, ENHANCE);
skill('Storm Blade', PHYSICAL, DAMAGE);
skill('Excessive Bleeding', PHYSICAL, WEAKEN);
skill('Tactical Command', PHYSICAL, ENHANCE);
skill('Reckless Strike', PHYSICAL, DAMAGE);
skill('Justice Armor', PHYSICAL, ENHANCE);
skill('Extortion', PHYSICAL, DAMAGE);
skill('Whirlwind of Blood', PHYSICAL, DAMAGE);
skill('Stealth Strike', PHYSICAL, DAMAGE);
skill('Duel', PHYSICAL, ENHANCE);
skill('Brutal Dissection', PHYSICAL, DAMAGE);
skill('Savage Dissection', PHYSICAL, DAMAGE);
skill('Sleep', SPIRIT, WEAKEN);
skill('Patience', SPIRIT, ENHANCE);
skill('Awaken', SPIRIT, ENHANCE);
skill('Acceleration', SPIRIT, ENHANCE);
skill('Infirm', SPIRIT, WEAKEN);
skill('Spell Destruction', SPIRIT, WEAKEN);
skill('Wisdom', SPIRIT, ENHANCE);
skill('Soaring Energy', SPIRIT, ENHANCE);
skill('Illusion', SPIRIT, WEAKEN);
skill('Breakthrough', SPIRIT, ENHANCE);
skill('Schizophrenia', SPIRIT, DAMAGE);
skill('Copy', SPIRIT, ENHANCE);
skill('Spirit Partition', SPIRIT, ENHANCE);
skill('Magic Induce', SPIRIT, HEAL);
skill('Mystical Energy', SPIRIT, HEAL);
skill('Wild Shot', MARKSMANSHIP, DAMAGE);
skill('Aimed Shot', MARKSMANSHIP, DAMAGE);
skill('Weakness Detection', MARKSMANSHIP, ENHANCE);
skill('Eagle Eye', MARKSMANSHIP, ENHANCE);
skill('Rapid Shot', MARKSMANSHIP, DAMAGE);
skill('Explosive Shot', MARKSMANSHIP, DAMAGE);
skill('Multiple Strike', MARKSMANSHIP, ENHANCE);
skill('Cobra Shot', MARKSMANSHIP, DAMAGE);
skill('Poisoned Shuriken', MARKSMANSHIP, DAMAGE);
skill('Summon Meteorite', ELEMENTAL, DAMAGE);
skill('Incineration', ELEMENTAL, DAMAGE);
skill('Freeze', ELEMENTAL, DAMAGE);
skill('Firestorm', ELEMENTAL, DAMAGE);
skill('Ice Blast', ELEMENTAL, DAMAGE);
skill('Flame Strike', ELEMENTAL, DAMAGE);
skill('Blizzard', ELEMENTAL, DAMAGE);
skill('Flame Shield', ELEMENTAL, ENHANCE);
skill('Elemental Focus', ELEMENTAL, ENHANCE);
skill('Mana Steal', ELEMENTAL, WEAKEN);
skill('Seed of Fire', ELEMENTAL, WEAKEN);
skill('Battle Spirit', ELEMENTAL, ENHANCE);
skill('Icicle', ELEMENTAL, DAMAGE);
skill('Abyssal Flame', ELEMENTAL, DAMAGE);
skill('Weaken Resist', SHADOW, WEAKEN);
skill('Decay', SHADOW, DAMAGE);
skill('Vain', SHADOW, ENHANCE);
skill('Exile', SHADOW, WEAKEN);
skill('Epidemic', SHADOW, DAMAGE);
skill('Destruction', SHADOW, DAMAGE);
skill('Drain Life', SHADOW, DAMAGE);
skill('Bloody Consequences', SHADOW, ENHANCE);
skill('Curse of Vampire', SHADOW, WEAKEN);
skill('Blight', SHADOW, DAMAGE);
skill('Deadly Strike', SHADOW, DAMAGE);
skill('Shadow Wave', SHADOW, DAMAGE);
skill('Soul Contract', SHADOW, ENHANCE);
skill('Mad Potion', SHADOW, HEAL);
skill('Song of the Dead Man', SHADOW, DAMAGE);
skill('Naturalization', NATURE, WEAKEN);
skill('Regenerate', NATURE, HEAL);
skill('Earthquake', NATURE, DAMAGE);
skill('Coil', NATURE, DAMAGE);
skill('Piercing Wind', NATURE, DAMAGE);
skill('Tree Protection', NATURE, ENHANCE);
skill('Thorns', NATURE, ENHANCE);
skill('Entangling Roots', NATURE, WEAKEN);
skill('Swiftmend', NATURE, HEAL);
skill('Healing Rain', NATURE, HEAL);
skill('Swarm of Hornets', NATURE, DAMAGE);
skill('Uneasy Thundercloud', NATURE, DAMAGE);
skill('Sweet Dreams', NATURE, ENHANCE);
skill('Rhapsody', NATURE, ENHANCE);
skill('Healing Light', HOLY, HEAL);
skill('Bestow Divinity', HOLY, HEAL);
skill('Prayer', HOLY, HEAL);
skill('Purify', HOLY, HEAL);
skill('Salvation', HOLY, HEAL);
skill('Luminosity', HOLY, DAMAGE);
skill('Vitality', HOLY, ENHANCE);
skill('Grace of Protection', HOLY, ENHANCE);
skill('Shield of Punishment', HOLY, DAMAGE);
skill('Divine Rain', HOLY, HEAL);
skill('Evidence of Light', HOLY, ENHANCE);
skill('Aegis Shield', HOLY, ENHANCE);
skill('Judgment of Rage', HOLY, DAMAGE);
skill('Time Reversal', PRIMAL, ENHANCE);
skill('Evocation', PRIMAL, ENHANCE);
skill('Primal Strength', PRIMAL, ENHANCE);
skill('Lethargy', PRIMAL, WEAKEN);
skill('Gravity Increase', PRIMAL, DAMAGE);
skill('Numbness', PRIMAL, ENHANCE);
skill('Fatigue', PRIMAL, DAMAGE);
skill('Primal Regrowth', PRIMAL, HEAL);
skill('Implosion', PRIMAL, DAMAGE);
skill('Celebration', PRIMAL, DAMAGE);

function tally(skillType) {
  const counts = {};
  const skills = skillsByType[skillType];
  skills.forEach((skill) => {
    if (counts[skill.attribute]) {
      counts[skill.attribute]++;
    } else {
      counts[skill.attribute] = 1;
    }
  });

  for (var attr in counts) {
    counts[attr] = ((counts[attr] / skills.length) * 100).toFixed(2)
  }
  return counts;
}

const output = {
  [DAMAGE]: tally(DAMAGE),
  [ENHANCE]: tally(ENHANCE),
  [WEAKEN]: tally(WEAKEN),
  [HEAL]: tally(HEAL)
};

console.log(JSON.stringify(output, null, 2));
