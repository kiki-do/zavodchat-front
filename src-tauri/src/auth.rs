use keyring::Entry;

#[tauri::command]
pub fn save_token(token: String) -> Result<(), String> {
    let entry = Entry::new("my-service", "token").map_err(|e| e.to_string())?;
    entry.set_password(&token).map_err(|e| e.to_string())
}

#[tauri::command]
pub fn get_token() -> Result<String, String> {
    let entry = Entry::new("my-service", "token").map_err(|e| e.to_string())?;
    entry.get_password().map_err(|e| e.to_string())
}

#[tauri::command]
pub fn clear_token() -> Result<(), String> {
    let entry = Entry::new("my-service", "token").map_err(|e| e.to_string())?;
    entry.delete_credential().map_err(|e| e.to_string())
}
