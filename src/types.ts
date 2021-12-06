export enum QueryMethod {
  Get = 'get',
  Update = 'update',
  Create = 'create',
  Delete = 'delete',
}

export type GetHandlerModuleParams = {
  resource: string;
  method?: QueryMethod;
  plural?: boolean;
};

export type BlitzDataProviderParams = {
  invoke: (module: any, params: any) => any;
  searchEntities: (q: string) => any;
};

export type GetHandlerParams = GetHandlerModuleParams & Pick<BlitzDataProviderParams, 'invoke'>;
