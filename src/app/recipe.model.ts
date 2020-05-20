import { User } from './shared/user';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: User[];

  constructor(name: string, desc: string, imagePath: string, ingredients: User[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
