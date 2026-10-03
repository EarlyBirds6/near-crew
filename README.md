# NEAR CREW — Landing Page

Static first-pass Web3 landing page inspired by the visual language of modern NEAR NFT mint sites, but with an original layout and artwork.

## Run locally
Open `index.html` directly in a browser, or serve the folder:
- `python3 -m http.server 8080`
- visit http://localhost:8080

## Production integration
The UI is ready for:
1. NEAR wallet selector / wallet connection
2. Real whitelist endpoint
3. Real claim counter from your API / contract
4. Countdown from a server-side mint timestamp
5. NFT metadata/gallery
6. Mint contract call
7. X / Telegram / Discord links

Replace the demo wallet handler in `app.js` with your chosen NEAR wallet SDK and contract details.
