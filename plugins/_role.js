let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Soldier V'
      : ((user.level >= 3) && (user.level <= 6)) ? 'Soldier IV'
      : ((user.level >= 6) && (user.level <= 9)) ? 'Soldier III'
      : ((user.level >= 9) && (user.level <= 12)) ? 'Soldier II'
      : ((user.level >= 12) && (user.level <= 15)) ? 'Soldier I'
      : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'
      : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'
      : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'
      : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'
      : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'
      : ((user.level >= 30) && (user.level <= 33)) ? 'Master V'
      : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'
      : ((user.level >= 36) && (user.level <= 39)) ? 'Master III'
      : ((user.level >= 39) && (user.level <= 42)) ? 'Master II'
      : ((user.level >= 42) && (user.level <= 45)) ? 'Master I'
      : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V'
      : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV'
      : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III'
      : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II'
      : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I'
      : ((user.level >= 60) && (user.level <= 63)) ? 'Epic V'
      : ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV'
      : ((user.level >= 66) && (user.level <= 69)) ? 'Epic III'
      : ((user.level >= 69) && (user.level <= 71)) ? 'Epic II'
      : ((user.level >= 71) && (user.level <= 74)) ? 'Epic I'
      : ((user.level >= 74) && (user.level <= 77)) ? 'Legend V'
      : ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV'
      : ((user.level >= 80) && (user.level <= 83)) ? 'Legend III'
      : ((user.level >= 83) && (user.level <= 86)) ? 'Legend II'
      : ((user.level >= 86) && (user.level <= 89)) ? 'Legend I'
      : ((user.level >= 89) && (user.level <= 91)) ? 'Mítico V'
      : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'
      : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'
      : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'
      : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      
      : ((user.level >= 105) && (user.level <= 120)) ? 'Mythic Glory'
      : ((user.level >= 120) && (user.level <= 150)) ? 'Emerald V'
      : ((user.level >= 150) && (user.level <= 160)) ? 'Emerald VI'
      : ((user.level >= 160) && (user.level <= 170)) ? 'Emerald III'
      : ((user.level >= 170) && (user.level <= 185)) ? 'Emerald II'
      : ((user.level >= 185) && (user.level <= 200)) ? 'Emerald I'
      : ((user.level >= 200) && (user.level <= 400)) ? 'Titan III'
      : ((user.level >= 405) && (user.level <= 700)) ? 'Titan II'
      : ((user.level >= 700) && (user.level <= 1000)) ? 'Titan I'
      : 'High Master'

    user.role = role
    return true
}

export default handler