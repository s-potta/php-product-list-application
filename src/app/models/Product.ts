import { Comment } from './Comment';

export class Product {
    constructor() { }
    public Id: number;
    public Title: string;
    public Description: string;
    public Image: string;
    public Price: number;
    public Comments: Array<Comment>;
}