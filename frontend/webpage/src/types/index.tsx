export type RecipePreviewProps = {
  title: string;
  description?: string;
  image?: string;
  tags: string[];
};

export class RecipePreviewData {
  title: string;
  description?: string;
  image?: string;
  tags: string[];

  constructor(props: RecipePreviewProps) {
    this.title = props.title;
    this.description = props.description;
    this.tags = props.tags;
    this.image = props.image;
  }
}

export interface Recipe {
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  ingredients: string[];
  cooking_time: number;
  servings: number;
  instructions: string;
}
