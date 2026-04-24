# Deployment Guide: How to Publish your Website to mubgm.in

Since you have already purchased the domain **mubgm.in** on GoDaddy, follow these simple steps to make your website live on the internet.

## Step 1: Upload your files to a Host
You need a "Home" for your files. We recommend using **GitHub Pages** (Free) or **Vercel** (Free/Premium).

### Option A: Using GitHub Pages (Easiest for Static Sites)
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new repository named `smart-lighting`.
3. Upload all the files from this folder (`index.html`, `style.css`, `script.js`, `package.json`, and the `assets` folder) to that repository.
4. Go to **Settings > Pages** in your GitHub repository and set the branch to `main`.

## Step 2: Connect your GoDaddy Domain
Once your site is "hosted" on GitHub or Vercel, you need to tell GoDaddy where to send people who type `mubgm.in`.

1. **Get the IP Address/CNAME**: 
   - If using GitHub, it's usually `your-username.github.io`.
   - If using Vercel, they will provide a specific CNAME record.
2. **Update DNS on GoDaddy**:
   - Go to your **GoDaddy DNS Management** page (the one in your screenshot).
   - Under the **DNS** tab, add or edit the **A Record** (Host: `@`) to point to the IP provided by your host.
   - Add a **CNAME Record** (Host: `www`) pointing to your host URL (e.g., `your-username.github.io`).

## Step 3: Verify and Secure
1. Go to your Host settings (GitHub/Vercel) and add **mubgm.in** as a "Custom Domain".
2. Enable **HTTPS** (SSL) — both GitHub and Vercel provide this for free.
3. Wait about 1-2 hours for the "Internet" to update (DNS propagation).

---
**Your website is now ready! Once you follow these steps, searching `mubgm.in` will show your professional Smart Street Light landing page.**
