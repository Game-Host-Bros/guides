---
title: Quake Live Install Plugins
description: Learn how to install plugins your Quake Live server using MinQLX.
sidebar:
  label: Install Plugins
---

In this guide you will learn how to install plugins on your Quake Live server using MinQLX.

## Installing MinQLX

MinQLX is the framework that allows plugins to interface with Quake Live. By default, we have MinQLX installed on every instance. It simply needs to be toggled on.

1. Load the [Game Host Bros Panel](https://panel.gamehostbros.com/).
2. Select your server.
3. In the left-hand menu, click `Configuration > Startup Parameters`.
4. Look for `MinQLX` and toggle it on.
5. Restart your Quake Live server.

You can toggle this off at any time if you need to revert back to the Vanilla QL version for any reason.

## Installing Plugins

We have some CounterStrikeSharp plugins already added to our 1-click Mod Manager.

1. Load the [Game Host Bros Panel](https://panel.gamehostbros.com/).
2. Select your server.
3. In the left-hand menu, click `Management > File Manager`.
4. Open the `minqlx-plugins` folder.
5. Drag your plugin .py file inside.
6. In the left-hand menu, click `Configuration > Startup Parameters`.
7. Look for MinQLX Plugins and add your plugin name to the end of the list.
8. Restart your server.

Please make sure to follow the instructions for each plugin as some need extra dependencies added to `minqlx-plugins/requirements.txt`. This file is checked every time your server is started with the MinQLX mod enabled.

## Quake Live Plugins List

Below is a list of all the current Quake Live plugins you can manually install on your server.

There are some other resources you can get plugins from here:
- https://github.com/MinoMino/minqlx/wiki/Useful-Plugins
- https://github.com/MinoMino/minqlx-plugins

| Name | Description | Author |
| ---- | :---------: | :----- |
[`afk`](https://github.com/dsverdlo/minqlx-plugins/blob/master/afk.py)|Detect AFK people and place them in spectator (after a warning).|iouonegirl
[`aliases`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/aliases.py)|Display a list of names a player has played under on the current server.|tjone270
[`auto_rebalance`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/auto_rebalance.py)|Extension to the balance plugin that automatically rebalances two new joiners for better team averages, and invokes !teams at round end if one team is currently dominating|ShiN0
[`autoready`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/autoready.py)|automatically ready up the game after a configurable time has passed with some centerprinted announcement once a certain amount of minimum players on the server has been reached.|ShiN0
[`autorestart`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/autorestart.py)|Automatically restart a server at a certain time if no-one's connected.|tjone270
[`autospec`](https://github.com/dsverdlo/minqlx-plugins/blob/master/autospec.py)|Detects uneven teams and places person who joined last in spec.|iouonegirl
[`banvote`](https://github.com/cstewart90/minqlx-plugins/blob/master/banvote.py)|Ban players from voting|kanzo
[`bot_antispec`](https://github.com/roasticle/minqlx-plugins/blob/master/bot_antispec.py)|fixes bug with bot_minplayers and teamsizes lower than player limit that causes bots to spec (kicks them)|roast
[`botmanager`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/botmanager.py)|Useful bot management plugin, including bot map support checking, automatic evening of teams by adding a bot, bot add/remove commands/votes etc.|tjone270
[`branding`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/branding.py)|Brands your server with custom text at map loading screen/scoreboard.|tjone270
[`centerprint`](https://github.com/dsverdlo/minqlx-plugins/blob/master/centerprint.py)|Broadcast important messages on player's screens. Toggle a 'last enemy standing' message.|iouonegirl
[`changemap`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/changemap.py)|Changes the map when no-one's connected to the server.|tjone270
[`checkplayers`](https://github.com/cstewart90/minqlx-plugins/blob/master/checkplayers.py)|List all players with permission>=1, banned, leaver-banned, leaver-warned, and silenced players. Based on x0rnn's checkplayers but completely rewritten to use scan_iter and output as a table. Also fixes player disconnect on large output, irc flooding and other issues.|kanzo
[`coinprice`](https://github.com/x0rnn/minqlx-plugins/blob/master/coinprice.py)|Check bitcoin/ethereum/litecoin price (!btc, !eth, !ltc or !bitcoin, !ethereum, !litecoin).|x0rnn
[`commands`](https://github.com/BarelyMiSSeD/minqlx-plugins/blob/master/commands.py)|Lists minqlx commands available on the server.|BarelyMiSSeD
[`commlink`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/commlink.py)|Provides an inter-server communication system for a group of servers.|tjone270
[`crash`](https://github.com/roasticle/minqlx-plugins/blob/master/crash.py)| !crash for random crash noob intro sounds :D|roast
[`custom_votes`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/custom_votes.py)|Adds extra vote functionality to your servers.|tjone270
[`custom_modes_vote`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/custom_modes_vote.py)|Adds extra game modes like PQL to your servers.|ShiN0
[`disable_commands`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/disabled_commands.py)|Disable commands and display a message when a disabled command is run.|tjone270
[`disable_votes`](https://github.com/dsverdlo/minqlx-plugins/blob/master/disable_votes.py)|Disable votes during a match.|iouonegirl
[`discordbot`](https://github.com/roasticle/minqlx-plugins/blob/master/discordbot.py)|Output game stats, connect links to your Discord server. Can also optionally send game chat to Discord.|roast
[`duke`](https://github.com/roasticle/minqlx-plugins/blob/master/duke.py)|Duke Nukem sound triggers!|roast
[`dynamicip`](https://github.com/em92/dynamicip/blob/master/dynamicip.py)|Updates server ip in qlstats admin panel before game starts. Useful for servers with dynamic ip address.|eugene
[`elocheck`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/experimental/elocheck.py)|Checks the elos of a player against qlstats and lists their a- and b-elos respectively as well as looking for other connections form the same IPs|ShiN0
[`english`](https://github.com/x0rnn/minqlx-plugins/blob/master/english.py)|English motherf*cker, do you speak it? (also added "Denied!" from Q3 and stfu.wav)|x0rnn
[`fastvotes`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/fastvotes.py)|Speeds up vote pass/fail with various options, i.e. based upon a difference threshold between the pass or fail.|ShiN0
[`frag_stats`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/frag_stats.py)|Statistics of reaped soulz and reaper of your soulz per map as well as overall|ShiN0
[`funlimit`](https://github.com/dsverdlo/minqlx-plugins/blob/master/funlimit.py)|Automatically disables fun(.py) sounds during a match/rounds.|iouonegirl
[`funstuff`](https://raw.githubusercontent.com/roasticle/minqlx-plugins/master/funstuff.py)| various fun vote functions - includes slaphappy, hulk, gay, rename, purgatory and kill|roast
[`gauntonly`](https://github.com/dsverdlo/minqlx-plugins/blob/master/gauntonly.py)|If a CA round goes to 1vX, gauntlet-only mode is activated.|iouonegirl
[`gravityfixer`](https://github.com/roasticle/minqlx-plugins/blob/master/gravityfixer.py)|restores gravity to normal after maps with custom gravity|roast
[`gungames`](https://github.com/roasticle/minqlx-plugins/blob/master/gungames.py)|custom voting triggers for gungames factories|roast
[`handicap`](https://github.com/BarelyMiSSeD/minqlx-plugins/blob/master/handicap.py)|Adds auto handicaping of high level players to the server. Useful if you want to open up the server to everyone without getting destroyed.|BarelyMiSSeD
[`intermission`](https://github.com/dsverdlo/minqlx-plugins/blob/master/intermission.py)|Loops over a list of music, playing one every match end.|iouonegirl
[`intermissionplus`](https://raw.githubusercontent.com/roasticle/minqlx-plugins/master/intermissionplus.py)|Allow players to set custom victory songs (in addition to normal intermission functionality).|roast
[`ips`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/ips.py)|Display a list of IP addresses a player has connected with on the current server.|tjone270
[`kamikaze_clanarena`](https://github.com/em92/kamikaze-clanarena/blob/master/kamikaze_clanarena.py)|Enables kamikaze in clan arena gametype. See [details](https://github.com/em92/kamikaze-clanarena)|eugene
[`killingspree`](https://github.com/x0rnn/minqlx-plugins/blob/master/killingspree.py)|Unreal Tournament announcements for 5/10/15/20/25/30 kills in a row and multi(3)/mega(4)/ultra(5)/monster(6)/ludicrous(7)/holyshit(8) kills done in 3/4 second intervals|x0rnn
[`listmaps`](https://github.com/BarelyMiSSeD/minqlx-plugins/blob/master/listmaps.py)|Allows players to see a list of maps available on the server.|BarelyMiSSeD
[`map_config`](https://github.com/em92/ad_hacks/blob/master/minqlx-plugins/map_config.py)|Loads config file depending on running map|eugene
[`mapoo`](https://github.com/roasticle/minqlx-plugins/blob/master/mapoo.py)|allows multiple mappool files that change automatically based on player number|roast
[`midair`](https://github.com/x0rnn/minqlx-plugins/blob/master/midair.py)|Ranks rocket midair kills, "Holy shit" announcer on every midair frag that meets criteria.|x0rnn
[`midair_only`](https://github.com/x0rnn/minqlx-plugins/blob/master/midair_only.py)|As above, but changes the gameplay into a rockets-only mode where only midair rockets can kill.|x0rnn
[`motd`](https://github.com/roasticle/minqlx-plugins/blob/master/motd.py)|A replacement motd plugin that allows multiple motd/welcome sounds.|roast
[`mybalance`](https://github.com/dsverdlo/minqlx-plugins/blob/master/mybalance.py)|Adds ELO/GLICKO-restrictions and spec/slay options for uneven teams. Now works for all gametypes! Shows Ready-up reminders! Autoshuffle + balance option.|iouonegirl
[`myban`](https://github.com/dsverdlo/minqlx-plugins/blob/master/myban.py)|Allows you to ban players by name.|iouonegirl
[`mydiscordbot`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/mydiscordbot.py)|Discord integration that allows you to chat between discord and quake live players, with custom extensions supported.|ShiN0
[`myessentials`](https://github.com/dsverdlo/minqlx-plugins/blob/master/myessentials.py)|Allows to use names in commands like !kick, !red, !spec, ...|iouonegirl
[`myFun`](https://github.com/BarelyMiSSeD/minqlx-plugins/tree/master/myFun)|Play sounds from soundpacks on your server. Replaces fun.py with more features and sounds (can enable/disable chosen soundpacks).|BarelyMiSSeD
[`nextmap`](https://github.com/roasticle/minqlx-plugins/blob/master/nextmap.py)|Announce nextmap and fix nextmap repeats.|roast
[`nospec`](https://github.com/admafi/Quake-Live-Teamrace/blob/master/minqlx-plugins/nospec.py)|Prevent's people with no permissions from spectating while the match is running.|admafi
[`onjoin`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/onjoin.py)|Displays a saved message from a player when they connect to a server.|tjone270
[`permaban`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/permaban.py)|Permanently bans players thoroughly, cross-referencing Steam IDs over IPs.|tjone270
[`player_info`](https://github.com/dsverdlo/minqlx-plugins/blob/master/player_info.py)|Displays info about players (optional upon connect). Show stats of people 'below' the scoreboard in large matches. Warn/ban players with deactivated qlstats accounts.|iouonegirl
[`protect`](https://github.com/BarelyMiSSeD/minqlx-plugins/blob/master/protect.py)|Protect players from being callvote kicked from the server and more.|BarelyMiSSeD
[`pummel`](https://github.com/mattiZed/minqlx-plugins/blob/master/pummel.py)|Adds a Player vs Player tally of successful gauntlet frags.|mattiZed
[`q3resolver`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/q3resolver.py)|Allows players to /cv map q3dm6/other Q3 map names, and resolves them to QL map names.|tjone270
[`qlstats_privacy_policy`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/qlstats_privacy_policy.py)|enforces players have set qlstats privacy policy settings before they are able to play.|ShiN0
[`queue`](https://github.com/Melodeiro/minqlx-plugins_mattiZed/blob/master/queue.py)|2.0 version adds a duel like queue-system to your servers.|Melodeiro
[`quiet`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/quiet.py)|Prevents players from using /say, /say_team or /tell during matches.|tjone270
[`ragespec`](https://github.com/roasticle/minqlx-plugins/blob/master/ragespec.py)|!ragespec to...ragespec!|roast
[`railable`](https://github.com/dsverdlo/minqlx-plugins/blob/master/railable.py)|Possibility to show a customizable message on your screen when your health drops below railable.|iouonegirl
[`ratinglimiter`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/ratinglimiter.py)|Prevents players with glicko above/below set limits from playing on the server.|tjone270
[`referee`](https://github.com/x0rnn/minqlx-plugins/blob/master/referee.py)|Gives referee status to somebody with the password, or one that has been voted referee.|x0rnn
[`scores`](https://github.com/x0rnn/minqlx-plugins/blob/master/scores.py)|Shows player/team info such as kills, deaths, damage given, damage received, elos, average team elo, etc. See: http://imgur.com/a/s2suj |x0rnn
[`servers`](https://github.com/cstewart90/minqlx-plugins/blob/master/servers.py)|Adds !servers command which shows status of servers.|kanzo
[`sets`](https://github.com/dsverdlo/minqlx-plugins/blob/master/sets.py)|Allows players to play some uninterupted duel sets (Bo3, Bo5, ...). Also informs connecting players a set is active.|iouonegirl
[`spec999`](https://github.com/x0rnn/minqlx-plugins/blob/master/spec999.py)|!spec999, move players with 999 ping to spectator mode.|x0rnn
[`specprotect`](https://github.com/dsverdlo/minqlx-plugins/blob/master/specprotect.py)|Protect spectators from receiving a kick callvote.|iouonegirl
[`specs`](https://github.com/x0rnn/minqlx-plugins/blob/master/specs.py)|!specs: list players spectating you; !specwho x: show who x is spectating; !specall: show who every spectator is spectating.|x0rnn
[`stats`](https://github.com/x0rnn/minqlx-plugins/blob/master/stats.py)|Show some simple kill stats: kills, deaths, k/d ratio, kills per minute.|x0rnn
[`sv_fps`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/sv_fps.py)|Allows you to set the game server frame-rate safely.|tjone270
[`thirtysecwarn`](https://github.com/mgaertne/minqlx-plugin-tests/blob/master/src/thirtysecwarn.py)|Issues a 30 second warning sound 30 seconds before round end, configurable for different voice styles.|ShiN0
[`titlerank`](https://github.com/x0rnn/minqlx-plugins/blob/master/titlerank.py)|Gives a player a title rank and is welcomed as such when the player joins the server.|x0rnn
[`translate`](https://github.com/dsverdlo/minqlx-plugins/blob/master/translate.py)|Translate words and sentences to other languages! Translate the last things someone said! Also looks up urban definitions.|iouonegirl
[`tts`](https://github.com/x0rnn/minqlx-plugins/blob/master/tts.py)|Primitive TTS (text-to-speech) system based on arpabet (https://en.wikipedia.org/wiki/Arpabet) |x0rnn
[`uberstats`](https://raw.githubusercontent.com/roasticle/minqlx-plugins/master/uberstats.py)|various stats/awards given during and end game|roast
[`uneventeams`](https://github.com/Melodeiro/minqlx-plugins_mattiZed/blob/master/uneventeams.py)|Punishes the player with the least amount of playtime on the bigger team. Works for all gametypes. For non-round based gametypes use with the queue.py plugin.|mattiZed
[`urltitle`](https://github.com/x0rnn/minqlx-plugins/blob/master/urltitle.py)|Prints the title of a website/youtube link, etc. posted in chat.|x0rnn
[`vote`](https://github.com/x0rnn/minqlx-plugins/blob/master/vote.py)|Adds some more callvotes, such as PQL/VQL, LG damage 6/7, etc. Tailored more for duel.|x0rnn
[`votemanager`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/votemanager.py)|Allow minqlx perm3 players to force a vote with a second press of F1/F2.|tjone270
[`votestats`](https://github.com/tjone270/Quake-Live/blob/master/minqlx-plugins/votestats.py)|Removes voter anonymity and displays useful map-changing messages for those who missed the vote.|tjone270
[`warn`](https://github.com/x0rnn/minqlx-plugins/blob/master/warn.py)|Warn a player for misbehaving. X strikes and you're out (banned)!|x0rnn
[`weaponspawnfixer`](https://github.com/roasticle/minqlx-plugins/blob/master/weaponspawnfixer.py)|override map-forced weapon spawn times|roast
[`weather`](https://github.com/roasticle/minqlx-plugins/blob/master/weather.py)|Check weather and forecast in-game!|roast
[`winneranthem`](https://github.com/roasticle/minqlx-plugins/blob/master/winneranthem.py)|Plays anthem for winner's country at end of match!|roast
