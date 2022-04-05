import {Command} from "commander";
import {spotifyLogin} from "../services/spotify/login.js";

const cli = new Command()

cli.name("spotify-cli-sort")
    .description("CLI to sort your Spotify playlist")

cli.command("login")
    .description("Login to Spotify")
    .argument("Email", "Your email")
    .argument("Password", "Your password")
    .action((str, options) => {
        spotifyLogin()
    })

cli.command("sort")
    .description("Sort ASC or DESC your Spotify playlist")
    .argument("URL Spotify playlist", "Link of your playlist you want to sort")
    .option("-a --ASC", "ASC sorting")
    .option("-d --DESC", "DESC sorting")

cli.parse()

if (!cli.args.length) cli.help();


export default cli
