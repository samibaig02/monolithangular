import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 24823,
};

export const sampleWithPartialData: IEmployee = {
  id: 1917,
  employeeID: 32274,
};

export const sampleWithFullData: IEmployee = {
  id: 12291,
  employeeID: 16835,
  name: 'wholly mob',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
