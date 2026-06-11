import deathEater from '../assets/images/death-eater-icon.png'
import orderPhoenix from '../assets/images/order-phoenix-icon.png'

const badgeMap = {
    'death-eater-icon.png': deathEater,
    'order-phoenix-icon.png': orderPhoenix,
}

export function getBadgeUrl(filename) {
    return badgeMap[filename]
}
