import { invoke } from '@tauri-apps/api/core';

export const getAccessToken = async () => await invoke('get_token');

export const saveToken = async (accessToken: string) =>
  await invoke('save_token', { token: accessToken });

export const clearToken = async () => await invoke('clear_token');
