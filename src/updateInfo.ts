export const GameVersion = "Alpha_0.0.1";

export var GameReleases = {
    Windows: `/staticfiles/releases/#001plat-WINDOWS-x64-DwjeQFEBwE`,
    Android: `/staticfiles/releases/#002plat-ANDROID-TeUXaaJp34`
}

export var Assets: Asset[] = [
    { 
        name: "BGM_S", 
        path: "/staticfiles/soundbanks/Android/BGM_S.bnk", 
        type: "soundbank", 
        version: "i3p8UvTo8juvJt5mXW19PN7bm0Z5qKiVxAyPW2qrcg",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Android/BGM_S.txt", 
            platform: "Android",
            lang: "en_us"
        }
    },
    { 
        name: "Init", 
        path: "/staticfiles/soundbanks/Android/Init.bnk", 
        type: "soundbank", 
        version: "tAlO5Xaxle0bi3T2AwJazIuJkmOz2B8PCOg6THf68",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Android/Init.txt", 
            platform: "Android",
            lang: "en_us"
        }
    },
    { 
        name: "SFX", 
        path: "/staticfiles/soundbanks/Android/SFX.bnk", 
        type: "soundbank", 
        version: "lPs0VNjU2Oi6aMwqzSL51kQNbOQ3w7vF5F49rOgxok",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Android/SFX.txt", 
            platform: "Android",
            lang: "en_us"
        }
    },
    { 
        name: "BGM_S", 
        path: "/staticfiles/soundbanks/Windows/BGM_S.bnk", 
        type: "soundbank", 
        version: "Kuz1NkxOppG6jPunYTkXgNgJfb5yvum4leEGaVSTjk",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Windows/BGM_S.txt", 
            platform: "Windows",
            lang: "en_us"
        }
    },
    { 
        name: "BGM_S", 
        path: "/staticfiles/soundbanks/Windows/Init.bnk", 
        type: "soundbank", 
        version: "i18cdZkNU8MJ9j1iyXYcJlzt7HdiVm3EClmgIWQ1g",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Windows/Init.txt", 
            platform: "Windows",
            lang: "en_us"
        }
    },
    { 
        name: "SFX", 
        path: "/staticfiles/soundbanks/Windows/Init.bnk", 
        type: "soundbank", 
        version: "CEneFnr0Sipxex5RNN30wZQ3q25mwBJqiWZK4OanM",
        soundbank_info: { 
            contents: "/staticfiles/soundbanks/Windows/SFX.txt", 
            platform: "Windows",
            lang: "en_us"
        }
    },



    { name: "Game Logo", path: "/staticfiles/assets/images/GameIcon.png", type: "sprite", version: "7a7f44d9-22a7-45d2-aea4-184272f1fc5c" },
    { name: "In-game Logo", path: "/staticfiles/assets/images/IGLogo.png", type: "sprite", version: "9eeb5605-559a-4c5b-97fa-4a249e1d6c0d" },
    { name: "Group Logo", path: "/staticfiles/assets/images/group-logo-transparent.png", type: "sprite", version: "dc32c312-96f2-40ed-b010-218490a4fcd3" }
]

type AssetType = "soundbank" | "sprite" | "sound" | "binary"

export type Asset = {
    name: string,
    path: string,
    type: AssetType,
    version: string,
    soundbank_info?: SoundBank
}

export interface SoundBank {
    contents: string,
    platform: string,
    lang: string
}
export var UpdateInfo = [{
    GameVersion,
    GameReleases,
    Assets
}]