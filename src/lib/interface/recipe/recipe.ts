export interface Recipe {
  id: number;
  name: string;
  prepTime: number;
  waitTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  instructions: string;
  ingredients: Array<string>;
  tags: Array<string>;
}
