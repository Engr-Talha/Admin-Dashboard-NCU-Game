


export interface Users {
    id: any,
    email: string,
    password: string,
    isAdmin: boolean,
    isModerator: any,
    isVerified: boolean,
    refreshToken: string,
    profileImage: any,
    description: any,
    verificationToken: any,
    username: any,
    invite: any,
    coverImage: any,
    backgroundImage: any,
    country: any,
    xp: number,
    battleRank: number,
    gems: number,
    aura: any,
    createdAt: string,
    updatedAt: string,
    LevelId: any
}

export interface WinStats {
    win?: any;
    lose?: any;
    drew?: any;
}

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: any;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}