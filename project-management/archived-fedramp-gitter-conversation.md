John Flores @floresj Jun 14 2016 09:02
Testing

Bryan Allred @bmallred Jun 14 2016 09:03
yo

John Flores @floresj Jun 14 2016 09:03
This message was deleted

Paul @pjsumm Jun 14 2016 09:54
This is a test

Bryan Allred @bmallred Jun 14 2016 09:55
Got it

Paul @pjsumm Jun 14 2016 09:55
cool

John Flores @floresj Jun 14 2016 09:55
This message was deleted

Paul @pjsumm Jun 14 2016 09:58
we can start populating the backlog with development start up tasks

John Flores @floresj Jun 14 2016 09:59
@pjsumm Bueno

Bryan Allred @bmallred Jun 14 2016 09:59
guess the meeting was 86'd?
hangout?

John Flores @floresj Jun 14 2016 10:01
Si

John Flores @floresj Jun 14 2016 10:39
Testing

Bryan Allred @bmallred Jun 14 2016 13:27
http://truetandem.github.io/fedramp-dashboard/
need an index.html but the sync'n is working

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 14:18
Added some user stories to the backlog. Joe will be adding more as he flushes out personas.

John Flores @floresj Jun 14 2016 14:28
Awesome

Bryan Allred @bmallred Jun 14 2016 14:30
hey jay!
cool sounds good
we've just been doing the boring setup tasks

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:01
Added more user stories based on the feedback in the "Summary of Workshop FedRAMP Information" document that FedRAMP gave to us last week.

Bryan Allred @bmallred Jun 14 2016 15:04
so tomorrow we'll be going through and grooming this list right?
seeing which ones we tackle first, refining req's, etc

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:07
We only have 15 minutes tomorrow to cover Personas, Interview Plan, and User Stories. May not be enough time.

Bryan Allred @bmallred Jun 14 2016 15:07
haha yeah most likely not

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:07
We will also be learning a lot more tomorrow about their process so User Stories will evolve and change.
Maybe we touch on them quickly tomorrow and show them progress, add more after we learn tomorrow ,then groom at a later date?

Bryan Allred @bmallred Jun 14 2016 15:09
sounds good

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:09
Joe and I are flexible to however you guys want to run it.
Right now they are just dumped in, do you guys want us to set up tags for each Persona and start associating Stories with them?

Bryan Allred @bmallred Jun 14 2016 15:21
i have an engagement to go to so may day ends at 1600 today... is that enough time?
i have no problem tackling this over fresh coffee in the morning :)

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:28
I can add the tags by 4.
Do we have a google doc or other location to store Dashboard examples?

Bryan Allred @bmallred Jun 14 2016 15:31
hm... good question
taiga has a wiki but i don't think that will suffice
if you want you can create a task and attach the images there
or push it in a branch of the git repo or something

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:35
will do

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:43
https://tree.taiga.io/project/truetandem-fedramp-dashboard/task/27

Bryan Allred @bmallred Jun 14 2016 15:43
nice man!

Jay Neighbours @Jay-Neighbours-I72 Jun 14 2016 15:44
I'll keep adding as I continue looking for good examples. Lots of crap examples out there.

John Flores @floresj Jun 14 2016 15:47
This thing needs emojis

John Flores @floresj Jun 14 2016 16:11
:+1:
Ha! Thank you sir Bryan

V David Zvenyach @vzvenyach Jun 14 2016 17:41
so excited to see all of the things!!! :clap:

John Flores @floresj Jun 14 2016 17:42
Whoohooo!!

Will Slack @wslack_twitter Jun 14 2016 19:13
what @vzvenyach said (I'm here on personal time to say yay because SO EXCITING!) Will try to file some issues if I notice something.

Jessie @jposi Jun 15 2016 14:12
hi! in here now

Bryan Allred @bmallred Jun 15 2016 14:12
:grinning:

Jessie @jposi Jun 15 2016 15:05
FYI the micropurchase info: https://github.com/18F/fedramp-micropurchase

Bryan Allred @bmallred Jun 15 2016 15:33
bryan.allred@gmail.com

Laura Gehardt @lauraGgit Jun 15 2016 15:51
data updated: https://github.com/18F/fedramp-micropurchase/blob/master/data/data-2016-06-15.json

Bryan Allred @bmallred Jun 15 2016 15:51
got it thanks
I see letter dates like this...
{ /* skip for brevity */ "ATO_Letters": [ { "Letter_Date": 41508, "Authorizing_Agency": "JAB Authorization", "Authorizing_Subagency": "JAB Authorization" } ] }
then others like
{ /* skip for brevity */ "ATO_Letters": [ { "Letter_Date": "2015-05-18T04:00:00.000Z", "Letter_Expiration_Date": "2018-05-18T04:00:00.000Z", "Authorizing_Agency": "Consumer Financial Protection Bureau", "Authorizing_Subagency": "Consumer Financial Protection Bureau" } ] },
whoa, that looks horrible
some "Letter_Date" values are like "41508" and others like "2015-05-18T04:00:00.000Z"

Laura Gehardt @lauraGgit Jun 15 2016 15:55
Hmmm!
will take a look
do you mind throwing me a line number?

John Flores @floresj Jun 15 2016 15:56
62

Bryan Allred @bmallred Jun 15 2016 15:56
sure thing. line 1262 is the string version
line 12 is integer

Laura Gehardt @lauraGgit Jun 15 2016 15:58
hmm, yes, let me see why it's generating these integers

Laura Gehardt @lauraGgit Jun 15 2016 16:04
i think this might be how it is parsing the utcstring type
the script is a variation of https://github.com/18F/fedramp-micropurchase/blob/master/scripts/google-sheets-script.gs

Bryan Allred @bmallred Jun 15 2016 16:11
could it be something as simple as how the cell is formatted? looking at the code (w/o debugging) i don't see anything glaring
i.e. cell is formatted as a string whereas maybe another is a Date/Time

Laura Gehardt @lauraGgit Jun 15 2016 16:15
i will dig into this, also field names have changed so i'll have to update the mapping json

Bryan Allred @bmallred Jun 15 2016 16:16
Awesome

John Flores @floresj Jun 15 2016 16:16
LOL

Laura Gehardt @lauraGgit Jun 15 2016 16:20
ok, yes, I try to hand that as a utc string date and I think it breaks the things!

Bryan Allred @bmallred Jun 15 2016 16:54
https://tree.taiga.io/project/truetandem-fedramp-dashboard

Bryan Allred @bmallred Jun 16 2016 10:30
@lauraGgit is there a unique property coming back in the data similar to the Reference Number?
just looking to see if there is something we could leverage if we were to use the HTML5 local storage... if not we can build the keys from the properties

Laura Gehardt @lauraGgit Jun 16 2016 12:51
@bmallred I do not believe that there is, but I could add one if that would help

Bryan Allred @bmallred Jun 16 2016 13:00
@lauraGgit either way would be fine :)

Laura Gehardt @lauraGgit Jun 16 2016 13:05
actually, they probably wouldn't persist across script runs if the data were to change, so I think i will hold off

Bryan Allred @bmallred Jun 16 2016 13:06
sounds good... we'll assign an arbitrary incrementing int for the time being

Laura Gehardt @lauraGgit Jun 16 2016 16:05
Ok, I've updated the data and it is now nested and typed properly! https://github.com/18F/fedramp-micropurchase/tree/master/data

Bryan Allred @bmallred Jun 16 2016 16:06
awesome thanks!
@lauraGgit what did the date issue end up being?

Laura Gehardt @lauraGgit Jun 16 2016 16:08
If in the future it's not typed properly let me know, I was working off of a copy that I forced to all display the columns as dates
Google sheets actually
the cell formatting for the date columns

Bryan Allred @bmallred Jun 16 2016 16:08
gotcha
@floresj making adjustments for the data properties atm

Laura Gehardt @lauraGgit Jun 16 2016 16:14
I updated the mapping.json and the schema.json too

Bryan Allred @bmallred Jun 16 2016 16:15
only suggestion on the schema.json is to make the Service_Model an array

John Flores @floresj Jun 16 2016 16:15
@bmallred cool beans.

Laura Gehardt @lauraGgit Jun 16 2016 16:18
@bmallred ah, good catch!
updated

Bryan Allred @bmallred Jun 16 2016 16:24
@floresj pushing update to properties
walking away for a bit... think the terror is getting on wifes nerves

John Flores @floresj Jun 16 2016 16:26
@lauraGgit So the intent is to have the data .json file live at data.gov correct? Off the top of your head, do you know if the api allow the ability to query for all files at /somePath

Laura Gehardt @lauraGgit Jun 16 2016 16:27
I don't know the url endpoints for api.data.gov, unfortunately, but I'm looking into it now

John Flores @floresj Jun 16 2016 16:27
@bmallred Ha! No worries. Good luck. Wife came home raging about her HR fun times. Always good stories there.

Jessie @jposi Jun 17 2016 09:15
FYI: I'm going to keep joining the standups for visibility and to be around if any blockers are ID'd, but otherwise am not meddling - just wanted to be clear

Bryan Allred @bmallred Jun 17 2016 09:15
:)

Jessie @jposi Jun 17 2016 09:15
(I reserve the right to meddle)

Jessie @jposi Jun 17 2016 11:00
http://piratepad.net/PZCw5Vxda6

Bryan Allred @bmallred Jun 20 2016 15:22
@floresj woohoo back up to 90% coverage :)

Bryan Allred @bmallred Jun 22 2016 12:22
@jposi is there a hangout link for the meeting at 1pm?

Bryan Allred @bmallred Jun 22 2016 14:34
@lauraGgit added issue for truetandem/fedramp-dashboard#2
we'll get it in there :)

Laura Gehardt @lauraGgit Jun 22 2016 15:22
https://github.com/konklone/json
if you want to play around with it before implementing: http://konklone.io/json/

Bryan Allred @bmallred Jun 22 2016 15:23
gracias

Laura Gehardt @lauraGgit Jun 22 2016 15:25
and here's how it interacts with a download link https://github.com/konklone/json/blob/gh-pages/index.html#L178

Bryan Allred @bmallred Jun 23 2016 09:13
@lauraGgit integrated w/ continua11y and code climate. for the continually is there a way to see what the errors/warnings/etc are via the web site or do we have to run locally?

Laura Gehardt @lauraGgit Jun 23 2016 09:32
http://squizlabs.github.io/HTML_CodeSniffer/

Bryan Allred @bmallred Jun 23 2016 09:40
https://travis-ci.org/truetandem/fedramp-dashboard/jobs/139755261#L639

Laura Gehardt @lauraGgit Jun 23 2016 12:54
aside from the "updated on" do you have any suggestions on what meta data should be included in our new meta data block?

Laura Gehardt @lauraGgit Jun 23 2016 13:30
@bmallred ^

Bryan Allred @bmallred Jun 23 2016 13:41
that is the big one... could be maybe a total number or hash for validation.
@lauraGgit quick question... is there going to be a json stream for 3pao as well?

Laura Gehardt @lauraGgit Jun 23 2016 14:47
I'm not quite sure, i would ask on the thread with Jim
ok, I updated the repo to have data.json with a new schema where the letter info is in data and the created_at is in the meta

Bryan Allred @bmallred Jun 23 2016 15:34
sounds good :grinning:

V David Zvenyach @vzvenyach Jun 24 2016 11:03
http://piratepad.net/mB1VaDB16W

Bryan Allred @bmallred Jun 24 2016 17:40
@/all we updated the readme with local usage commands. If we missed something feel free to scold us or submit a PR :grinning:
Tempted to allow Paul the honor of closing #4. Thankful there isn't a big red button to push

V David Zvenyach @vzvenyach Jun 27 2016 13:37
Hey all, before I spend any time on it, I was thinking I might spend a little time working on the deploy pattern to S3 as discussed last week. Is there a card I should use? I've done something similar before for another 18F project...

Bryan Allred @bmallred Jun 27 2016 13:44
not at the moment but we can definitely add one
@vzvenyach https://tree.taiga.io/project/truetandem-fedramp-dashboard/task/98

V David Zvenyach @vzvenyach Jun 27 2016 13:47
noice

Laura Gehardt @lauraGgit Jun 28 2016 10:32
@bmallred so expect in the next rerun an array in the top level ATO-letter called Underlying_CSP_Package_ID.
For reuse calcs they should delineate between directly leverages, and how they are leveraged by other CSPs. (Non-direct leverages will not need to appear in filtered tiles).
I imagine that algorthim for individual CSP reuse would be:
CSPReuse = Leveraged_ATO_Letters.length + sum(Leveraged_ATO_Letters.length where Package_ID in Underlying_CSP_Package_ID)

Laura Gehardt @lauraGgit Jun 28 2016 10:46
^ and i can't recommend es6 Array.prototype.filter enough for that latter!
data.filter(csp => csp.Underlying_CSP_Package_ID.includes(Package_ID))

Laura Gehardt @lauraGgit Jun 28 2016 11:16
Or more completely:
leveragedATOs = data.filter(csp => csp.Underlying_CSP_Package_ID.includes(Package_ID))
summedReuses = leveragedATOs.map(csp => csp.Leveraged_ATO_Letters.length).reduce( (prev, curr) => prev + curr )

Laura Gehardt @lauraGgit Jun 28 2016 12:24
I developed more complete algorithms that take this into account, but checking with FR for clarification

Bryan Allred @bmallred Jun 28 2016 12:47
sounds good :)

Bryan Allred @bmallred Jun 28 2016 13:55
@lauraGgit: does the verbiage for TG-71 line-up with what you wrote above?

Bryan Allred @bmallred Jun 28 2016 15:51
@vzvenyach is there anything we can help out w/ for the S3 deployment(s)?

V David Zvenyach @vzvenyach Jun 28 2016 16:00
nope. i actually submitted a PR upstream on something here at 18F that will make this crazy simple

Bryan Allred @bmallred Jun 28 2016 16:09
awesome... so once that is applied it be a couple of tweaks in the travis config?

V David Zvenyach @vzvenyach Jun 28 2016 16:09
yep. if that even...
i'm working right now on using federalist.18f.gov
which automatically deploys to S3
and all we need to do is point federalist to the repo. and magic autodeploys
assuming this PR 18F/federalist-docker-build#11 gets merged and deployed, I may be able to get this up and running by tomorrow am

John Flores @floresj Jun 28 2016 16:10
Will you need us to publish/check-in minified/concatenated resources to our repo?

V David Zvenyach @vzvenyach Jun 28 2016 16:11
this is a great question...
i know that the npm run package script works magic

Bryan Allred @bmallred Jun 28 2016 16:11
@floresj has the gulp set up for that i think

V David Zvenyach @vzvenyach Jun 28 2016 16:11
yep. i used it yesterday locally
it's dope

John Flores @floresj Jun 28 2016 16:12
Ok great. No issues?

Bryan Allred @bmallred Jun 28 2016 16:12
we just don't add it to the repo during commits atm

V David Zvenyach @vzvenyach Jun 28 2016 16:12
makes sense
i'm going to work with the federalist team to see if i can do a deploy script... but it may not work.

Bryan Allred @bmallred Jun 28 2016 16:12
good to go

V David Zvenyach @vzvenyach Jun 28 2016 16:12
i know that the travis deploy would be easier there
right now, sitting locally is this change to _travis.yml:
deploy:
  provider: s3
  script: "npm run package"
  access_key_id: "YOUR AWS ACCESS KEY"
  secret_access_key: "YOUR AWS SECRET KEY"
  bucket: "S3 Bucket"
  skip_cleanup: true
  local_dir: build
  acl: public_read
but, our S3 access is limited to sandboxes atm

Bryan Allred @bmallred Jun 28 2016 16:17
@vzvenyach i may move the task from taiga to a taiga/github issue so it can transcend the sprint backlogs

V David Zvenyach @vzvenyach Jun 28 2016 16:17
cool cool

Bryan Allred @bmallred Jun 28 2016 16:22
removing TG-98 and moved to #5 in github or TG-99 in taiga

Bryan Allred @bmallred Jun 29 2016 08:08
@vzvenyach looks like it there was a deployment error at line 834 in the TravisCI logs.

Jessie @jposi Jun 29 2016 09:01
added a video call to the meeting invite - sorry for the delay

Jessie @jposi Jun 29 2016 10:41
where is the planning poker link?

John Flores @floresj Jun 29 2016 10:41
https://app.planningpoker.com/play/game/SKCgx78V

Jessie @jposi Jun 29 2016 10:41
found it
ok

V David Zvenyach @vzvenyach Jun 29 2016 11:05
https://s3.amazonaws.com/fedramp-dashboard-demo/index.html is a thing

John Flores @floresj Jun 29 2016 11:11
WHOOHOOO!
All of the nerdy things

V David Zvenyach @vzvenyach Jun 29 2016 11:15
truetandem/fedramp-dashboard#7 << So, this should work for everyone

Bryan Allred @bmallred Jun 29 2016 11:20
awesome :) we'll merge it in a few

John Flores @floresj Jun 29 2016 11:20
@lauraGgit Would you suggest forcing a fail if jshint comes back with an error? Or just letting it continue?

Bryan Allred @bmallred Jun 29 2016 11:21
@floresj on that note i did add a .jshintrc file to account for es6

John Flores @floresj Jun 29 2016 11:22
@bmallred yessssir I saw that. Gracias

Laura Gehardt @lauraGgit Jun 29 2016 11:43
@Jay-Neighbours-I72 here is the line in the USWDS that notes the screen widths: https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss#L76
@floresj I think that is a matter of preference

Bryan Allred @bmallred Jun 29 2016 11:45
@vzvenyach Skipping a deployment with the s3 provider because this repo's name does not match one specified in .travis.yml's deploy.on.repo: 18F/fedramp-dashboard
should the repo name be truetandem/fedramp-dashboard?

V David Zvenyach @vzvenyach Jun 29 2016 12:47
so. @bmallred, right now, i have it set up for deploy to s3 on merge to master on 18F/fedramp-dashboard. we could set it for truetandem/fedramp-dashboard. :shrug:
let's leave it as is, and I'll chat with the team about their preference.

Bryan Allred @bmallred Jun 29 2016 12:48
good to go

Jay Neighbours @Jay-Neighbours-I72 Jun 29 2016 12:56
got it, thanks @lauraGgit

John Flores @floresj Jun 29 2016 13:01
@lauraGgit @vzvenyach @bmallred I'll start out with a passive approach and not kill the build if any lint errors are found. If we find that it starts to be a problem, we can add it in. I'll comment out the line that enables it to fail if we want to turn it on again later. Bryan and I both point to the same .jshintrc for our emacs/vim config so you can blame us if the build fails :smile:

Jessie @jposi Jul 01 2016 10:57
crazy idea - gonna merge all of the pirate pads
Here's the one for this week: http://piratepad.net/mB1VaDB16W
(need to add in week 1)

Bryan Allred @bmallred Jul 01 2016 11:00
running a bit late... just few moments
!

Laura Gehardt @lauraGgit Jul 01 2016 14:51
Arrrrrr you sure about that
?
(Pirate pad jokes)

Bryan Allred @bmallred Jul 01 2016 14:55


Laura Gehardt @lauraGgit Jul 01 2016 15:16
@bmallred quick question about the total reuse number that is on the dashboard, locally (outside of your framework) i'm only getting 222, so I'm curious that it is a higher number what i have. I took a look back at the home controller and not quite sure why it would be higher

Bryan Allred @bmallred Jul 01 2016 15:18
the 222 is when ran locally or from the spreadsheet?

Laura Gehardt @lauraGgit Jul 01 2016 15:19
222 is when i ran it using the latest version off of the gH data.json in a node file that i was sketching out the algorithms with, as in not in the dashboard

Bryan Allred @bmallred Jul 01 2016 15:22
so locally i have 222 as well, lemme see what is on gh pages

Laura Gehardt @lauraGgit Jul 01 2016 15:25
ok, that's good to know

Bryan Allred @bmallred Jul 01 2016 15:27
on the gH page i see...
Savings: $55,500,00
Auth: 60
Leveraged: 222

Bryan Allred @bmallred Jul 01 2016 16:55

happy july 4th ppl

Bryan Allred @bmallred Jul 08 2016 12:15
Music of the day: https://play.google.com/music/m/Tkyvu2qnstu4i7wnis2mjwhlime?t=Drunken_Sailor_-_Blaggards

Jessie @jposi Jul 08 2016 13:32
um wow
how worried should we be about you

Bryan Allred @bmallred Jul 08 2016 13:33
don't like that music? haha makes me feel like doing jigs around the office

V David Zvenyach @vzvenyach Jul 08 2016 13:38
hey team--when you search by agencies https://truetandem.github.io/fedramp-dashboard/#/agencies, you get a bunch of agencies with no names near the top. you may already be aware, but thought i'd let you know in case you aren't

Bryan Allred @bmallred Jul 08 2016 13:43
This message was deleted
@vzvenyach sorry, one of us is working on a branch w/o the fix for that
just force pushed again so it should be updated hopefully

Bryan Allred @bmallred Jul 11 2016 09:28
Ah, monday music

Bryan Allred @bmallred Jul 12 2016 12:29
@/all just an fyi: github is having some issues at the moment

Bryan Allred @bmallred Jul 14 2016 14:54
@/all we will be putting a freeze on updates to Github Pages tomorrow morning (possibly after the scrum) in preparation for the user testing/demonstrations

Bryan Allred @bmallred Jul 15 2016 11:22
@/all freezing updates to github pages as of now (unless there is something glaring) until the interviews have been conducted today. good luck joe

Jessie @jposi Jul 18 2016 17:09
I am losing my mind on how great the prototype is looking
haven't actually checked for data being valid, but functionality looks AWESOME
all caps thrilled.

John Flores @floresj Jul 18 2016 17:17
Great!

Jessie @jposi Jul 20 2016 09:45
Whenever I give you feedback I think of the Missing Missy meme from a few years ago (http://thenextweb.com/shareables/2010/07/08/why-never-to-ask-favors-from-designers/#gref)

Bryan Allred @bmallred Jul 20 2016 18:08
@jposi lol never seen that before

Laura Gehardt @lauraGgit Jul 21 2016 13:42
@bmallred data updated with your announcement date pr!
and renamed the repo, fedramp-data

Bryan Allred @bmallred Jul 21 2016 13:47
Thanks @lauraGgit!

Laura Gehardt @lauraGgit Jul 21 2016 13:47
fyi, going to now change the data model/schema to include the major data keys/ fields

Bryan Allred @bmallred Jul 21 2016 13:48
Sounds good

John Flores @floresj Jul 21 2016 14:37
@lauraGgit Thanks for the update! Also have a question regarding what the 'Ready' metric pertains to. Currently, the designation status is coming back with Compliant, In PMO Review and In-Process states. Should a 'Ready' designation be coming back in the dataset? Also, after speaking with Bryan, it seems like there's a fedramp ready date (column AS in spreadsheet). Should we be using that?

Laura Gehardt @lauraGgit Jul 21 2016 14:38
@floresj I think that is the distinction that is made if it is in the JAB path (not agency) authorization path. but that is probably a question better suited to Jim

John Flores @floresj Jul 22 2016 09:34
@lauraGgit Hola! We have user testing interviews starting at 1pm. Out of curiosity, will you have the data.json updates in before then? If not, I'd like to hold off until after Joe/Jay finish up. Don't want the site to stop functioning halfway through the test

Laura Gehardt @lauraGgit Jul 22 2016 09:56
I am in meetings all morning so I think I will hold off for y'all. I did make an update that has the announcement date in it already. If i do get to it, i will push it to the update-schema.

John Flores @floresj Jul 22 2016 09:57
Thanks!

Jessie @jposi Jul 22 2016 11:13
http://piratepad.net/mB1VaDB16W

Laura Gehardt @lauraGgit Jul 22 2016 17:51
@bmallred @floresj I've left off the contact info but the data in the new-schema branch has the data now with both the provider and the assesor data in it.
also, the repo is now fedramp-data

John Flores @floresj Jul 22 2016 17:52
Shwweeet thanks!

Bryan Allred @bmallred Jul 22 2016 18:11
@lauraGgit thanks looks good.

@floresj John not sure about your workload but maybe running a quick algorithm to identify agency names in the providers which don't match up to a name in assessors

Bryan Allred @bmallred Jul 22 2016 18:20
Sorry assessors not agencies lol... My bad :grinning:

John Flores @floresj Jul 22 2016 18:21
Haha no worries. Running it right now

John Flores @floresj Jul 22 2016 19:12
Sending out an email with the findings. Hope everyone has a great weekend.

John Flores @floresj Jul 25 2016 08:08
@lauraGgit We switched out the url to use the data.json from the new schema with the Providers/Assessors arrays. Everything is working fine. You can update the master branch data.json to use the new fields whenever you'd like.

Laura Gehardt @lauraGgit Jul 25 2016 10:15
@bmallred @floresj merged the new schema over to master and reran it, hopefully some of the assessor data is cleaned up now too

Bryan Allred @bmallred Jul 25 2016 10:19
Awesome 😁

John Flores @floresj Jul 25 2016 10:23
*fist pump

John Flores @floresj Jul 25 2016 16:23
@lauraGgit I'm going to blame Jay on this one. Could we change up the image path for the CSO 'Microsoft - Global Foundation Services (GFS) Cloud Infrastructure' to use https://www.fedramp.gov/files/2015/05/microsoft-logo-300x168.jpg

. The image currently associated to it is slightly smaller than the rest of the Microsoft cso image paths.

Laura Gehardt @lauraGgit Jul 27 2016 10:26
@floresj i think you want to ping Jim for that

John Flores @floresj Jul 27 2016 10:27
@lauraGgit Sounds good. Gracias

Bryan Allred @bmallred Jul 28 2016 11:32
Sounds like some SEO gaming the system :-)

Bryan Allred @bmallred Jul 28 2016 12:40
@floresj looks like we needed to trim the strings at https://github.com/truetandem/fedramp-dashboard/blob/master/src/fedramp.services/storage-data.factory.js#L166
i get 15 agencies w/ aws east/west w/ the trim() on d.pkg

Laura Gehardt @lauraGgit Jul 29 2016 09:59
should I be bring through the 3pao description?

Bryan Allred @bmallred Jul 29 2016 10:38
@lauraGgit Yeah if we can. That is the field that may be Markdown I believe correct?

Laura Gehardt @lauraGgit Jul 29 2016 12:41
@bmallred data is updated with pocs!
and data dictionary exists!

Bryan Allred @bmallred Jul 29 2016 12:51
Awesomeness :-)

Bryan Allred @bmallred Jul 29 2016 13:06
@lauraGgit at the e
Sorry daughter bumped me
@lauraGgit at the end of dictionary.json there are empty objects... Is that just like empty rows from the spreadsheet? Just double checking

Laura Gehardt @lauraGgit Jul 29 2016 13:08
I think so

Bryan Allred @bmallred Jul 29 2016 13:08
Cool

John Flores @floresj Jul 29 2016 13:13
Sweet got rid of in-pmo review too

Bryan Allred @bmallred Jul 29 2016 13:25
![karate multitasking]https://m.popkey.co/48f690/EGzo6.gif)
!
karate multitasking. Try that again with two hands

Laura Gehardt @lauraGgit Aug 01 2016 12:23
FYI, data dictionary is temporarily down!

John Flores @floresj Aug 01 2016 12:28
:thumbsup:

Laura Gehardt @lauraGgit Aug 01 2016 13:13
It's back up!

John Flores @floresj Aug 01 2016 13:14
Gracias!

Laura Gehardt @lauraGgit Aug 01 2016 15:16
FYI, I think some of the subagency things that Jim is mentioning is because the mapping wasn't correctly surfacing the subagency until one of the more recent calls

Bryan Allred @bmallred Aug 01 2016 15:48
@lauraGgit was the "Underlying CSPs" renamed to "Dependent CSPs"? we'll email Jim too but was just curious
@lauraGgit n/m just refreshed email at it appears that is exactly what was done

Laura Gehardt @lauraGgit Aug 01 2016 15:54
It looks like it was. Is it easier for you to use underlying or dependent csp?
we have the algorithm to count both ways

Bryan Allred @bmallred Aug 01 2016 15:55
i guess the question is was it just a name change or did the data change as well

Laura Gehardt @lauraGgit Aug 01 2016 15:56
I would ask him

Laura Gehardt @lauraGgit Aug 03 2016 10:09
the new field is: "Fedramp_Ready_Date"
^ @bmallred @floresj

Laura Gehardt @lauraGgit Aug 03 2016 11:41
Looks like the latest push to the bucket still works fine: https://s3.amazonaws.com/fedramp-dashboard-demo/index.html#/products?sort=productName

John Flores @floresj Aug 03 2016 11:41
very nice!

Laura Gehardt @lauraGgit Aug 03 2016 13:14
hmm, service descriptions on ours are not showing up, any idea as to why that might be the case?
ah...showdown is not defined
do you mind making sure that that gets bundled
?

Bryan Allred @bmallred Aug 03 2016 13:20
sure thing we'll check that out
@floresj i'm in another branch w/ responsivenesseseseseses can you make the mod to the gulpfile... think we just need a showdown.min.js reference in the production references string

Laura Gehardt @lauraGgit Aug 03 2016 13:23
Excited to see that patriotism! :us: !

John Flores @floresj Aug 03 2016 13:27
@bmallred yesssir. I should check this more often

Bryan Allred @bmallred Aug 03 2016 13:27
@floresj turn notifications up to 11 :stuck_out_tongue:
@lauraGgit no prob, ripped from raw docs... didn't see it in the rendered docs but may have overlooked it w/ all the caffeine

Laura Gehardt @lauraGgit Aug 03 2016 13:29
i'm not sure it is, but raw docs in fine imho

Bryan Allred @bmallred Aug 03 2016 13:34
muzak: Elle King

Laura Gehardt @lauraGgit Aug 03 2016 15:03
@here encoding is fixed!

Bryan Allred @bmallred Aug 03 2016 15:10
nice looking good

Laura Gehardt @lauraGgit Aug 03 2016 15:10
:tm:

Bryan Allred @bmallred Aug 03 2016 16:27
@here welp, first draft is up for mobile. time to beat it to pulp :grinning:

Bryan Allred @bmallred Aug 04 2016 14:26
@lauraGgit same results w/ the leveraged ato's showing up under both packages. we think it is due to both products using the same package ID
is there a way to possibly roll them up with more than one field
?

Bryan Allred @bmallred Aug 04 2016 15:16
@lauraGgit just sent PR brainstorming matching on multiple fields for the roll-up

Bryan Allred @bmallred Aug 05 2016 08:43
muzak: Fit For Rivals

Laura Gehardt @lauraGgit Aug 05 2016 10:52
@bmallred is this fit to merge then? or i guess you haven't gotten a chance to test
?

Bryan Allred @bmallred Aug 05 2016 10:57
i didn't get a chance to test. Not sure if we need it either if they are going to change the package id's
if the package ids actually do become unique this wouldn't occur

Laura Gehardt @lauraGgit Aug 05 2016 10:58
oh, this is to handle that... I think that they are going to look into that
unique package IDs would be preferred

Bryan Allred @bmallred Aug 05 2016 10:59
absolutely

Jessie @jposi Aug 05 2016 11:11
http://piratepad.net/mB1VaDB16W

Jessie @jposi Aug 05 2016 17:08
animation.gif

Bryan Allred @bmallred Aug 05 2016 17:12
very neat!
is that something open sourced ya'll used?

Jessie @jposi Aug 05 2016 17:17
yeah, Dave built a little gif creator that pulls from the repo I think?

Bryan Allred @bmallred Aug 05 2016 17:18
cool i'll go peruse through his repos

Laura Gehardt @lauraGgit Aug 08 2016 10:16
do you mind quickly explaining your git flow
?
should I be looking at gh-pages or master?
also, if that could be documented that would be helpful

Bryan Allred @bmallred Aug 08 2016 10:17
@lauraGgit for updated code? just master probably

Bryan Allred @bmallred Aug 08 2016 10:18
gh-pages is updated via a git-hook on commits made in the master branch
our typical flow is https://github.com/truetandem/fedramp-dashboard/blob/master/CONTRIBUTING.md#branching

Laura Gehardt @lauraGgit Aug 08 2016 10:18
ok, just checking because gh-pages has ~200 more commits

Bryan Allred @bmallred Aug 08 2016 10:19
yeah that gets any commit made to the master branch which can be very crazy.

Laura Gehardt @lauraGgit Aug 08 2016 10:19
so you are rebasing on master?

Bryan Allred @bmallred Aug 08 2016 10:20
for gh-pages? no
oh master
lol, no, up to the dev more or less

Laura Gehardt @lauraGgit Aug 08 2016 10:21
ok, no worries, I was just noticing how many more commits, so wanted to make sure I was looking at the right thing

Bryan Allred @bmallred Aug 08 2016 10:22
not a problem

Bryan Allred @bmallred Aug 08 2016 12:14
@lauraGgit is it okay to push to the master branch or should we freeze that for the time being?

Laura Gehardt @lauraGgit Aug 08 2016 12:24
I'm going to probably addressing as an issue, so i think you are good to push to master

Bryan Allred @bmallred Aug 08 2016 12:30
anything on we can do to assist with the issuE?

Laura Gehardt @lauraGgit Aug 08 2016 12:30
sorry, i meant that the stuff i'm coming up with i will list as an issue, so it won't effect the code
issues actually

Bryan Allred @bmallred Aug 08 2016 12:31
ah good to go

Bryan Allred @bmallred Aug 08 2016 18:25
take cover
:)

John Flores @floresj Aug 08 2016 18:50
@lauraGgit just threw a grenade in our repo.

Bryan Allred @bmallred Aug 08 2016 18:53
Lol

Bryan Allred @bmallred Aug 09 2016 09:06
@lauraGgit do we have more issues coming down range?

Laura Gehardt @lauraGgit Aug 09 2016 09:43
That's all I have!

Laura Gehardt @lauraGgit Aug 09 2016 10:08
schema + data updated

Bryan Allred @bmallred Aug 09 2016 10:16
awesome thanks!
@lauraGgit while linting in gulp would you prefer the build to fail aggressively or let just output the error/warning and continue
?

Laura Gehardt @lauraGgit Aug 09 2016 10:24
i think output and continue is better

Bryan Allred @bmallred Aug 09 2016 10:28
10-4

Bryan Allred @bmallred Aug 09 2016 13:45
@lauraGgit what kind of info are you looking for again in regards to the documentation on local storage?

Laura Gehardt @lauraGgit Aug 09 2016 13:49
maybe just a little bit about how frequently cache is refreshed, where to find these services, and where they write to?

Bryan Allred @bmallred Aug 09 2016 13:52
can do

Bryan Allred @bmallred Aug 09 2016 14:27
@lauraGgit just submitted submitted 18F/fedramp-data#35 and associated 18F/fedramp-data#36 to fix a spelling of a field name in the mapping JSON

John Flores @floresj Aug 09 2016 14:29
Sorrrrrrrrrryyyyyy

Laura Gehardt @lauraGgit Aug 09 2016 14:30
merged, + data run

Bryan Allred @bmallred Aug 09 2016 14:31
thank you
bad @floresj , bad

Bryan Allred @bmallred Aug 09 2016 14:58
@lauraGgit is the goal to have one directory which contains all the files necessary for a quick deploy?

Laura Gehardt @lauraGgit Aug 09 2016 16:21
as in for build/dest? yes

Bryan Allred @bmallred Aug 09 2016 16:22
cool, updated the .travis.yml to use ./dist/ instead

Laura Gehardt @lauraGgit Aug 09 2016 16:27
wouldn't you want that script to use it off of gulp package not gulp default?
haven't run it locally but just checking

Bryan Allred @bmallred Aug 09 2016 16:29
for deployment it uses npm run package... however for testing and documentation in gh-pages we use npm run build (i.e. default)
the package simply removes tests and documentation so you only deploy the minified and necessary static files

Laura Gehardt @lauraGgit Aug 09 2016 16:30
oh yeah, let's keep that for gh-pages

Bryan Allred @bmallred Aug 09 2016 16:31
yeah that was pretty much the thorn we have been working around today... getting it to work with all that but still keep everything passing :) all in all the issues have been closed out

Jessie @jposi Aug 09 2016 16:59
hi y'all - thanks for closing these issues today! I've got a few style issues from Matt - will create them as GH issues given the late hour, and we can discuss tomorrow as needed

Jessie @jposi Aug 09 2016 17:23
In GH now: truetandem/fedramp-dashboard#33

Bryan Allred @bmallred Aug 09 2016 17:23
cool thanks

Bryan Allred @bmallred Aug 10 2016 08:01
muzak: Holst: The Planets
@bmallred stretching

Jessie @jposi Aug 10 2016 09:53
http://img3.wikia.nocookie.net/__cb20141029130740/academicjobs/images/9/98/Haters-gonna-hate.gif

Bryan Allred @bmallred Aug 10 2016 09:54
@lauraGgit just FYI we have to submit another PR for data structure change to get the POCs when the PATH is "Agency" and they don't have leveraged ATOs
@jposi word :)

Laura Gehardt @lauraGgit Aug 10 2016 09:54
geeeezzzz ;)

Bryan Allred @bmallred Aug 10 2016 10:12
easter egg?

Laura Gehardt @lauraGgit Aug 10 2016 10:13
I need that by 3:30pm
if you did want to make that overlay appear if you clicked on the globe icon next to "general services administration"
I would't be mad

Bryan Allred @bmallred Aug 10 2016 10:21
haha

Bryan Allred @bmallred Aug 10 2016 11:13
@jposi && @lauraGgit: did we decide if we are changing "Compliant" to "Authorized" in the navigation menu?

Laura Gehardt @lauraGgit Aug 10 2016 11:40
@floresj merged + data pushed

Laura Gehardt @lauraGgit Aug 10 2016 11:49
hmm, on my local dev-site, I'm now getting a 404 when I try to go to the coverage report /coverage
the site and the jasmine work fine

Bryan Allred @bmallred Aug 10 2016 11:54
may need to run npm test so it creates the directory under dist/

Laura Gehardt @lauraGgit Aug 10 2016 11:56
yup!
do you mind making a note of that in the docs?

Bryan Allred @bmallred Aug 10 2016 11:57
sure can

Laura Gehardt @lauraGgit Aug 10 2016 12:05
also, do you mind adding the docs to the gh-pages subtree?
wait, jk, y'all have it

Bryan Allred @bmallred Aug 10 2016 12:06
yeah it was part of the ./hooks/post-commit script

Laura Gehardt @lauraGgit Aug 10 2016 12:06
i accidentally went to /docs

Bryan Allred @bmallred Aug 10 2016 12:06
lol that actually reads better

Bryan Allred @bmallred Aug 11 2016 09:32
auto ssl stuffs https://caddyserver.com/

Laura Gehardt @lauraGgit Aug 11 2016 10:27
oh thanks

Bryan Allred @bmallred Aug 11 2016 10:27
probably can't use it, but still :)

Laura Gehardt @lauraGgit Aug 11 2016 10:29
also the labels on the main nav of the fedramp.gov site have been updated and we were wondering if you all could update the links in your header. If not we will go ahead and do it.

Bryan Allred @bmallred Aug 11 2016 10:29
sure thing
got rid of the all-caps on submenu items i see

Laura Gehardt @lauraGgit Aug 11 2016 10:30
great thanks

Bryan Allred @bmallred Aug 12 2016 10:49
paul loves badges: http://forthebadge.com/

John Flores @floresj Aug 12 2016 10:57
Found my favorite one

Bryan Allred @bmallred Aug 12 2016 11:28
roll credits

Bryan Allred @bmallred Aug 12 2016 13:25
https://youtu.be/Ue5EXN3J78o

Laura Gehardt @lauraGgit Aug 12 2016 14:37
is this commits?

Bryan Allred @bmallred Aug 12 2016 14:53
Yeah on master
Dots represent files, branches are directories, and beams are commits from user

Laura Gehardt @lauraGgit Aug 12 2016 17:21
I understand if you say this is now our problem, but I actually am seeing that the test suite is erroring on npm tests because it is in the after_sucess portion of the travis file
https://travis-ci.org/18F/fedramp-dashboard/jobs/151927323
i believe this is a product of the lib files being stripped when they get bundled and it works locally

Bryan Allred @bmallred Aug 12 2016 17:23
Can add new gulp task to do build then launch into test or something. Had to do that for the "watch" command

Laura Gehardt @lauraGgit Aug 12 2016 17:24
yeah
i updated the .travis.yml on ours
to have the build actually fail first
alternatively it looks like you can have karma load dependancies via require as test preqs
http://stackoverflow.com/questions/20132823/include-dependencies-in-karma-test-file-for-angular-app

Bryan Allred @bmallred Aug 12 2016 17:27
gulp.task('travis', ['default', 'test']);
Away from keyboard ATM

Laura Gehardt @lauraGgit Aug 12 2016 17:28
ah, i from the watch commands, i can probably add this

Bryan Allred @bmallred Aug 12 2016 17:29
Then maybe add a new script in the package.json

Laura Gehardt @lauraGgit Aug 12 2016 17:29
anything wrong with changing the default gulp task to include test?

Bryan Allred @bmallred Aug 12 2016 17:30
Not at all

Laura Gehardt @lauraGgit Aug 12 2016 17:31
also for future reference, travis didn't handle the transfer all that well (not you problem, just fysa)

Bryan Allred @bmallred Aug 12 2016 17:31
If you do that may want to update the "watch" task bits so it doesn't run tests twice
What kinda issues did Travis have out of curiosity?
FWIW: the watch task is for local continuous builds as you dev

Laura Gehardt @lauraGgit Aug 12 2016 17:32
sounds good. travis will only show the need builds from the pr link
yup, that's what i figured
wait, the karma server needs to be running? isn't that what phantom just does?
(might have my order bkg)
ah, no

Bryan Allred @bmallred Aug 12 2016 17:34
Test should start Karma up which then uses phantom

Laura Gehardt @lauraGgit Aug 12 2016 17:34
yeah, so that i don't believe is the issue
karma starts: https://travis-ci.org/18F/fedramp-dashboard/jobs/151927323#L1033
but phantom isn't finding the deps it needs

Bryan Allred @bmallred Aug 12 2016 17:37
Yeah it has something to do like it doesn't find the files in dist/test/
Getting to keyboard

Laura Gehardt @lauraGgit Aug 12 2016 17:37
ok, thanks for hopping on

Bryan Allred @bmallred Aug 12 2016 17:39
not a problem

Laura Gehardt @lauraGgit Aug 12 2016 17:40
this is what i've got locally in dist/test:
dist/test
├── blanket.min.js
├── fedramp
│ ├── fedramp.routes.test.js
│ ├── home
│ │ ├── agency.comparison.controller.test.js
│ │ ├── agency.information.controller.test.js
│ │ ├── assessor.comparison.controller.test.js
│ │ ├── assessor.information.controller.test.js
│ │ ├── home.controller.test.js
│ │ ├── product.comparison.controller.test.js
│ │ └── product.information.controller.test.js
│ ├── search
│ │ └── search.controller.test.js
│ └── sitemap
│ └── sitemap.controller.test.js
├── fedramp.components
│ ├── agencies-grid.component.test.js
│ ├── agency.component.test.js
│ ├── assessor.component.test.js
│ ├── assessors-grid.component.test.js
│ ├── comparison.component.test.js
│ ├── dictionary.component.test.js
│ ├── download-csv.component.test.js
│ ├── grid-filter-clear.component.test.js
│ ├── grid-filter.component.test.js
│ ├── grid-search.component.test.js
│ ├── grid-sort.component.test.js
│ ├── grid-total.component.test.js
│ ├── grid.component.test.js
│ ├── menu.component.test.js
│ ├── navigation.component.test.js
│ ├── panel.component.test.js
│ ├── product-list.component.test.js
│ ├── product-status.component.test.js
│ ├── product.component.test.js
│ ├── products-grid.component.test.js
│ ├── search.component.test.js
│ ├── tile.component.test.js
│ └── twitter.component.test.js
├── fedramp.js
├── fedramp.models
│ ├── ato-letter.factory.test.js
│ └── provider.factory.test.js
├── fedramp.services
│ ├── cache.factory.test.js
│ ├── csv.service.test.js
│ ├── data.service.test.js
│ ├── datasource.service.test.js
│ ├── fedramp-data.provider.test.js
│ ├── helper.service.test.js
│ ├── searcher.factory.test.js
│ ├── storage-assessor-data.factory.test.js
│ ├── storage-data.factory.test.js
│ ├── storage-manager.factory.test.js
│ └── storage-settings.factory.test.js
├── fedramp.test.js
├── index.html
├── jasmine-blanket.js
├── jasmine.css
├── jasmine_favicon.png
├── phantomjs-shim.js
├── test-data-factory.js
└── test-data.js

Bryan Allred @bmallred Aug 12 2016 17:41
looks like everything that is needed... race condition?

Laura Gehardt @lauraGgit Aug 12 2016 17:42
except don't know if the angular/ showdown libs would get loaded

Bryan Allred @bmallred Aug 12 2016 17:43
i'm on hangouts

Laura Gehardt @lauraGgit Aug 12 2016 17:46
ok, i'm on now
also, you'll notice on our version of the repo i moved around the travis build a bit
install:
npm install
before_script:
npm run build
script:
npm test
npm install -g pa11y-crawl
pa11y-crawl --run "./node_modules/.bin/http-server dist" --ci http://localhost:8080

Laura Gehardt @lauraGgit Aug 12 2016 18:12
https://docs.travis-ci.com/user/customizing-the-build/

Laura Gehardt @lauraGgit Aug 12 2016 18:23
https://travis-ci.org/18F/fedramp-dashboard/builds/151943803

Laura Gehardt @lauraGgit Aug 12 2016 18:33
In the gulpfile, the mangle:copy-test task should probably have a dependency on the mangle:concat-test in addition to the mangle:concat-libs task
[6:33]
If the mangle:copy-test starts before mangle:concat-test finishes (which it seems to do sometimes on travis), it's believable that not all of the files it's trying to copy will exist yet.

Bryan Allred @bmallred Aug 17 2016 18:06
FedScoop
FedRAMP Blog
GSA Blog
And the mantra persists
We gave TrueTandem and 18F a goal of building a “ridiculously easy” user interface and intuitive design.

Laura Gehardt @lauraGgit Aug 24 2016 19:27
on the bottom of your coveralls do you have the ability to change source?

Bryan Allred @bmallred Aug 24 2016 19:30
On the site itself?

Laura Gehardt @lauraGgit Aug 24 2016 19:34
yes on coverall

Bryan Allred @bmallred Aug 24 2016 19:34
coveralls
We can change branch, or Regen token

Laura Gehardt @lauraGgit Aug 24 2016 19:35
hrm

Bryan Allred @bmallred Aug 24 2016 19:36
In Travis I think we had a env variable set for coveralls, but I may be mistaken on that

Laura Gehardt @lauraGgit Aug 24 2016 19:36
yes, but you actually shouldn't need it for an open repo
lemurheavy/coveralls-public#405

Bryan Allred @bmallred Aug 24 2016 19:38
I'm on mobile... Let me see if I can force desktop and maybe that button will be there
Don't see that, but there is a "repo sync" and a bit about deleting the repo in coveralls
I see a "change settings" only when in settings

Bryan Allred @bmallred Aug 24 2016 19:43
Looks like I need access to the 18f repo in order to change SRC

Laura Gehardt @lauraGgit Aug 24 2016 19:44
blarg
do you mind readding me to tt?

Bryan Allred @bmallred Aug 24 2016 19:44
Sure thing
Should see it coming in

Bryan Allred @bmallred Aug 24 2016 19:55
Find it?

Laura Gehardt @lauraGgit Aug 24 2016 19:56
no :worried:
i think i need to wait a bit for the orgs to sync

Bryan Allred @bmallred Aug 24 2016 19:58
Ah... Doesn't find it in "add repos"?

Laura Gehardt @lauraGgit Aug 24 2016 20:00
relinked gH, and it showed up!

Bryan Allred @bmallred Aug 24 2016 20:00
Woohoo!

Laura Gehardt @lauraGgit Aug 24 2016 20:00
and then when i clicked change went to a blank page

Bryan Allred @bmallred Aug 24 2016 20:01
I only saw the change SRC when I went to settings as the top of the repo page
Ah kk.... Not sure what that means lol

Laura Gehardt @lauraGgit Aug 24 2016 20:02
its not the best ui
but its now on coveralls end. will let you know when i've successfully moved over

Bryan Allred @bmallred Aug 24 2016 20:05
Sounds good!

Laura Gehardt @lauraGgit Aug 24 2016 20:05
thanks for adding me

Bryan Allred @bmallred Aug 24 2016 20:19
Not a problem. Let us know if you need anything else. Maybe expect delays if house is in meltdown-mode :grinning:

Bryan Allred @bmallred Aug 25 2016 16:59
@lauraGgit all good?
