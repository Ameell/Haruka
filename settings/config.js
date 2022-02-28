const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="Mellya"
global.ownernumber = "6283800105747"
global.botname = "MellyaBOT"
global.thumbnail = fs.readFileSync("./settings/Haruka.jpg")
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'RIFQIBOTZ'
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
