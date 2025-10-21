# Brave Password Generator

This is a password generator extension for the Brave browser. It allows users to generate secure passwords easily and customize settings according to their preferences.

## Features

- Generate strong, random passwords.
- Customize password length and character types.
- User-friendly popup interface.
- Options/settings page for configuration.

## How to Use This Extension

1. Prepare the extension folder
   - If you downloaded a release: Download the ZIP file of this repo, then unzip it so you have the extension folder (the folder must contain manifest.json).
   - If you cloned the repo: use the project root folder.

2. Load the extension in Brave (very simple)
   - Open Brave and navigate to: brave://extensions/
   - Turn on "Developer mode" (toggle in the top right).
   - Click "Load unpacked".
   - In the file dialog, select the extension folder (the folder that contains manifest.json) and click "Select Folder".
   - The extension should appear in your extensions list.

3. Open and use the extension
   - Click the extension icon in the toolbar (or the puzzle icon, then pin the extension for easy access).
   - In the popup: choose the length and character options, click "Generate", then copy the password to your clipboard.
   - To change defaults, open the extension's Options/Settings page from the extension details or from within the popup (if provided).

4. Remove the extension
   - To remove this extension, go back to brave://extensions/ and click "Remove" on the extension card.

## Development (installation for running/building locally)

If you want to develop or build the extension locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/brave-password-generator.git
   ```

2. Navigate to the project directory:
   ```
   cd brave-password-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Development server:
   ```
   npm run start
   ```

5. Build for production:
   ```
   npm run build
   ```

## License

This project is licensed under the GNU General Public License v3.0 or later (GPL-3.0-or-later). See the LICENSE file for more details.