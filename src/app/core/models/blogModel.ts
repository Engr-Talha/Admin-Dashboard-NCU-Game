export interface blog {
    id: number;
    type: string;
    title: string;
    description: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    imageUrl: string;
}

interface blogImages {
    id: string;
    imageUrl: string;
    postId: string;
}