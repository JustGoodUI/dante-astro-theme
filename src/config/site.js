const RAW_BASE_PATH = '/';

export const BASE_PATH =
  RAW_BASE_PATH === '/' ? '/' : `/${RAW_BASE_PATH.replace(/^\/+|\/+$/g, '')}`;
