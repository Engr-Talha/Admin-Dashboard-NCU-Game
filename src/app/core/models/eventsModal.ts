export interface events {
    id: number;
    title: string;
    description: string;
    date: string,
    status: boolean;
    created_at: string;
    updated_at: string;
    questions: questions[]
}

export interface questions {
    id: 9,
    title: string,
    userName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    eventId: number,
    answers: answers[]
}

export interface answers {

    id: number,
    title: string,
    userName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    questionId: number
}



// {
//     "eventId": 1,
//     "title": "What is my name",
//     "userName": "Talha Ihtasham Ali",
//     "email": "talha@gmail.com"
//   }
// {
//     "id": 1,
//     "title": "Event 1",
//     "description": null,
//     "date": "2023-01-04T00:00:00.000Z",
//     "createdAt": "2023-01-04T11:29:03.040Z",
//     "updatedAt": "2023-01-04T11:29:03.040Z",
//     "questions": [
//       {
//         "id": 1,
//         "title": "What is my name",
//         "userName": "Talha Ihtasham Ali",
//         "email": "talha@gmail.com",
//         "createdAt": "2023-01-04T11:31:37.813Z",
//         "updatedAt": "2023-01-04T11:31:37.813Z",
//         "eventId": 1,
//         "answers": []
//       }
//     ]
//   }


interface blogImages {
    id: string;
    imageUrl: string;
    postId: string;
}