interface UserType{
  id: number;
  createdAt: Date,
  userName: string;
  mail: string;
  password: string;
  fullName?: string;
  age: number;
  height: number;
  currentWeight: number;
  targetWeight: number;
  changePerWeek: 1.2 | 1.375 | 1.55 | 1.725 | 1.9;
  gender: 'male' | 'female';
  calorieGoal: number;
}

export {UserType};