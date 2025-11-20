mod auth;


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_log::Builder::new().build())
        .invoke_handler(tauri::generate_handler![
            auth::save_token,
            auth::get_token,
            auth::clear_token
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
