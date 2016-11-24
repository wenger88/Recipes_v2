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
    nutritionals: Nutritional[],
    yields: number,
    servings: number,
    preparationTime: number,
    cookTime: number,
    readyIn: number,
    tags: string[],
    recipeTypeId: number,
    recipeName: string,
    recipeType: any[],
    cuisineId: number,
    cuisineName: any,
    cuisine: any[],
    mainIngredientId: number,
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
    rating: number
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

export interface Nutritional {
    id: number,
    proteine: string,
    deitaryFiber: string,
    fatTotal: string,
    energy: string,
    fatSaturated: string,
    sodium: string,
    carbohydrate: string,
    cholesterol: string
}

export interface Cuisine {
    cuisine: [
        {
            id: 1,
            name: "African"
        },
        {
            id: 2,
            name: "Basque"
        },
        {
            id: 3,
            name: "Belgian"
        },
        {
            id: 4,
            name: "Brazilian"
        },
        {
            id: 5,
            name: "Cajun"
        },
        {
            id: 6,
            name: "Chinese"
        },
        {
            id: 7,
            name: "Cowboy"
        },
        {
            id: 8,
            name: "Creole"
        },
        {
            id: 9,
            name: "Danish"
        },
        {
            id: 10,
            name: "Ethiopian"
        },
        {
            id: 11,
            name: "French"
        },
        {
            id: 12,
            name: "German"
        },
        {
            id: 13,
            name: "Hawaiian"
        },
        {
            id: 14,
            name: "Hungarian"
        },
        {
            id: 15,
            name: "Indian"
        },
        {
            id: 16,
            name: "Irish"
        },
        {
            id: 17,
            name: "Italian"
        },
        {
            id: 18,
            name: "Jamaican"
        },
        {
            id: 19,
            name: "Japanese"
        },
        {
            id: 20,
            name: "Jewish"
        },
        {
            id: 21,
            name: "Korean"
        },
        {
            id: 22,
            name: "Mediterranean"
        },
        {
            id: 23,
            name: "Mexican"
        },
        {
            id: 24,
            name: "Middle Eastern"
        },
        {
            id: 25,
            name: "New Zealand"
        },
        {
            id: 26,
            name: "Persian"
        },
        {
            id: 27,
            name: "Polish"
        },
        {
            id: 28,
            name: "Portuguese"
        },
        {
            id: 29,
            name: "Spanish"
        },
        {
            id: 30,
            name: "Thai"
        }
        ]
}

export interface RecipeType {
    recipeType: [
        {
            id: 1,
            name: "Baking"
        },
        {
            id: 2,
            name: "BBQ"
        },
        {
            id: 3,
            name: "Budget"
        },
        {
            id: 4,
            name: "Candy"
        },
        {
            id: 5,
            name: "Canning"
        },
        {
            id: 6,
            name: "Casserole"
        },
        {
            id: 7,
            name: "Comfort Food"
        },
        {
            id: 8,
            name: "Condiment"
        },
        {
            id: 9,
            name: "Cookie"
        },
        {
            id: 10,
            name: "Deep Fried"
        },
        {
            id: 11,
            name: "Dip"
        },
        {
            id: 12,
            name: "Glutten-Free"
        },
        {
            id: 13,
            name: "Grill"
        },
        {
            id: 14,
            name: "Low Carb"
        },
        {
            id: 15,
            name: "Quick and Easy"
        },
        {
            id: 16,
            name: "Salsa"
        },
        {
            id: 17,
            name: "Sauce"
        },
        {
            id: 18,
            name: "Vegan"
        },
        {
            id: 19,
            name: "Vegetarian"
        }

        ]
}

export interface SkillLevel {
    skillLevel: [
        "Beginner",
        "Intermediate",
        "Advanced"
        ]
}

export interface Course {
    course: [
        {
            id: 1,
            name: "Appetizer"
        },
        {
            id: 2,
            name: "Breakfast and Brunch"
        },
        {
            id: 3,
            name: "Dessert"
        },
        {
            id: 4,
            name: "Drink"
        },
        {
            id: 5,
            name: "Salad"
        },
        {
            id: 6,
            name: "Sandwich"
        },
        {
            id: 7,
            name: "Side Dish"
        },
        {
            id: 8,
            name: "Snack"
        },
        {
            id: 9,
            name: "Soup"
        },
        {
            id: 10,
            name: "Soup and Stew"
        },
        {
            id: 11,
            name: "Stew"
        },
        {
            id: 12,
            name: "Dinner"
        }
        ]
}


