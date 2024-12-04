
type Mood = 'happy' | 'sad' | 'stressed' | 'energetic' | 'angry';

const happyPlaylist = [
    "The Spins by Mac Miller",
    "Adventure of a Lifetime by Coldplay",
    "Touch The Sky by Kanye West",
    "Sundress by A$AP Rocky",
    "Far From Lies by Unclekamo"
];

const sadPlaylist = [
    "Weekend by Mac Miller",
    "Deja Vu by J. Cole",
    "Don't by Bryson Tiller",
    "Crack Rock by Frank Ocean",
    "Get You by Daniel Caesar"
];

const stressedPlaylist = [
    "The Less I Know The Better by Tame Impala",
    "505 by Arctic Monkeys",
    "Les by Childish Gambino",
    "16 by Baby Keem",
    "Judge Judy by Tyler, The Creator"
];

const energeticPlaylist = [
    "International Love by Pitbull",
    "I Like It by Enrique Iglesias",
    "We Found Love by Rihanna",
    "POWER by Kanye West",
    "Homecoming by Lil Uzi Vert"
];

const angryPlaylist = [
    "Sober by Tool",
    "Even Flow by Pearl Jam",
    "Crawling by Linkin Park",
    "Hysteria by Muse",
    "Bring Me To Life by Evanescence"
];

export async function getPlaylist(currentMood: Mood): Promise<string[]> {
    const playlists: Record<Mood, string[]> = {
        happy: happyPlaylist,
        sad: sadPlaylist,
        stressed: stressedPlaylist,
        energetic: energeticPlaylist,
        angry: angryPlaylist
    };
    return playlists[currentMood];
}


type Mood2 = 'calm' | 'focused' | 'confident' | 'comforted' | 'motivated';

const calmPlaylist = [
    "Latch by Disclosure",
    "Jungle by Drake",
    "L.O.V.E. by Kendrick Lamar",
    "Hey Jane by Tyler, The Creator",
    "Love Galore by SZA"
];

const focusedPlaylist = [
    "Claire de Lune by Claude Debussy",
    "River Flows In You by Yiruma",
    "Veridis Quo by Daft Punk",
    "Merry-Go-Round of Life by Joe Hisaishi",
    "Lazy Eye by Silversun Pickups"
];

const confidentPlaylist = [
    "Ambitionz Az A Ridah by 2Pac",
    "Bounce Back by Big Sean",
    "Still Here by Drake",
    "Can't Tell Me Nothing by Kanye West",
    "HUMBLE. by Kendrick Lamar"
];

const comfortedPlaylist = [
    "Bad Habit by Steve Lacy",
    "Rock With You by Michael Jackson",
    "WAIT FOR U by Future",
    "Chanel by Frank Ocean",
    "Been Away by Brent Faiyaz"
];

const motivatedPlaylist = [
    "No Church In The Wild by Jay-Z",
    "Stronger by Kanye West",
    "Rah Tah Tah by Tyler, The Creator",
    "P.I.M.P. by 50 Cent",
    "Sacrifice by The Weeknd"

];

export async function getPlaylist2(currentMood: Mood2): Promise<string[]> {
    const playlists: Record<Mood2, string[]> = {
        calm: calmPlaylist,
        focused: focusedPlaylist,
        confident: confidentPlaylist,
        comforted: comfortedPlaylist,
        motivated: motivatedPlaylist
    };
    return playlists[currentMood];
}

