


export interface Users {
    id: any,
    email: string,
    password: string,
    isAdmin: boolean,
    isModerator: boolean,
    isVerified: boolean,
    refreshToken: string,
    profileImage: string,
    description: string,
    coverImage: string,
    backgroundImage: string,
    country: string,
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