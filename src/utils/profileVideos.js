import witch1 from '../assets/videos/profile/witch-1.mp4'
import witch2 from '../assets/videos/profile/witch-2.mp4'
import witch3 from '../assets/videos/profile/witch-3.mp4'
import witch4 from '../assets/videos/profile/witch-4.mp4'

import wizard1 from '../assets/videos/profile/wizard-1.mp4'
import wizard2 from '../assets/videos/profile/wizard-2.mp4'
import wizard3 from '../assets/videos/profile/wizard-3.mp4'
import wizard4 from '../assets/videos/profile/wizard-4.mp4'

import nonbinary1 from '../assets/videos/profile/nonbinary-1.mp4'

const videoMap = {
    'witch-1': witch1,
    'witch-2': witch2,
    'witch-3': witch3,
    'witch-4': witch4,
    'wizard-1': wizard1,
    'wizard-2': wizard2,
    'wizard-3': wizard3,
    'wizard-4': wizard4,
    'nonbinary-1': nonbinary1

}

const videosByGender = {
    female: ['witch-1', 'witch-2', 'witch-3', 'witch-4'],
    male: ['wizard-1', 'wizard-2', 'wizard-3', 'wizard-4'],
    nonbinary: ['nonbinary-1']
}

export function getVideoUrl(key) {
    return videoMap[key]
}

export function getRandomVideoKey(gender) {
    const pool = videosByGender[gender]
    const randomIndex = Math.floor(Math.random() * pool.length)
    return pool[randomIndex]
}