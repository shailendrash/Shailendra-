export const COMMON = {
  CREATED_SUCESSFULLY: (entity: string) => `${entity} created successfully`,
  NOT_FOUND: (entity: string) => `${entity} not found`,
  FOUND: (entity: string) => `${entity} found sucessfully`,
  DELETE: (entity: string) => `${entity} deleted successfully`,
  CREATED_SUCESSFULLY_FAIL: (entity: string) => `${entity} creation failed`,
  UPDATE: (entity: string) => `${entity} updated successfully`,
  UPDATE_FAIL: (entity: string) => `${entity} updation failed.`,
  DELETE_FAIL: (entity: string) => `${entity} deletion failed `,
  ID: ':id',
  PID: 'id',
};

export const ENTITY = {
  FORM: 'FORM',
};
export const ROUTE = {
  FORM:'form'
};
export const MESSAGE = {
  FORM: {
    FORM_CREATED_SUCCESSFULLY: 'FORM created successfully',
    FORM_NOT_FOUND: 'FORM not found',
  },
};



