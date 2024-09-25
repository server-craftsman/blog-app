export interface IBlog {
    id: string;
    title: string;
    content: string;
    userId: string;
    blogCreatedAt: number;
    blogUpdatedAt: number;
    blogImage: string;
    topic: Array<string> | string;
}