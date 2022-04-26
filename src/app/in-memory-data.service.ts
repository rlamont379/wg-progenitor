import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Faction } from './faction';
import { Archetype } from './archetype';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Mr. Nice',
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

        strRating: 5,
        strBonus: 0,
        strTotal: 5,
        toughRating: 5,
        toughBonus: 0,
        toughTotal: 5,
        agiRating: 4,
        agiBonus: 0,
        agiTotal: 4,
        initRating: 4,
        initBonus: 0,
        initTotal: 4,
        wilRating: 3,
        wilBonus: 0,
        wilTotal: 3,
        intRating: 3,
        intBonus: 0,
        intTotal: 3,
        felRating: 1,
        felBonus: 0,
        felTotal: 1,

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
      },
      { id: 2, name: 'Narco' },
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
        description: "Ancient and inscrutable, the Aeldari are an innately psychic Species whose technologically-advanced empire once spanned the stars. Taller and slighter than Humans, their undeniably alien appearance is compounded by their eerily elegant movements. Though they have life spans millennia longer than Humans, their Species is dying and close to extinction — a pain they feel acutely with their unnaturally deep emotions.",
        speed: 8,
        bonuses: {
          attributes:[
            {
              name: "Agilility",
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
        description: "A clandestine organisation duty bound to secretly police the Imperium, protecting it from internal and external threats. The Inquisition fight the war for the soul of Humanity, eradicating heresy, mutation, witchcraft, and daemons. They are empowered to take whatever measures they deem fit to expose and destroy these threats, lest they infect and corrupt Humanity, dragging it to sin and suffering. In this most demanding of duties, battling the most insidious of foes, they are given unbound authority. The agents of the Inquisition investigate all other Factions of the Imperium — none are beyond their jurisdiction, even other Inquisitors.",
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
        description: "Those that do not directly serve the Imperium — citizens without assigned jobs, mercenaries, or, worst of all, those that call themselves 'adventurers' — are barely tolerated, and collectively classed as Scum. A broad, colloquially used term, 'Scum' could apply to a peasant citizen employed in a low-level or menial job outside of an adepta; planetary nobility often refer to anyone under them as Scum.",
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
        name: "Aeldari",
        description: "Ancient and inscrutable, the Aeldari are an innately psychic Species whose technologically-advanced empire once spanned the stars. Taller and slighter than Humans, their undeniably alien appearance is compounded by their eerily elegant movements. Though they have life spans millennia longer than Humans, their Species is dying and close to extinction — a pain they feel acutely with their unnaturally deep emotions.",
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
        name: "Chaos",
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
    ]
    return {heroes, species, factions};
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