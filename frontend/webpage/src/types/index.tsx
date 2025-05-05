export type RecipePreviewProps = {
    title: string,          
    description: string, 
    image?: string | File,  
    tags: Array<string>,    
};

export type APIResponceProps = {
    id: number,
    title: string,          
    description: string,
    ingredients: Array<string>,
    instructions: string,
    cookingTime: number,
    serving: number,
    image?: string | File,  
    tags: Array<string>,    
    createdAt: string,
    updatedAt: string
}

export class RecipePreviewData {
    title: string;
    description: string;
    image?: string | File;
    tags: Array<string> ;

    constructor(props: RecipePreviewProps){
       this.title = props.title;
       this.description = props.description;
       this.tags = props.tags;
       this.image = props.image;
    }
}