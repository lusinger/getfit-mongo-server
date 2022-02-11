interface EntryType{
  id: number;
  createdAt: Date;
  userId: String;
  contentId: String;
  amount: number;
  unit: 'g' | 'ml' | 'EL' | 'Pers';
  section: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  isRecipe: boolean;
}

export {EntryType};