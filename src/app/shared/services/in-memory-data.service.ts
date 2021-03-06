import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/shared/models/hero';
import { Faction } from 'src/app/shared/models/faction';
import { Archetype } from 'src/app/shared/models/archetype';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Array<Hero> = [
      /*{
        id: 1,
        name: 'Baseplate',
        tier: 1,
        rank: 1,
        speciesXp: 0,
        archetypeXp: 0,
        statXp: 0,
        earnedXp: 0,
        totalXp: 0,
        species: "Human",
        archetype: "Ministorum Priest",
        faction: "Imperium",
        keywords: ['Imperium', 'Adeptus Ministorum'],

        strLevels: 5,
        strLevels: 0,
        strLevels: 5,
        toughLevels: 5,
        toughLevels: 0,
        toughLevels: 5,
        agiLevels: 4,
        agiLevels: 0,
        agiLevels: 4,
        initLevels: 4,
        initLevels: 0,
        initLevels: 4,
        wilLevels: 3,
        wilLevels: 0,
        wilLevels: 3,
        intLevels: 3,
        intLevels: 0,
        intLevels: 3,
        felLevels: 1,
        felLevels: 0,
        felLevels: 1,

        traitDefence: 0,
        traitResilience: 0,
        traitDetermination: 0,
        traitMaxWounds: 0,
        traitMaxShock: 0,
        traitSpeed: 0,
        traitConviction: 0,
        traitResolve: 0,
        traitCorruption: 0,
        traitAwareness: 0,
        traitInfluence: 0,
        traitWealth: 0,
        traitWrath: 0,

        skillAthletics: 3,
        skillAwareness: 2,
        skillBallistics: 3,
        skillCunning: 1,
        skillDeception: 2,
        skillInsight: 1,
        skillIntimidation: 1,
        skillInvestigation: 1,
        skillLeadership: 2,
        skillMedicae: 1,
        skillPersuasion: 3,
        skillPilot: 2,
        skillPsychic: 1,
        skillScholar: 1,
        skillStealth: 1,
        skillSurvival: 2,
        skillTech: 1,
        skillWeapons: 2,

        wargearWeapons: ["Laspistol"],
        wargearArmour: ["Flak Armour"],
        wargearGear: ["Shipping Manifest"],

        abilities: ["Lie, Cheat, Steal"],
      },*/
    ];

    const species = [
      {
        name: "Human",
        cost: 0,
        description: "The uncounted trillions of Humans are the most numerous and widespread Species in the galaxy. The fathomless multitudes are spread across a million worlds with endless variety in mind and body. Little of the pure Human form has changed in the past forty Millennia, united as most Humans are in the God-Emperor's vast Imperium.",
        speed: 6,
      },
      {
        name: "Aeldari",
        cost: 10,
        description: "Ancient and inscrutable, the Aeldari are an innately psychic Species whose technologically-advanced empire once spanned the stars. Taller and slighter than Humans, their undeniably alien appearance is compounded by their eerily elegant movements. Though they have life spans millennia longer than Humans, their Species is dying and close to extinction ??? a pain they feel acutely with their unnaturally deep emotions.",
        speed: 8,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 3
            }
          ]
        },
        abilities: [
          {
            name: "Intense Emotion",
            description: "+1DN to all Resolve Tests. If you fail a Willpower based test in a scene involving emotion, the GM gains +1 Ruin.",
          },
          {
            name: "Psychosensitive",
            description: "You may choose to take the PSYKER keyword.",
          },
          {
            name: "Asuryani Paths",
            description: "You walked a path of the Asuryani.",
          }
        ]
      },
      {
        name: "Ork",
        cost: 20,
        description: "Savage, insensible brutes, these green skinned xenos monstrosities think only of war. Crude but inventive, they seek battle at any cost, fighting even amongst themselves when no other foe is available.",
        speed: 6,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3,
            },
            {
              name: "Toughness",
              value: 3,
            }
          ],
        },
        abilities: [
          {
            name: "Orky",
            description: "+1 bonus dice to Intimidation tests."
          },
          {
            name: "Bigger is Better",
            description: "You calculate Influence using Strength instead of Fellowship."
          }
        ]
      },
      {
        name: "Astartes",
        cost: 160,
        description: "The Emperor's Angels of Death were all once mortal men. All have undergone incredible trials and Gene-Seed implantation to become something more; transhuman demigods who know no fear and are created for war.",
        speed: 7,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 4,
            },
            {
              name: "Initiative",
              value: 4,
            },
            {
              name: "Intellect",
              value: 3,
            },
            {
              name: "Strength",
              value: 4,
            },
            {
              name: "Toughness",
              value: 4,
            },
            {
              name: "Willpower",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Athletics",
              value: 3,
            },
            {
              name: "Awareness",
              value: 3,
            },
            {
              name: "Ballistic Skill",
              value: 3,
            },
            {
              name: "Stealth",
              value: 3,
            },
            {
              name: "Weapon Skill",
              value: 3,
            }
          ],
        },
        abilities: [
          {
            name: "Defender of Humanity",
            description: "Add +Rank icons to any successful attack against a Mob.",
          },
          {
            name: "Honour the Chapter",
            description: "You are subject to the orders of your chapter master, and must honour both the beliefs and traditions of your chapter. You increase your Resolve by 1.",
          },
          {
            name: "Space Marine Implants",
            description: "You are immune to the Bleeding Condition. You gain +1 bonus dice to any test related to one of the 19 implants if the GM agrees it is appropriate.",
          }
        ]
      }
    ];

    const factions = [
      {
        species: "Human",
        name: "Adepta Sororitas",
        description: "The Adepta Sororitas is an elite sisterhood devoted to the Emperor of Mankind, possessing unwavering spiritual purity and fanatical zeal that guards against corruption and heresy. As the military arm of the Ecclesiarchy, the Sisters of Battle are a sword of righteous fury drawn to slay the enemies of the Imperial Creed.",
        keywords: [
          "IMPERIUM",
          "ADEPTA SORORITAS",
          "ADEPTUS MINISTORUM",
          "[ORDER]"
        ],
        archetypes: [
          "Sister Hospitaller",
          "Sister of Battle",
        ]
      },
      {
        species: "Human",
        name: "Adeptus Astra Telepathica",
        description: "The Adeptus Astra Telepathica are responsible for the acquisition, assessment, and training of Psykers. A Psyker is a Human with a rare genetic mutation; the ability to channel the Warp to manipulate reality. Psykers are both blessed and cursed; they are capable of reality-bending power, but the Immaterium they draw power from is unpredictable and perilous. Whenever a Psyker uses their powers, the malign influence of the Chaos Gods can infest reality, causing bizarre otherworldly phenomena. Worse, a daemon may overpower a weak-willed Psyker, contorting them into a gateway through which it can enter reality and consume their soul.",
        keywords: [
          "IMPERIUM",
          "ADEPTUS ASTRA TELEPATHICA",
          "PSYKER",
          "SCHOLASTICA PSYKANA",
        ],
        archetypes: [
          "Sanctioned Psyker",
        ]
      },
      {
        species: "Human",
        name: "Adeptus Mechanicus",
        description: "The Priesthood of Mars maintain and manufacture the machinery of the Imperium. Their deity is the Omnissiah, who manifests as a holy trinity: physically as the God-Emperor of Humanity, omnisciently as the Machine God, and spiritually as Motive Force. The Motive Force inhabits every piece of technology as a Machine Spirit, entities only the Adeptus Mechanicus have permission to interact with and the ritualistic means to do so.",
        keywords: [
          "IMPERIUM",
          "ADEPTUS MECHANICUS",
          "[FORGE WORLD]",
        ],
        archetypes: [
          "Skitarius",
          "Tech-Priest",
        ]
      },
      {
        species: "Human",
        name: "Adeptus Ministorum",
        description: "The Adeptus Ministorum is the official state church of the Imperium. More commonly known as the Ecclesiarchy, they practise and preach the Cult Imperialis, a religion founded in the belief that the God-Emperor is divine being. Tasked with ministering to the spiritual health of the Imperium, the Ecclesiarchy spread and enforce the teachings of the Cult throughout the Emperor's vast domain.",
        keywords: [
          "IMPERIUM",
          "ADEPTUS MINISTORUM",
        ],
        archetypes: [
          "Ministorum Priest",
          "Death Cult Assassin",
          "Crusader"
        ]
      },
      {
        species: "Human",
        name: "Astra Militarum",
        description: "The galaxy's greatest army, the Astra Militarum, is the massed military force of Humanity. The Imperial Guard is made up of women and men from every world of the Imperium; neither genetically or mechanically enhanced, they rely on blind faith, dogged determination, and endless numbers to defeat Humanity's frightful foes. Human lives are spent as freely as bullets, all willing sacrifices to see the Emperor's will done and His realm defended.",
        keywords: [
          "IMPERIUM",
          "ASTRA MILITARUM",
        ],
        archetypes: [
          "Imperial Guardsman",
          "Tempestus Scion",
          "Imperial Commissar",
        ]
      },
      {
        species: "Human",
        name: "The Inquisition",
        description: "A clandestine organisation duty bound to secretly police the Imperium, protecting it from internal and external threats. The Inquisition fight the war for the soul of Humanity, eradicating heresy, mutation, witchcraft, and daemons. They are empowered to take whatever measures they deem fit to expose and destroy these threats, lest they infect and corrupt Humanity, dragging it to sin and suffering. In this most demanding of duties, battling the most insidious of foes, they are given unbound authority. The agents of the Inquisition investigate all other Factions of the Imperium ??? none are beyond their jurisdiction, even other Inquisitors.",
        keywords: [
          "IMPERIUM",
          "INQUISITION",
          "[ORDO]",
        ],
        archetypes: [
          "Inquisitorial Acolyte",
          "Inquisitorial Sage",
        ]
      },
      {
        species: "Human",
        name: "Rogue Trader Dynasties",
        description: "A Rogue Trader bears a Warrant of Trade, a legal document that empowers them to explore, conquer, and trade beyond the boundaries of the Imperium. An ancient practice established by the Emperor during the Great Crusade, Rogue Traders have been tasked with expanding the borders of His realm for millennia.",
        keywords: [
          "IMPERIUM",
          "ROGUE TRADER",
          "[DYNASTY]",
        ],
        archetypes: [
          "Rogue Trader",
        ]
      },
      {
        species: "Human",
        name: "Scum",
        description: "Those that do not directly serve the Imperium ??? citizens without assigned jobs, mercenaries, or, worst of all, those that call themselves 'adventurers' ??? are barely tolerated, and collectively classed as Scum. A broad, colloquially used term, 'Scum' could apply to a peasant citizen employed in a low-level or menial job outside of an adepta; planetary nobility often refer to anyone under them as Scum.",
        keywords: [
          "SCUM",
          "[ANY]",
        ],
        archetypes: [
          "Ganger",
          "Scavvy",
          "Desperado",
        ]
      },
      {
        species: "Human",
        name: "Chaos",
        description: "The Warp is an unknowable dimension that is at once outside of and underpinning reality. In this strange space time is fluid, thoughts and dreams are real, and nightmares take flesh. Some contest the souls of the dead rest in this unreal realm, forming it's endless oceans. The four immortal beings known as the Chaos Gods are the ultimate powers of the Warp. Formed of common desires merging in the Immaterium, each Chaos God represents and subsists on the dark fantasies of the mortals of the Materium. These depraved entities represent different hateful facets of reality, but have similar ambitions. They desire more power, to tempt and corrupt mortals into worshipping them, and ultimately crave the complete domination of both the Immaterium and reality. Yet for all their terrible and malign power, the Ruinous Powers cannot act on the material universe directly. The Gods of Chaos are served by cultists, traitors to the Imperium that include terrifying renegades of the Adeptus Astartes.",
        keywords: [
          "CHAOS",
        ],
        archetypes: [
          "Cultist",
          "Rogue Psyker",
          "Heretek",
        ]
      },
      {
        species: "Aeldari",
        name: "Asuryani",
        description: "The Asuryani, also called Craftworld Aeldari as they were named before the fall of their lost realm, or the Eldar as they were long known to outsiders, are a kindred of the Aeldari race who now live on vast, city-like starships called craftworlds. Asuryani Outcasts, known as Anhrathe in the Aeldari Lexicon, are those rare members of the Aeldari species who have taken up the Path of the Outcast and left their home craftworld to wander the galaxy when they find the rigid Asuryani lifestyle suffocating. Some may even leave the Asuryani Path altogether.",
        keywords: [
          "AELDARI",
        ],
        archetypes: [
          "Corsair",
          "Ranger",
          "Warlock",
        ]
      },
      {
        species: "Ork",
        name: "Ork",
        description: "Savage, insensible brutes, these green skinned xenos monstrosities think only of war. Crude but inventive, they seek battle at any cost, fighting even amongst themselves when no other foe is available.",
        keywords: [
          "ORK",
          "[CLAN]",
        ],
        archetypes: [
          "Boy",
          "Kommando",
          "Nob",
        ]
      },
      {
        species: "Astartes",
        name: "Adeptus Astartes",
        description: "The Emperor's Angels of Death were all once mortal men. All have undergone incredible trials and Gene-Seed implantation to become something more; transhuman demigods who know no fear and are created for war.",
        keywords: [
          "IMPERIUM",
          "ADEPTUS ASTARTES",
          "[CHAPTER]",
        ],
        archetypes: [
          "Space Marine Scout",
          "Tactical Space Marine",
        ]
      },
      {
        species: "Astartes",
        name: "Heretic Astartes",
        description: "These debased heretics turn from the Emperor's light in pursuit of power and freedom, and are gifted with grotesque mutations and horrific psychic powers. Some believe the Great Rift heralds a strengthening of Chaos in real space, swelling the ranks of these cults more than ever. The creatures of Chaos and those who worship them are universally reviled, the Arch-Enemy of all other Factions.",
        keywords: [
          "ADEPTUS ASTARTES",
          "[LEGION]",
          "CHAOS",
          "[MARK OF CHAOS]",
          "HERETIC ASTARTES",
        ],
        archetypes: [
          "Chaos Space Marine",
        ]
      },
    ];

    const archetypes = [
      {
        name: "Sister Hospitaller",
        description: "A battlefield healer of both mind and soul. You ministrate to the injured with great Medicae expertise and inspire the pious with your cavernous well of faith.",
        faction: "Adepta Sororitas",
        tier: 1,
        cost: 24,
        bonuses: {
          attributes: [
            {
              name: "Intellect",
              value: 3,
            },
            {
              name: "Willpower",
              value: 3,
            },
          ],
          skills: [
            {
              name: "Medicae",
              value: 1,
            },
            {
              name: "Scholar",
              value: 1,
            }
          ]
        },
        abilities: [
          {
            name: "Loyal Compassion",
            description: "+Double Rank bonus dice whenever you make a Medicae (Int) Test on a character with the IMPERIUM keyword."
          },
        ],
        wargear: [
          "Sororitas Power Armour",
          "Chirurgeon's Tools",
          "Chain Bayonet",
          "Laspistol",
          "Clothing",
          "Rule of the Sororitas",
        ]
      },
      {
        name: "Sister of Battle",
        description: "An unwavering warrior of righteous determination, you are a warrior monk, raising battle hymns as you zealously destroy the Emperor's foes.",
        faction: "Adepta Sororitas",
        tier: 2,
        cost: 64,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3
            },
            {
              name: "Agility",
              value: 3
            },
            {
              name: "Toughness",
              value: 3
            },
            {
              name: "Willpower",
              value: 3
            },
          ],
          skills: [
            {
              name: "Scholar",
              value: 1
            },
            {
              name: "Ballistic Skill",
              value: 2
            },
            {
              name: "Weapon Skill",
              value: 2
            },
          ],
          influence: 1,
        },
        abilities: [
          {
            name: "Purity of Faith",
            description: "You and any allies within 15 metres gain +Double Rank bonus dice to Corruption Tests. You gain +Double Rank bonus dice to any Test to resist the effects of a Psychic Power."
          }
        ],
        wargear: [
          "Sororitas Power Armor",
          "Chaplet Ecclesiasticus",
          "Boltgun OR Chainsword & Bolt Pistol",
          "Clothing",
          "Writing Kit",
          "Rule of the Sororitas",
        ]
      },
      {
        name: "Sanctioned Psyker",
        description: "A mutant capable of channelling the Warp to manipulate reality.",
        faction: "Adeptus Astra Telepathica",
        tier: 2,
        cost: 32,
        bonuses: {
          attributes: [
            {
              name: "Willpower",
              value: 4
            },
          ],
          skills: [
            {
              name: "Psychic Mastery",
              value: 1
            },
          ],
        },
        abilities: [
          {
            name: "Psyker",
            description: "You know 1 Minor Psychic Power and the Smite psychic power. You may purchase additional psychic powers, following the rules in Chapter 11."
          },
          {
            name: "Unlock Disciplines",
            description: "You gain access to the Minor and Universal Disciplines. You unlock an additional single Psychic Discipline, following the rules in Chapter 11."
          }
        ],
        wargear: [
          "Laspistol",
          "Force Stave",
          "Psykana Mercy Blade",
          "Munitorum-Issue Mess Kit",
          "Blanket",
          "Grooming Kit",
          "2 Ration Packs",
        ]
      },
      {
        name: "Skitarius",
        description: "A soldier more of steel than sinew, you are a member of the standing army of the Adeptus Mechanicus.",
        faction: "Adeptus Mechanicus",
        tier: 2,
        cost: 28,
        bonuses: {
          attributes: [
            {
              name: "Toughness",
              value: 3
            },
          ],
          skills: [
            {
              name: "Ballistic Skill",
              value: 2
            },
            {
              name: "Tech",
              value: 1
            },
          ],
        },
        abilities: [
          {
            name: "Heavily Augmented",
            description: "Your body has been redesigned to withstand the rigours of war. You do not bleed (making you immune to the Bleeding) and gain +Rank bonus dice to Determination rolls."
          },
        ],
        wargear: [
          "Combi-Tool",
          "Galvanic Rifle",
          "Skitarii Auto-Cuirass",
        ]
      },
      {
        name: "Tech-Priest",
        description: "A high-ranking member of the Adeptus Mechanicus, technology and religion are as one to you, and you are truly devout.",
        faction: "Adeptus Mechanicus",
        tier: 3,
        cost: 44,
        bonuses: {
          attributes: [
            {
              name: "Willpower",
              value: 4
            },
          ],
          skills: [
            {
              name: "Psychic Mastery",
              value: 1
            },
          ],
          keywords: [
            "CULT MECHANICUS"
          ],
          influence: 2,
        },
        abilities: [
          {
            name: "Rite of Repair",
            description: "You receive +Double Rank to Tech (Int) Tests to repair damaged machinery. All Tech (Int) Tests you make take half the standard time."
          },
        ],
        wargear: [
          "Omnissian Axe",
          "Laspistol",
          "One Mechadendrite",
          "Any 2 Augmetics",
          "Combi-Tool",
          "Light Power Armour",
          "Omnissian Sigil (Symbol of Authority)"
        ]
      },
      {
        name: "Ministorum Priest",
        description: "An unwavering warrior of righteous determination, you are a warrior monk, raising battle hymns as you zealously destroy the Emperor's foes.",
        faction: "Adeptus Ministorum",
        tier: 1,
        cost: 12,
        bonuses: {
          attributes: [
            {
              name: "Willpower",
              value: 3
            },
          ],
          skills: [
            {
              name: "Scholar",
              value: 1
            },
          ],
        },
        abilities: [
          {
            name: "Fiery Invective",
            description: "You can preach the word of the Imperial Creed as a Free Action once per combat. You and all allies with the IMPERIUM keyword heal 1d3+Rank Shock."
          }
        ],
        wargear: [
          "Chainsword",
          "Laspistol",
          "Rosarius",
          "Knife",
          "Clothing",
          "Missionary Kit",
        ]
      },
      {
        name: "Death Cult Assassin",
        description: "A zealot of an extremist sect, you honour the Emperor's sacrifice for humanity through the ritual slaughter of His enemies.",
        faction: "Adeptus Ministorum",
        tier: 2,
        cost: 36,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 4
            },
          ],
          skills: [
            {
              name: "Weapon Skill",
              value: 2
            },
          ],
        },
        abilities: [
          {
            name: "Glancing Blow",
            description: "You depend upon your swift movement and honed reflexes to avoid harm. You may use your Agility instead of your Toughness when you roll Determination against Damage from attacks, and may roll Determination against Mortal Wounds. You cannot use this ability if you are immobilised in some way, such as through the Restrained Condition."
          }
        ],
        wargear: [
          "2 Death Cult Powerblades",
          "Bodyglove",
          "Knife",
          "Laspistol",
          "3 doses of Stimm",
        ],
        influence: 1,
      },
      {
        name: "Crusader",
        description: "A warrior-monk of the Ecclesiarchy, worship to the Emperor and single combat against His foes as one to you.",
        faction: "Adeptus Ministorum",
        tier: 3,
        cost: 54,
        bonuses: {
          attributes: [
            {
              name: "Initiative",
              value: 3
            },
            {
              name: "Willpower",
              value: 3
            },
          ],
          skills: [
            {
              name: "Scholar",
              value: 1
            },
            {
              name: "Weapon Skill",
              value: 3
            },
          ],
          influence: 1,
        },
        abilities: [
          {
            name: "Armour of Faith",
            description: "You gain +Double Rank bonus dice to melee attack tests against targets with the CHAOS or HERETIC keyword. Your Resolve also increases by +Rank."
          }
        ],
        wargear: [
          "Power Sword",
          "Storm Shield",
          "Carapace Armour",
          "Clothing",
        ]
      },
      {
        name: "Imperial Guardsman",
        description: "A footsoldier in the galaxy's greatest army. You are one of billions of raw recruits trained to stand and fire against the monstrous enemies of humanity.",
        faction: "Astra Militarum",
        tier: 1,
        cost: 6,
        bonuses: {
          skills: [
            {
              name: "Ballistic Skill",
              value: 2
            },
          ],
          keywords: ["[REGIMENT]"]
        },
        abilities: [
          {
            name: "Look Out, Sir!",
            description: "You have been drilled in sacrificing yourself to save your allies. Once per combat, you may take a Reflexive Action to move up to half your Speed to get in the way of any attack that hit an ally. The attacker then rolls against your Resilience instead of your ally???s, and may deal Wounds to you. Your Resilience increases by +Rank for the purpose of calculating damage."
          }
        ],
        wargear: [
          "Flak Armour",
          "Lasgun",
          "Knife",
          "Munitorum-Issue Mess Kit",
          "Grooming Kit",
          "Uplifting Primer",
          "3 Ration Packs"
        ]
      },
      {
        name: "Tempestus Scion",
        description: "You are a highly trained elite shock trooper of the Astra Militarum.",
        faction: "Astra Militarum",
        tier: 2,
        cost: 52,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3
            },
            {
              name: "Toughness",
              value: 3
            },
            {
              name: "Agility",
              value: 3
            },
          ],
          skills: [
            {
              name: "Ballistic Skill",
              value: 2
            },
            {
              name: "Stealth",
              value: 2
            },
          ],
          keywords: ["MILITARUM TEMPEST"],
          influence: 1,
        },
        abilities: [
          {
            name: "Elite Soldier",
            description: "You're an expert in inflicting pain through the weapons of the Imperium. Whenever you spend Glory to increase damage when using a weapon with the ASTRA MILITARUM you can add +Rank to the final damage value."
          }
        ],
        wargear: [
          "Tempestus Carapace",
          "Hot-Shot Lasgun",
          "Grav-Chute",
          "Knife",
          "Munitorum-Issue Mess Kit",
          "Uplifting Primer",
          "Slate Monitron",
          "Monoscope",
          "3 Ration Packs",
        ]
      },
      {
        name: "Imperial Commissar",
        description: "A warrior-monk of the Ecclesiarchy, worship to the Emperor and single combat against His foes as one to you.",
        faction: "Astra Militarum",
        tier: 3,
        cost: 76,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3
            },
            {
              name: "Toughness",
              value: 3
            },
            {
              name: "Willpower",
              value: 4
            }
          ],
          skills: [
            {
              name: "Ballistic Skill",
              value: 1
            },
            {
              name: "Intimidation",
              value: 2
            },
            {
              name: "Leadership",
              value: 2
            },
            {
              name: "Weapon Skill",
              value: 1
            },
          ],
          keywords: ["OFFICIO PREFECTUS"],
          influence: 3,
        },
        abilities: [
          {
            name: "Fearsome Respect",
            description: "You and any allies within 15 metres of you that can see you may add +Double Rank bonus dice to Resolve Tests. You add +Double Rank bonus dice to any Intimidation (Wil) Tests, including Interaction Attacks."
          }
        ],
        wargear: [
          "Bolt Pistol",
          "Chainsword",
          "Flak Coat",
          "Munitorum-Issue Mess Kit",
          "Blanket",
          "Grooming Kit",
          "Uplifting Primer",
          "3 Ration Packs",
        ]
      },
      {
        name: "Inquisitorial Acolyte",
        description: "Conscripted to aid an Inquisitor, you identify and destroy threats to the Imperium.",
        faction: "The Inquisition",
        tier: 1,
        cost: 6,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3
            },
            {
              name: "Toughness",
              value: 3
            },
            {
              name: "Willpower",
              value: 4
            }
          ],
          skills: [
            {
              name: "Ballistic Skill",
              value: 1
            },
            {
              name: "Intimidation",
              value: 2
            },
            {
              name: "Leadership",
              value: 2
            },
            {
              name: "Weapon Skill",
              value: 1
            },
          ],
          keywords: ["[ANY]"],
        },
        abilities: [
          {
            name: "Inquisitorial Decree",
            description: "You can invoke the name of your Inquisitor to gain +Rank bonus dice to any social Skill test when interacting with an individual with the IMPERIUM. You can only use this ability once per scene."
          }
        ],
        wargear: [
          "Flak Armour",
          "Any two IMPERIUM weapons with a Value of 5 or less and a Rarity of Uncommon or lower",
          "Symbol of Authority",
        ]
      },
      {
        name: "Inquisitorial Sage",
        description: "You are a bureaucratic savant, an expert at sourcing and judiciously applying knowledge to serve the Imperium and your own ends.",
        faction: "The Inquisition",
        tier: 1,
        cost: 16,
        bonuses: {
          attributes: [
            {
              name: "Intellect",
              value: 3
            },
          ],
          skills: [
            {
              name: "Scholar",
              value: 2
            },
          ],
          keywords: ["ADEPTUS ADMINISTRATUM"],
          influence: 1,
        },
        abilities: [
          {
            name: "Administratum Records",
            description: "You are particularly adept at navigating the Imperium???s colossal bureaucracy. You gain +Rank bonus dice whenever you make a Test to gather information from Imperial sources, typically on Influence or Investigation (Int) tests."
          }
        ],
        wargear: [
          "Administratum Robes",
          "Laspistol",
          "Knife",
          "Auto Quill",
          "Data-Slate",
          "3 Scrolls of Ancient Records",
        ]
      },
      {
        name: "Rogue Trader",
        description: "Gifted the rare freedom to explore the stars, you explore, trade, pillage, and conquer to expand the Imperium.",
        faction: "Rogue Trader Dynasties",
        tier: 2,
        cost: 36,
        bonuses: {
          attributes: [
            {
              name: "Fellowship",
              value: 3
            },
          ],
          skills: [
            {
              name: "Awareness",
              value: 1,
            },
            {
              name: "Cunning",
              value: 1,
            },
            {
              name: "Insight",
              value: 2,
            },
            {
              name: "Persuasion",
              value: 2,
            },
          ],
          influence: 2,
        },
        abilities: [
          {
            name: "Warrant of Trade",
            description: "You are a master of manipulating a situation to your advantage. You gain +Rank bonus dice to all Persuasion (Fel) Tests and Influence tests to acquire goods and services."
          }
        ],
        wargear: [
          "Imperial Frigate",
          "Any two pieces of Wargear with a Value of your Tier +4 or less, and a Rarity of Rare or lower",
          "Any of the following options: Flak Coat or Carapace Armour or Light Power Armour",
        ]
      },
      {
        name: "Ganger",
        description: "A member of the Imperial underclass, your life is rife with violence and hardship. Your identity is tied to a territorial gang, a brutal reflection of lower hive life.",
        faction: "Scum",
        tier: 1,
        cost: 2,
        bonuses: {
          skills: [
            {
              name: "Cunning",
              value: 1,
            },
          ],
          influence: 1,
        },
        abilities: [
          {
            name: "Scrounger",
            description: "Your life with less has made you adept at finding spares and supplies in the most unlikely of places. You gain +Rank bonus dice to Cunning (Fel) Tests. Once per session you may make an Influence or Cunning Test to acquire an item, representing something you have prepared in advance."
          }
        ],
        wargear: [
          "A Knife or a Sword",
          "Bedrool",
          "Canteen",
          "Gang colours",
          "Any one of the following: a Laspistol or an Autopistol or a Hand Cannon or a Stubber"
        ]
      },
      {
        name: "Scavvy",
        description: "You are a survivor of the worst conditions of Imperial society, moulded by horrendous environments into a purposeful, determined mutant.",
        faction: "Scum",
        tier: 2,
        cost: 16,
        bonuses: {
          attributes: [
            {
              name: "Toughness",
              value: 2,
            }
          ],
          skills: [
            {
              name: "Survival",
              value: 1,
            },
          ],
          influence: -1,
        },
        abilities: [
          {
            name: "Mutant",
            description: "Your life in the unsanitary underbelly of the Imperium has mutated you. Select two Mutations from the list of Scavvy Mutations on p.287. Whenever your Rank increases, you may select another Mutation from the list."
          }
        ],
        wargear: [
          "Choice of Laspistol or Autopistol",
          "Knife",
          "Bedroll",
          "Canteen",
          "Tattered Clothes"
        ]
      },
      {
        name: "Desperado",
        description: "A lone outlaw beyond the Imperium's control, you are a skilled mercenary free of the constraints of Faction and family.",
        faction: "Scum",
        tier: 3,
        cost: 52,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 3,
            },
            {
              name: "Intellect",
              value: 2,
            }
          ],
          skills: [
            {
              name: "Awareness",
              value: 2,
            },
            {
              name: "Cunning",
              value: 2,
            },
            {
              name: "Investigation",
              value: 2,
            },
          ],
          influence: 1,
        },
        abilities: [
          {
            name: "Valuable Prey",
            description: "You gain +Rank bonus dice on Cunning Tests, and any Test made to track an individual."
          }
        ],
        wargear: [
          "Flak Coat",
          "Preysense Goggles",
          "Maps of the Heartworld",
          "Combi-Tool",
          "any PROJECTILE weapon",
          "any melee weapon of Uncommon or lower Rarity",
        ]
      },
      {
        name: "Cultist",
        description: "Hiding blasphemous brands and tattoos, myriad Chaos cults work from inside the Imperium to bring down the Emperor's people. Criminals hamstring Imperial efforts and steal crucial supplies whilst dark apostles sway other true believers to their villainous cause, spiraling toward revolt.",
        faction: "Chaos",
        tier: 1,
        cost: 2,
        bonuses: {
          skills: [
            {
              name: "Cunning",
              value: 1,
            },
          ],
          keywords: ["SCUM", "[ANY]", "[MARK OF CHAOS]"],
        },
        abilities: [
          {
            name: "Enemy Within",
            description: "You gain +Double Rank bonus dice to Deception (Fel) Tests, including Interaction Attacks, against targets with the IMPERIUM Keyword."
          },
          {
            name: "Corruption",
            description: "You gain 1d3 corruption.",
          }
        ],
        wargear: [
          "A Knife or a Sword",
          "Bedrool",
          "Canteen",
          "Gang colours",
          "Any one of the following: a Laspistol or an Autopistol or a Hand Cannon or a Stubber"
        ]
      },
      {
        name: "Rogue Psyker",
        description: "Psykers that escape the tithes of the Black Ships are known as Rogue Psykers; untrained and vulnerable to the powers of Chaos, they may begin to worship the Dark Gods in exchange for the greater powers needed to avoid their pursuers and claim their newfound desires.",
        faction: "Chaos",
        tier: 2,
        cost: 32,
        bonuses: {
          attributes: [
            {
              name: "Willpower",
              value: 4,
            }
          ],
          skills: [
            {
              name: "Psychic Mastery",
              value: 1,
            },
          ],
          keywords: ["PSYKER", "SCHOLASTICA PSYKANA"],
        },
        abilities: [
          {
            name: "Psyker",
            description: "You know 1 Minor Psychic Power and the Smite psychic power. You may purchase additional psychic powers, following the rules in Chapter 11."
          },
          {
            name: "Unlock Disciplines",
            description: "You gain access to the Minor and Universal disciplines. You unlock an additional single Psychic Discipline, following the rules in Chapter 11."
          },
          {
            name: "Corruption",
            description: "You gain 1d3 x2 corruption.",
          }
        ],
        wargear: [
          "Laspistol",
          "Force Stave",
          "Psykana Mercy Blade",
          "Munitorum-Issue Mess Kit",
          "Blanket",
          "Grooming Kit",
          "2 Ration Packs",
        ]
      },
      {
        name: "Heretek",
        description: "Students of the Adeptus Mechanicus that circumvent their strictures are known as Hereteks. These fallen Tech-Priests imbue machines with daemonic energies and dabble in other blasphemous lore in their craving for debased knowledge and power.",
        faction: "Chaos",
        tier: 3,
        cost: 44,
        bonuses: {
          attributes: [
            {
              name: "Intellect",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Scholar",
              value: 1,
            },
            {
              name: "Tech",
              value: 3,
            },
          ],
          keywords: ["IMPERIUM", "ADEPTUS MECHANICUS", "CULT MECHANICUS", "[FORGE WORLD]", "DARK MECHANICUS"],
        },
        abilities: [
          {
            name: "Rite of Repair",
            description: "You receive +Double Rank to Tech (Int) Tests to repair damaged machinery. All Tech (Int) Tests you make take half the standard time."
          },
          {
            name: "Corruption",
            description: "You gain 1d3 x3 corruption.",
          }
        ],
        influence: 2,
        wargear: [
          "Omnissian Axe",
          "Laspistol",
          "One Mechadendrite",
          "Any 2 Augmetics",
          "Combi-Tool",
          "Light Power Armour",
          "Omnissian Sigil (Symbol of Authority)"
        ]
      },
      {
        name: "Corsair",
        description: "A space pirate, a self-imposed exile of your Species, you raid and fight for coin, and to experience the full spectrum of sensation and emotion.",
        faction: "Asuryani",
        tier: 1,
        cost: 6,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Athletics",
              value: 2,
            },
          ],
          keywords: ["ANHRATHE", "[COTERIE]"]
        },
        abilities: [
          {
            name: "Dancing the Blade's Edge",
            description: "You throw yourself into danger with reckless abandon to hide your ancestral fears. You gain +Rank bonus dice whenever you make or resist an Athletics (S) or Persuasion (Fel) Attack. You suffer a +1 DN penalty to Fear Tests."
          },
        ],
        wargear: [
          "Corsair Armour",
          "Shuriken Pistol",
          "Lasblaster",
          "Spirit Stone",
          "3 Plasma Grenades",
          "Void Suit"
        ]
      },
      {
        name: "Ranger",
        description: "Embracing the path of the Outcast, you stealthily travel the galaxy in search of new experiences, eliminating threats to your Craftworld from afar.",
        faction: "Asuryani",
        tier: 2,
        cost: 24,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Ballistic Skill",
              value: 2,
            },
            {
              name: "Stealth",
              value: 1,
            },
            {
              name: "Survival",
              value: 2,
            },
          ],
          keywords: ["ASURYANI"]
        },
        abilities: [
          {
            name: "From the Shadows",
            description: "You are adept at exploiting any form of concealment. Whenever a Vision Penalty (p.191) or Cover (p.181) impose a penalty on someone trying to attack or detect you, the penalty is increased by +Rank DN."
          },
        ],
        wargear: [
          "Cameleoline Cloak",
          "Aeldari Mesh Armour",
          "Ranger Long Rifle",
          "Shuriken Pistol",
          "Knife",
          "Spirit Stone",
          "Bedroll",
          "Blanket",
          "Magnocular Scope"
        ]
      },
      {
        name: "Warlock",
        description: "Harnessing eldritch power and aspect warrior training, you are an aggressive battle Psyker driven to war.",
        faction: "Asuryani",
        tier: 3,
        cost: 24,
        bonuses: {
          attributes: [
            {
              name: "Agility",
              value: 3,
            },
            {
              name: "Willpower",
              value: 4,
            }
          ],
          skills: [
            {
              name: "Psychic Mastery",
              value: 2,
            },
          ],
          keywords: ["ASURYANI", "PSYKER", "[CRAFTWORLD]"],
          influence: 2,
        },
        abilities: [
          {
            name: "Runes of Battle",
            description: "You are a Psyker; you know the Smite psyhcic power, a single Runes of Battle psychic power and may learn other powers as described in Chapter 11."
          },
          {
            name: "Unlock Disciplines",
            description: "You gain access to the Minor, Universal, Divination and Runes of Battle Disciplines. You also gain access to on additional Discipline. See Chapter 11 for details."
          }
        ],
        wargear: [
          "Rune Armour",
          "Shuriken Pistol",
          "Witchblade",
          "A set of Wraithbone Runes",
          "Spirit Stone"
        ]
      },
      {
        name: "Boy",
        description: "A hulking, brutish creature who lives only to fight. You are a loutish, anarchic bruiser born for battle.",
        faction: "Ork",
        tier: 1,
        cost: 6,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3,
            },
            {
              name: "Toughness",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Weapon Skill",
              value: 2,
            },
          ],
        },
        abilities: [
          {
            name: "Get Stuck In",
            description: "You gain +Rank bonus dice to melee attacks for every ally engaged with the same target as you.",
          },
        ],
        wargear: [
          "Shoota",
          "Slugga",
          "Choppa",
          "Ripped Clothes",
        ]
      },
      {
        name: "Kommando",
        description: "An extraordinary example of your Species, you employ cunning, stealth, and self-discipline to accomplish acts of underhanded brutality.",
        faction: "Ork",
        tier: 2,
        cost: 34,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 3,
            },
            {
              name: "Toughness",
              value: 3,
            },
            {
              name: "Agility",
              value: 3,
            }
          ],
          skills: [
            {
              name: "Stealth",
              value: 2,
            },
            {
              name: "Survival",
              value: 1,
            },
            {
              name: "Weapon Skill",
              value: 2,
            },
          ],
        },
        abilities: [
          {
            name: "Kunnin' Plan",
            description: "You and any of your allies with the ORK within 15 metres gain +Rank bonus dice to Stealth (A) Tests."
          },
        ],
        wargear: [
          "Shoota",
          "Slugga",
          "Choppa",
          "3 Stikkbombs",
          "Survival Kit",
        ]
      },
      {
        name: "Nob",
        description: "Larger and stronger than most Orks, your uncanny size and brawn earn a natural place violently ruling over other Boyz.",
        faction: "Ork",
        tier: 3,
        cost: 36,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 4,
            },
            {
              name: "Toughness",
              value: 3,
            },
          ],
          skills: [
            {
              name: "Intimidation",
              value: 2,
            },
          ],
        },
        abilities: [
          {
            name: "The Green Tide",
            description: "You command a mob of Boyz (p.354) equal to your Rank x3. If any of your Boyz die, they can be replaced between sessions at the GMs discretion."
          },
        ],
        influence: 2,
        wargear: [
          "'Eavy Armour",
          "Kustom Slugga",
          "Kustom Choppa",
          "3 Stikkbombs",
          "Survival Kit",
        ]
      },
      {
        name: "Space Marine Scout",
        description: "Genetically enhanced beyond Human limits, you are an initiate warrior of the Adeptus Astartes deployed to make swify, stealthy strikes.",
        faction: "Adeptus Astartes",
        tier: 2,
        cost: 10,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 4,
            },
            {
              name: "Toughness",
              value: 4,
            },
            {
              name: "Agility",
              value: 4,
            },
            {
              name: "Initiative",
              value: 4,
            },
            {
              name: "Willpower",
              value: 3,
            },
            {
              name: "Intellect",
              value: 3,
            },
          ],
          skills: [
            {
              name: "Athletics",
              value: 3,
            },
            {
              name: "Awareness",
              value: 3,
            },
            {
              name: "Ballistic Skill",
              value: 3,
            },
            {
              name: "Stealth",
              value: 3,
            },
            {
              name: "Weapon Skill",
              value: 3,
            },
          ],
        },
        abilities: [
          {
            name: "Use the Terrain",
            description: "You gain +Rank to any Stealth (A) Test when there is some form of terrain to hide behind."
          },
        ],
        influence: 1,
        wargear: [
          "Scout Armour",
          "Astartes Combat Knife",
          "3 Frag Grenades",
          "Vox Bead",
          "Choose any of the following options: A Boltgun or a Bolt Pistol and a Chainsword or An Astartes Shotgun or an Astartes Sniper RIfle and a Cameleoline Cloak",
        ]
      },
      {
        name: "Tactical Space Marine",
        description: "A genetically enhanced super soldier beyond a mortal Human in every way, clad in armour and deployed to destroy the Imperium's enemies.",
        faction: "Adeptus Astartes",
        tier: 3,
        cost: 92,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 5,
            },
            {
              name: "Toughness",
              value: 5,
            },
            {
              name: "Agility",
              value: 5,
            },
            {
              name: "Initiative",
              value: 5,
            },
            {
              name: "Willpower",
              value: 3,
            },
            {
              name: "Intellect",
              value: 3,
            },
          ],
          skills: [
            {
              name: "Athletics",
              value: 3,
            },
            {
              name: "Awareness",
              value: 3,
            },
            {
              name: "Ballistic Skill",
              value: 5,
            },
            {
              name: "Leadership",
              value: 1,
            },
            {
              name: "Scholar",
              value: 1,
            },
            {
              name: "Stealth",
              value: 3,
            },
            {
              name: "Survival",
              value: 1,
            },
            {
              name: "Weapon Skill",
              value: 4,
            },
          ],
        },
        abilities: [
          {
            name: "Tactical Versatility",
            description: "Your training has prepared you for any circumstance. When you make a Critical Hit you may roll twice on the Critical Hit Table and choose either result.",
          },
        ],
        influence: 2,
        wargear: [
          "Aquila Mk VII Power Armour",
          "Boltgun",
          "Bolt Pistol",
          "Astartes Combat Knife",
          "3 Frag Grenades",
          "3 Krak Grenades",
        ]
      },
      {
        name: "Chaos Space Marine",
        description: "Nine Legions of the Emperor's Space Marines revolted during the Horus Heresy, corrupted by the Ruinous Powers. Though they retain their powerful Wargear and implants, the malign influence of the Warp mutates them to even greater power.",
        faction: "Heretic Astartes",
        tier: 3,
        cost: 92,
        bonuses: {
          attributes: [
            {
              name: "Strength",
              value: 4,
            },
            {
              name: "Toughness",
              value: 5,
            },
            {
              name: "Agility",
              value: 5,
            },
            {
              name: "Initiative",
              value: 5,
            },
            {
              name: "Willpower",
              value: 3,
            },
            {
              name: "Intellect",
              value: 3,
            },
          ],
          skills: [
            {
              name: "Athletics",
              value: 3,
            },
            {
              name: "Awareness",
              value: 3,
            },
            {
              name: "Ballistic Skill",
              value: 5,
            },
            {
              name: "Leadership",
              value: 1,
            },
            {
              name: "Scholar",
              value: 1,
            },
            {
              name: "Stealth",
              value: 3,
            },
            {
              name: "Survival",
              value: 1,
            },
            {
              name: "Weapon Skill",
              value: 4,
            },
          ],
        },
        abilities: [
          {
            name: "Tactical Versatility",
            description: "Your training has prepared you for any circumstance. When you make a Critical Hit you may roll twice on the Critical Hit Table and choose either result.",
          },
          {
            name: "Corruption",
            description: "You gain 1d3 x3 corruption."
          },
        ],
        influence: 2,
        wargear: [
          "Aquila Mk VII Power Armour",
          "Boltgun",
          "Bolt Pistol",
          "Astartes Combat Knife",
          "3 Frag Grenades",
          "3 Krak Grenades",
        ]
      },
    ]
    return {heroes, species, factions, archetypes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id!)) + 1 : 1;
  }
}