/**
 * Created by goran.pavlovski on 11/21/2016.
 */

export interface Recipe {
    id: number,
    title: string,
    description: string,
    image: string,
    ingredients: Ingredients[],
    steps: Steps[],
    yields: number,
    servings: number,
    preparationTime: any,
    cookTime: any,
    readyIn: any,
    tags: string[],
    recipeTypeId: number,
    recipeTypeName: string,
    recipeType: any[],
    cuisineId: number,
    cuisineName: any,
    cuisine: any[],
    mainIngredientId: number,
    mainIngredientName: string,
    mainIngredient: any[],
    courseName: string,
    courseId: number
    course: any[],
    occasionId: number,
    occasionName: string,
    occasion: any[],
    skillLevel: any[],
    skillLevelId: number,
    skillLevelName: string,
    author: string,
    rating: number,
    date: any,
    comments: Comments[]
}

export interface Ingredients {
    id: number,
    description: string
}

export interface Steps {
    id: number,
    image: string,
    description: string
}

export interface Comments {
    id: number,
    recipeId: number,
    name: string,
    comment: string,
    date: string,
    rating: number,
    likes: number
}

/*
 export interface Cuisine {
 id: number,
 name: string,
 }

 export interface RecipeType {
 id: number,
 name: string,
 }

 export interface SkillLevel {
 id: number,
 name: string
 }

 export interface Course {
 id: number,
 name: string,
 }

 export interface Occasion {
 id: number,
 name: string,
 }

 export interface MainIngredient {
 id: number,
 name: string,
 }*/
