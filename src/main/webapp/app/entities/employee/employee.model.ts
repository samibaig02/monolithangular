export interface IEmployee {
  id: number;
  employeeID?: number | null;
  name?: string | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
