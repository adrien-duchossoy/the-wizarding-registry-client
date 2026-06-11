import { getRandomVideoKey } from './profileVideos'

function pick(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function pickInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// ─── WIZARD POOLS ─────────────────────────────────────────────────────────────

const firstNamesByGender = {
    male: [
        'Aldric', 'Corvus', 'Theron', 'Caius', 'Leander', 'Dorian',
        'Orion', 'Bastian', 'Caspian', 'Magnus', 'Lysander', 'Edric',
        'Florian', 'Alberic', 'Emeric', 'Casimir', 'Roderick', 'Alaric',
        'Sylvan', 'Peregrine'
    ],
    female: [
        'Seraphine', 'Isolde', 'Morrigan', 'Evangeline', 'Thessaly', 'Vivienne',
        'Calliope', 'Rosalind', 'Elowen', 'Araminta', 'Celestine', 'Vesper',
        'Isadora', 'Sable', 'Ophelia', 'Rowena', 'Astrid', 'Morgaine',
        'Elspeth', 'Thessaly'
    ],
    'non-binary': [
        'Ash', 'Riven', 'Sable', 'Lark', 'Vesper', 'Cael', 'Soleil',
        'Wren', 'Indigo', 'Zephyr', 'Rook', 'Ember', 'Onyx', 'Vale',
        'Corvin', 'Pax', 'Lumen', 'Briar', 'Seren', 'Cassius'
    ]
}

const lastNames = [
    'Blackwood', 'Ashveil', 'Duskmore', 'Grimshaw', 'Thornfield',
    'Ravenscar', 'Holloway', 'Nightshade', 'Coldwater', 'Vexmore',
    'Emberly', 'Crowstone', 'Ashford', 'Stormwick', 'Darkholme',
    'Silverthorn', 'Ironwood', 'Mossgrove', 'Whitlock', 'Greymere',
    'Foxglove', 'Dunmore', 'Briarwood', 'Fenwick', 'Shadwell'
]

const genders = ['male', 'female', 'non-binary']

const houses = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff']

const bloodStatuses = ['pure-blood', 'half-blood', 'muggle-born', 'muggle', 'squibs', 'half-breeds']

const patronuses = [
    'Stag', 'Doe', 'Otter', 'Jack Russell Terrier', 'Tabby Cat', 'Boar',
    'Hare', 'Fox', 'Wolf', 'Swan', 'Horse', 'Lynx', 'Weasel', 'Falcon',
    'Crow', 'Salamander', 'Adder', 'Mongoose', 'Dragonfly', 'Bat',
    'Raven', 'Bear', 'Dolphin', 'Firefly', 'Panther', 'Owl', 'Heron',
    'Ermine', 'Mink', 'Wild Boar'
]

const wandWoods = [
    'acacia', 'alder', 'apple', 'ash', 'aspen', 'beech', 'blackthorn',
    'black walnut', 'cedar', 'cherry', 'chestnut', 'cypress', 'dogwood',
    'ebony', 'elder', 'elm', 'english oak', 'fir', 'hawthorn', 'hazel',
    'holly', 'hornbeam', 'larch', 'laurel', 'vine', 'willow', 'yew'
]

const wandCores = [
    'dragon heartstring', 'unicorn hair', 'phoenix feather',
    'thestral tail hair', 'veela hair', 'kneazle whisker',
    'troll whisker', 'dittany stalk'
]

const specialties = [
    'dueling', 'curse casting', 'curse breaking', 'dark arts',
    'legilimency', 'occlumency', 'transfiguration', 'animagus',
    'healing magic', 'shield charms', 'divination', 'ancient runes',
    'arithmancy', 'magizoology', 'dragon taming', 'parseltongue',
    'necromancy', 'blood magic', 'wandless magic', 'nonverbal magic',
    'time magic', 'soul magic', 'potions', 'alchemy'
]

// ─── SOCIETY POOLS ────────────────────────────────────────────────────────────

const societyNames = [
    'The Ashen Circle', 'Order of the Veil', 'The Hollow Crown',
    'Covenant of Embers', 'The Pale Assembly', 'Rite of the Black Moon',
    'The Thornbound', 'Society of Unwritten Law', 'The Watcher\'s Lodge',
    'Brotherhood of the Fracture', 'The Fading Quill', 'Circle of the Last Word',
    'The Obsidian Accord', 'Keepers of the Rift', 'The Silentborn'
]

const societyDescriptions = [
    'A secretive society devoted to the study of forbidden transformation magic.',
    'An ancient order sworn to prevent the use of soul-binding curses.',
    'A loose alliance of dark practitioners operating beyond Ministry oversight.',
    'Scholars dedicated to recovering lost branches of pre-Hogwarts wizardry.',
    'A radical faction convinced that magical blood hierarchy must be abolished.',
    'Former Aurors who now operate outside the bounds of the Ministry.',
    'A clandestine network of curse-breakers trading in dangerous knowledge.',
    'Idealists seeking to expose corruption within the Ministry of Magic.',
    'An underground society performing rituals believed to contact the dead.',
    'A guild of wandmakers preserving techniques outlawed in the 17th century.',
]

const dangerLevels = ['harmless', 'monitored', 'extreme-danger', 'banned']

// ─── EXPORTS ──────────────────────────────────────────────────────────────────

export function getRandomWizardValue(fieldName, gender) {
    switch (fieldName) {
        case 'firstName': return pick(firstNamesByGender[gender] || firstNamesByGender['non-binary'])
        case 'lastName': return pick(lastNames)
        case 'gender': return pick(genders)
        case 'house': return pick(houses)
        case 'bloodStatus': return pick(bloodStatuses)
        case 'patronus': return pick(patronuses)
        case 'wand.wood': return pick(wandWoods)
        case 'wand.core': return pick(wandCores)
        case 'wand.lengthInches': return pickInt(9, 15)
        case 'specialty': return pick(specialties)
        default: return null
    }
}

export function getRandomWizardData() {
    const gender = pick(genders)
    return {
        firstName: pick(firstNamesByGender[gender]),
        lastName: pick(lastNames),
        gender,
        house: pick(houses),
        bloodStatus: pick(bloodStatuses),
        patronus: pick(patronuses),
        wand: {
            wood: pick(wandWoods),
            core: pick(wandCores),
            lengthInches: pickInt(9, 15),
        },
        specialty: pick(specialties),
        avatar: getRandomVideoKey(gender),
    }
}

export function getRandomSocietyValue(fieldName) {
    switch (fieldName) {
        case 'name': return pick(societyNames)
        case 'description': return pick(societyDescriptions)
        case 'dangerLevel': return pick(dangerLevels)
        default: return null
    }
}

export function getRandomSocietyData() {
    return {
        name: pick(societyNames),
        description: pick(societyDescriptions),
        dangerLevel: pick(dangerLevels),
    }
}
